// Turns content-src/{docs,media}/5.人間報導/<date_title>/ into src/news.json and
// web-sized photos in public/img/news/<slug>/. Re-runnable; skips existing images.
// Usage: node scripts/ingest-news.mjs
import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;
const DOCS = join(ROOT, 'content-src/docs/5.人間報導');
const MEDIA = join(ROOT, 'content-src/media/5.人間報導');
const OUT = join(ROOT, 'public/img/news');
const IMG = /\.(jpe?g|png|heic|webp)$/i;

const clean = s => s.replace(/﻿/g, '').replace(/\r/g, '').replace(/[ \t　]+$/gm, '').trim();

function parse(text, fallbackTitle) {
  const lines = clean(text).split('\n').map(l => l.trim());
  const nonEmpty = lines.filter(Boolean);
  let title = nonEmpty[0] || fallbackTitle;
  if (title.length > 60) title = fallbackTitle;
  const body = [], captions = [];
  let started = false;
  for (const l of nonEmpty.slice(1)) {
    if (/^(美洲佛光|人間社|新聞稿|圖[:：]|攝影[:：]|文[:：]|撰文|供稿)/.test(l) && started) break;
    if (l.length >= 40) { if (!body.includes(l)) body.push(l); started = true; }
    else if (started && l.length >= 4 && !/^(v\d|\d+$)/i.test(l)) captions.push(l);
  }
  return { title: title.replace(/^[【\[]|[】\]]$/g, '').trim(), body, captions };
}

function resize(src, dst, max, q) {
  if (existsSync(dst)) return true;
  try { execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(q), '-Z', String(max), src, '--out', dst], { stdio: 'ignore' }); return true; }
  catch { return false; }
}

const folders = (await readdir(DOCS)).filter(f => !f.startsWith('.')).sort();
const items = [];
for (const folder of folders) {
  const m = folder.match(/(\d{4})\.(\d{2})\.(\d{2})_(.+)$/);
  if (!m) continue;
  const date = `${m[1]}-${m[2]}-${m[3]}`;
  const fallback = m[4].replace(/_/g, ' ');
  const txts = (await readdir(join(DOCS, folder))).filter(f => f.endsWith('.txt'));
  if (!txts.length) continue;
  // Prefer the longest text (some folders hold a draft and a final).
  let best = null;
  for (const t of txts) { const s = await readFile(join(DOCS, folder, t), 'utf8'); if (!best || s.length > best.length) best = s; }
  const { title, body, captions } = parse(best, fallback);
  if (!body.length) continue;
  const slug = `${date}-${String(items.filter(i => i.date === date).length + 1)}`;
  const photos = [];
  const mdir = join(MEDIA, folder);
  if (existsSync(mdir)) {
    const files = (await readdir(mdir)).filter(f => IMG.test(f)).sort();
    await mkdir(join(OUT, slug), { recursive: true });
    for (const [n, f] of files.slice(0, 4).entries()) {
      const name = `${n + 1}.jpg`;
      if (resize(join(mdir, f), join(OUT, slug, name), 1280, 60)) photos.push(`news/${slug}/${name}`);
    }
    if (photos.length) resize(join(mdir, files[0]), join(OUT, slug, 'thumb.jpg'), 640, 58);
  }
  items.push({ slug, date, title, body, captions: captions.slice(0, photos.length), photos, thumb: photos.length ? `news/${slug}/thumb.jpg` : null, source: folder });
}
items.sort((a, b) => b.date.localeCompare(a.date));
await writeFile(join(ROOT, 'src/news.json'), JSON.stringify(items, null, 1));
console.log(`${items.length} articles, ${items.filter(i => i.photos.length).length} with photos, ${items.reduce((s, i) => s + i.photos.length, 0)} photos`);
