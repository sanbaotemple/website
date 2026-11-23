// Static site builder: src/content.mjs → dist/{,en/}*.html. No dependencies.
import { mkdir, writeFile, readFile, cp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT = new URL('../', import.meta.url);
const out = p => new URL('dist/' + p, ROOT);
const { content, FORM_URL } = await import(new URL('src/content.mjs', ROOT));

// Event dates come from the registration site so they never drift apart.
// Falls back to the vendored snapshot when offline.
async function loadEvents() {
  const snap = new URL('src/forms.snapshot.js', ROOT);
  try {
    const r = await fetch(FORM_URL + '/forms.js', { signal: AbortSignal.timeout(8000) });
    if (r.ok) await writeFile(snap, await r.text());
  } catch { /* offline: use snapshot */ }
  return import(pathToFileURL(snap.pathname).href + '?t=' + Date.now());
}
const forms = await loadEvents();

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const arrow = '<span class="arr" aria-hidden="true">→</span>';
const chev = '<span class="chev" aria-hidden="true">→</span>';
const img = (src, alt = '', cls = '', eager = false) => src ? `<img src="/img/${esc(src)}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''} ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>` : '';
const paras = t => (Array.isArray(t) ? t : String(t ?? '').split(/\n\s*\n/)).filter(Boolean).map(p => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');

function href(lang, path) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return (lang === 'en' ? '/en' : '') + path;
}
const ext = h => /^https?:/.test(h) ? ' target="_blank" rel="noopener"' : '';

// ---------- events (from the registration site) ----------
function eventList(lang) {
  const t = forms.today();
  return forms.EVENTS.map(e => ({ ...e, w: forms.windowOf(e), st: forms.stateOf(e) }))
    .filter(e => e.w.close >= t)
    .sort((a, b) => a.start.localeCompare(b.start));
}
function evDate(e, lang) {
  const [y, m, d] = e.start.split('-').map(Number), [, m2, d2] = e.end.split('-').map(Number);
  if (lang === 'en') {
    const mo = n => new Date(2000, n - 1, 1).toLocaleString('en-US', { month: 'short' });
    return e.start === e.end ? `${mo(m)} ${d}, ${y}` : m === m2 ? `${mo(m)} ${d}–${d2}, ${y}` : `${mo(m)} ${d} – ${mo(m2)} ${d2}, ${y}`;
  }
  const wk = iso => '日一二三四五六'[new Date(iso + 'T12:00').getDay()];
  const yr = y === Number(forms.today().slice(0, 4)) ? '' : `${y} 年 `;
  if (e.start === e.end) return `${yr}${m}/${d}（${wk(e.start)}）`;
  return `${yr}${m}/${d} – ${m2 === m ? '' : m2 + '/'}${d2}（${wk(e.start)}–${wk(e.end)}）`;
}
function evCard(e, c, lang) {
  const ui = c.ui, info = c.eventInfo[e.id] || {};
  const open = e.st === 'open';
  const title = lang === 'en' ? (info.en || e.title) : e.title;
  return `<article class="ev reveal" data-close="${e.w.close}" data-open="${e.w.open}">
  <div class="img">${img(info.img || c.eventFallbackImg, title)}</div>
  <div class="body">
    <div class="meta"><span>${esc(evDate(e, lang))}</span>${open ? `<span class="pill open">${esc(ui.registering)}</span>` : e.form ? '' : ''}</div>
    <h3 class="t">${esc(title)}</h3>
    ${info.desc ? `<p class="muted" style="margin:0;font-size:15px">${esc(info.desc)}</p>` : ''}
    <div class="foot">${e.form ? `<a class="btn btn-ink btn-sm reg" href="${FORM_URL}/?event=${e.id}">${esc(ui.register)} ${arrow}</a>` : `<span class="muted" style="font-size:14px">${esc(e.st === 'upcoming' ? ui.opensOn(e.w.open) : ui.byPhone)}</span>`}</div>
  </div></article>`;
}

// ---------- section renderers ----------
const R = {
  prose: (s) => `<div class="prose reveal">${s.body ? paras(s.body) : ''}${(s.list || []).length ? `<ul>${s.list.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}</div>`,
  split: (s, c, lang) => `<div class="split${s.reverse ? ' rev' : ''}"><div class="media reveal">${img(s.img, s.alt || s.title)}</div><div class="reveal">${s.kicker ? `<div class="eyebrow">${esc(s.kicker)}</div>` : ''}<h2 class="h2">${esc(s.title)}</h2>${paras(s.body)}${s.actions ? `<div class="actions">${s.actions.map(a => `<a class="btn ${a.style || 'btn-ink'}" href="${href(lang, a.href)}"${ext(a.href)}>${esc(a.label)} ${arrow}</a>`).join('')}</div>` : ''}</div></div>`,
  tiles: (s, c, lang) => `<div class="tiles">${s.items.map(i => { const tag = i.href ? 'a' : 'div'; return `<${tag} class="tile reveal"${i.href ? ` href="${href(lang, i.href)}"${ext(i.href)}` : ''}>${i.img ? `<div class="media">${img(i.img, i.title)}</div>` : ''}<div class="t">${esc(i.title)}</div>${i.meta ? `<div class="muted" style="font-size:14px">${esc(i.meta)}</div>` : ''}${i.desc ? `<p>${esc(i.desc)}</p>` : ''}</${tag}>`; }).join('')}</div>`,
  rows: (s, c, lang) => `<div class="rows">${s.items.map(i => { const tag = i.href ? 'a' : 'div'; return `<${tag} class="row reveal"${i.href ? ` href="${href(lang, i.href)}"${ext(i.href)}` : ''}><div class="date">${esc(i.date || '')}</div><div><div class="t">${esc(i.title)}</div>${i.desc ? `<div class="s">${esc(i.desc)}</div>` : ''}</div>${i.href ? chev : '<span></span>'}</${tag}>`; }).join('')}</div>`,
  gallery: (s) => `<div class="gallery">${s.items.map(i => `<figure class="reveal">${img(i.img || i, i.alt || '')}${i.cap ? `<figcaption>${esc(i.cap)}</figcaption>` : ''}</figure>`).join('')}</div>`,
  faq: (s, c, lang) => `<div class="faq"><div class="reveal"><h2 class="h2">${esc(s.title)}</h2>${s.lede ? `<p class="lede" style="margin-top:16px">${esc(s.lede)}</p>` : ''}</div><div>${s.items.map((q, n) => `<details class="reveal"${n === 0 && s.openFirst ? ' open' : ''}><summary>${esc(q.q)}<span class="pm" aria-hidden="true">+</span></summary><div class="ans">${paras(q.a)}${q.href ? `<a class="link" href="${href(lang, q.href)}"${ext(q.href)}>${esc(q.link)} →</a>` : ''}</div></details>`).join('')}</div></div>`,
  events: (s, c, lang) => { const list = eventList(lang).slice(0, s.limit || 99); return `<div class="rail">${list.map(e => evCard(e, c, lang)).join('')}</div>`; },
  calendar: (s, c, lang) => {
    let html = `<table class="cal"><thead><tr><th>${esc(c.ui.date)}</th><th>${esc(c.ui.event)}</th></tr></thead><tbody>`, month = '';
    for (const r of c.calendar) {
      const m = r.d.slice(0, 7);
      if (m !== month) { month = m; const [y, mm] = m.split('-').map(Number); html += `<tr class="m"><td colspan="2">${lang === 'en' ? new Date(y, mm - 1, 1).toLocaleString('en-US', { month: 'long', year: 'numeric' }) : `${y} 年 ${mm} 月`}</td></tr>`; }
      const [, mm, dd] = r.d.split('-').map(Number);
      html += `<tr><td class="d">${mm}/${dd}${r.to ? '–' + r.to : ''}${lang === 'en' ? '' : ` <span class="muted">（${r.w}）</span>`}</td><td>${esc(lang === 'en' ? (r.en || r.zh) : r.zh)}${lang === 'en' || !r.en ? '' : `<div class="en">${esc(r.en)}</div>`}</td></tr>`;
    }
    return html + '</tbody></table>';
  },
  band: (s, c, lang) => `<div class="band reveal${s.reverse ? ' rev' : ''}"><div class="inner"><div class="media">${img(s.img, s.alt || '')}</div><div class="text">${s.kicker ? `<div class="eyebrow" style="color:#e3c78f">${esc(s.kicker)}</div>` : ''}<blockquote>${esc(s.quote)}</blockquote><div class="who">${esc(s.who)}</div>${s.body ? `<div style="margin-top:20px">${paras(s.body)}</div>` : ''}${s.link ? `<a class="link" href="${href(lang, s.link.href)}"${ext(s.link.href)}>${esc(s.link.label)} →</a>` : ''}</div></div></div>`,
  embed: (s) => `<div class="reveal" style="border-radius:var(--r-lg);overflow:hidden;border:1px solid var(--line);aspect-ratio:${s.ratio || '16/9'}"><iframe src="${esc(s.src)}" title="${esc(s.title)}" loading="lazy" style="width:100%;height:100%;border:0" ${s.allow ? `allow="${esc(s.allow)}"` : ''}></iframe></div>`,
  welcome: (s, c, lang) => `<div class="welcome"><div class="reveal"><h2 class="h2" style="margin-bottom:20px">${esc(s.title)}</h2><div class="prose">${paras(s.body)}</div>${s.link ? `<a class="link" href="${href(lang, s.link.href)}">${esc(s.link.label)} →</a>` : ''}</div><div class="quick">${s.tiles.map(t => `<a class="reveal" href="${href(lang, t.href)}"${ext(t.href)}>${img(t.img, '')}<span>${esc(t.label)}</span></a>`).join('')}</div></div>`,
  // announcements: posters on the left, dated rows on the right
  notice: (s, c, lang) => `<div class="slides reveal" data-slides aria-roledescription="carousel" aria-label="${esc(s.title)}"><div class="track">${s.posters.map((p, n) => `<a class="slide${n === 0 ? ' on' : ''}" href="${p.href ? href(lang, p.href) : '/img/' + esc(p.img)}"${p.href ? ext(href(lang, p.href)) : ' data-lightbox'} style="--bg:url('/img/${esc(p.img)}')" aria-label="${esc(p.alt)}${p.cta ? '・' + esc(p.cta) : ''}" aria-hidden="${n !== 0}" tabindex="${n === 0 ? 0 : -1}">${img(p.img, p.alt, '', n === 0)}${p.cta ? `<span class="slide-cta">${esc(p.cta)} →</span>` : ''}</a>`).join('')}</div>${s.posters.length > 1 ? `<button type="button" class="nav-prev" aria-label="${esc(c.ui.prev)}">‹</button><button type="button" class="nav-next" aria-label="${esc(c.ui.next)}">›</button><div class="dots">${s.posters.map((p, n) => `<button type="button" aria-label="${n + 1}"${n === 0 ? ' aria-current="true"' : ''}></button>`).join('')}</div>` : ''}</div>`,
  // latest news cards
  news: (s, c, lang) => `<div class="cards">${NEWS.slice(0, s.limit || 6).map(n => newsCard(n, c, lang)).join('')}</div>`,
  // 大師法語 scratch card
  scratch: (s, c, lang) => { const qs = QUOTES.map(q => lang === 'en' ? { text: q.en, note: q.enSrc } : { text: q.zh, note: q.zhSrc }); return `<div class="scratch-wrap${s.reverse ? ' rev' : ''}"><div class="reveal"><h2 class="h2">${esc(s.title)}</h2>${s.lede ? `<p class="lede" style="margin-top:14px">${esc(s.lede)}</p>` : ''}<div class="actions" style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-ink" type="button" data-scratch-next>${esc(s.again)} ${arrow}</button><button class="btn btn-ghost" type="button" data-scratch-save>${esc(c.ui.save)}</button>${s.link ? `<a class="btn btn-ghost" href="${href(lang, s.link.href)}"${ext(s.link.href)}>${esc(s.link.label)} ↗</a>` : ''}</div></div>
  <div class="scratch reveal" data-quotes='${esc(JSON.stringify(qs))}' data-hint="${esc(s.hint)}" data-site="${esc(c.site.name)}"><img class="ink" src="/img/zen.png" alt=""><blockquote aria-live="polite"></blockquote><canvas aria-hidden="true"></canvas><button type="button" class="reveal-btn sr-only" data-scratch-reveal>${esc(s.revealLabel)}</button></div></div>`; },
  // two rows of photos drifting in opposite directions (Alora partner-logo strip)
  marquee: (s) => { const rows = [s.items]; return `<div class="marquee reveal">${rows.map((r, k) => `<div class="mq-row${k ? ' rev' : ''}"><div class="mq-track">${[...r, ...r].map((i, n) => `<figure${n >= r.length ? ' aria-hidden="true"' : ''}><img src="/img/thumb/${esc(i.img || i)}" alt="${esc(i.alt || '')}" decoding="async"></figure>`).join('')}</div></div>`).join('')}</div>`; },
  // course groups that open to a list of classes with sign-up links
  courses: (s, c, lang) => `<div class="course-groups">${s.groups.map(g => `<details class="course reveal"><summary>${g.img ? `<span class="media">${img(g.img, g.title)}</span>` : ''}<span class="txt"><span class="t">${esc(g.title)}</span>${g.desc ? `<span class="d">${esc(g.desc)}</span>` : ''}<span class="n">${esc(c.ui.courseCount(g.items.length))}</span></span><span class="pm" aria-hidden="true">+</span></summary><ul>${g.items.map(i => `<li><div><div class="ct">${esc(i.title)}</div>${i.meta ? `<div class="cm">${esc(i.meta)}</div>` : ''}${i.desc ? `<div class="cm">${esc(i.desc)}</div>` : ''}</div>${i.href ? `<a class="btn btn-ink btn-sm reg" href="${href(lang, i.href)}"${ext(i.href)}>${esc(c.ui.signup)}</a>` : `<span class="muted cs">${esc(i.status || c.ui.signupSoon)}</span>`}</li>`).join('')}</ul></details>`).join('')}</div>`,
  // ---- founder page, in the visual language of FGS's memorial site ----
  fhero: (s) => `<section class="fhero"><div class="fh-bg" style="--bg:url('/img/${esc(s.bg)}')"></div><div class="wrap fh-inner"><figure class="fh-photo reveal"><span class="disc" aria-hidden="true"></span>${img(s.img, s.alt, '', true)}</figure><h1 class="fh-title reveal" aria-label="${esc(s.small + ' ' + s.name)}"><span class="small">${esc(s.small)}</span><span class="big">${esc(s.name)}</span>${s.sub ? `<span class="sub">${esc(s.sub)}</span>` : ''}</h1></div></section>`,
  bioband: (s) => `<section class="bioband"><div class="wrap bb-inner"><div class="bb-name reveal"><div class="n">${esc(s.name)}</div><div class="y">${esc(s.years)}</div></div><div class="bb-text reveal">${paras(s.body)}</div></div></section>`,
  missions: (s, c, lang) => `<div class="missions">${s.items.map(m => `<article class="mission reveal"><h3><span class="mt">${esc(m.title)}</span><span class="ms">${esc(m.sub)}</span></h3><div class="mstrip">${m.imgs.map(i => `<div>${img(i, m.title)}</div>`).join('')}</div>${m.desc ? `<p>${esc(m.desc)}</p>` : ''}${m.href ? `<a class="link" href="${href(lang, m.href)}"${ext(m.href)}>${esc(m.link)} →</a>` : ''}</article>`).join('')}</div>`,
  timeline: (s) => `<ol class="timeline">${s.items.map(t => `<li class="reveal${t.here ? ' here' : ''}"><div class="ty">${esc(t.year)}</div><div class="tt"><div class="tn">${esc(t.title)}</div>${t.desc ? `<p>${esc(t.desc)}</p>` : ''}</div></li>`).join('')}</ol>`,
  linkrow: (s, c, lang) => `<div class="linkrow reveal">${s.items.map(l => `<a class="btn ${l.style || 'btn-ghost'}" href="${href(lang, l.href)}"${ext(l.href)}>${esc(l.label)} ↗</a>`).join('')}</div>`,
  // home-page founder teaser: same language as the founder page, compact
  fteaser: (s, c, lang) => `<div class="fteaser reveal"><div class="ft-bg" style="--bg:url('/img/${esc(s.bg)}')"></div><figure class="fh-photo ft-photo"><span class="disc" aria-hidden="true"></span>${img(s.img, s.alt)}</figure><h2 class="fh-title ft-title"><span class="small">${esc(s.small)}</span><span class="big">${esc(s.name)}</span></h2><div class="ft-text"><blockquote>${esc(s.quote)}</blockquote><div class="ft-years">${esc(s.years)}</div>${s.body ? `<p>${esc(s.body)}</p>` : ''}<a class="btn btn-ink ft-go" href="${href(lang, s.link.href)}">${esc(s.link.label)} ${arrow}</a></div></div>`,
  // big call-to-action band (like Hsi Lai's 贊助我們)
  cta: (s, c, lang) => `<div class="cta-band reveal">${img(s.img, '')}<div class="inner"><h2 class="h2">${esc(s.title)}</h2>${s.lede ? `<p>${esc(s.lede)}</p>` : ''}<div class="actions">${s.actions.map(a => `<a class="btn ${a.style || 'btn-light'}" href="${href(lang, a.href)}"${ext(a.href)}>${esc(a.label)} ${arrow}</a>`).join('')}</div></div></div>`,
  links: (s, c, lang) => `<div class="linkgrid">${s.items.map(i => `<div class="reveal"><div class="t">${esc(i.title)}</div><div class="ls">${i.links.map(l => `<a class="link" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div></div>`).join('')}</div>`,
};

const QUOTES = JSON.parse(await readFile(new URL('src/quotes.json', ROOT), 'utf8'));
// ---------- news ----------
const NEWS = JSON.parse(await readFile(new URL('src/news.json', ROOT), 'utf8'));
const newsDate = (d, lang) => { const [y, m, dd] = d.split('-').map(Number); return lang === 'en' ? new Date(y, m - 1, dd).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : `${y}.${String(m).padStart(2, '0')}.${String(dd).padStart(2, '0')}`; };
const excerpt = (n, len = 64) => { const t = n.body[0] || ''; return t.length > len ? t.slice(0, len) + '…' : t; };
function newsCard(n, c, lang) {
  return `<a class="card reveal" href="${href(lang, `/news/${n.slug}/`)}"><div class="media">${img(n.thumb, n.title)}</div><div class="body"><div class="meta">${esc(newsDate(n.date, lang))}</div><h3 class="t">${esc(n.title)}</h3><p>${esc(excerpt(n))}</p></div></a>`;
}
function newsIndex(c, lang) {
  const years = [...new Set(NEWS.map(n => n.date.slice(0, 4)))];
  return `<section class="page-hero"><div class="wrap"><h1 class="display reveal">${esc(c.pages.news.title)}</h1><p class="lede reveal">${esc(c.pages.news.lede)}</p>${lang === 'en' ? `<p class="muted reveal">${esc(c.ui.newsInChinese)}</p>` : ''}</div></section>` +
    years.map(y => `<section class="sec tight" id="y${y}"><div class="wrap"><h2 class="h2 reveal" style="margin-bottom:28px">${y}</h2><div class="cards">${NEWS.filter(n => n.date.startsWith(y)).map(n => newsCard(n, c, lang)).join('')}</div></div></section>`).join('');
}
function newsArticle(n, i, c, lang) {
  const prev = NEWS[i + 1], next = NEWS[i - 1];
  // Captions in the source docs aren't reliably paired with photo files, so they are not shown.
  const photos = n.photos.map((p, k) => `<figure>${img(p, n.title, '', k === 0)}</figure>`);
  return `<article class="article"><div class="wrap narrow"><a class="link back" href="${href(lang, '/news/')}">← ${esc(c.pages.news.title)}</a><div class="meta">${esc(newsDate(n.date, lang))}</div><h1 class="h2">${esc(n.title)}</h1></div>
  ${photos[0] ? `<div class="wrap"><div class="lead-photo">${photos[0]}</div></div>` : ''}
  <div class="wrap narrow"><div class="prose">${n.body.map(p => `<p>${esc(p)}</p>`).join('')}</div>
  ${photos.length > 1 ? `<div class="photo-grid">${photos.slice(1).join('')}</div>` : ''}
  <nav class="pn">${prev ? `<a href="${href(lang, `/news/${prev.slug}/`)}"><small>${esc(c.ui.older)}</small>${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="r" href="${href(lang, `/news/${next.slug}/`)}"><small>${esc(c.ui.newer)}</small>${esc(next.title)}</a>` : '<span></span>'}</nav></div></article>`;
}

function section(s, c, lang) {
  const body = R[s.kind](s, c, lang);
  if (s.kind === 'band') return `<section class="sec" id="${s.id || ''}">${body}</section>`;
  if (s.kind === 'fhero' || s.kind === 'bioband') return body;
  const head = ['faq', 'split', 'scratch', 'cta', 'welcome', 'fteaser'].includes(s.kind) || s.noHead || !s.title ? '' : `<div class="sec-head"><div class="reveal">${s.kicker ? `<div class="eyebrow">${esc(s.kicker)}</div>` : ''}<h2 class="h2">${esc(s.title)}</h2>${s.lede ? `<p class="lede">${esc(s.lede)}</p>` : ''}</div>${s.more ? `<a class="link reveal" href="${href(lang, s.more.href)}"${ext(s.more.href)}>${esc(s.more.label)} →</a>` : ''}</div>`;
  return `<section class="sec${s.tight ? ' tight' : ''}"${s.id ? ` id="${s.id}"` : ''}${s.bgImg ? ` style="--bgimg:url('/img/${s.bgImg}')" data-bgimg` : s.bg ? ` style="background:var(--paper-2)"` : ''}><div class="wrap">${head}${body}</div></section>`;
}

const ICONS = {"YouTube": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9L15.5 12z\"/></svg>", "Instagram": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2.2c-2.7 0-3 0-4 .1-3.6.2-5.6 2.2-5.8 5.8-.1 1-.1 1.3-.1 3.9s0 3 .1 4c.2 3.6 2.2 5.6 5.8 5.8 1 .1 1.3.1 4 .1s3 0 4-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1 .1-1.3.1-4s0-3-.1-4c-.2-3.6-2.2-5.6-5.8-5.8-1-.1-1.3-.1-4-.1zm0 1.8c2.6 0 2.9 0 3.9.1 2.7.1 3.9 1.4 4 4 .1 1 .1 1.3.1 3.9s0 2.9-.1 3.9c-.1 2.6-1.3 3.9-4 4-1 .1-1.3.1-3.9.1s-2.9 0-3.9-.1c-2.7-.1-3.9-1.4-4-4-.1-1-.1-1.3-.1-3.9s0-2.9.1-3.9c.1-2.6 1.3-3.9 4-4 1-.1 1.3-.1 3.9-.1z\"/></svg>", "Facebook": "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6v3.1h2.7v8z\"/></svg>"};
// ---------- layout ----------
function navHTML(c, lang, path) {
  const alt = lang === 'en' ? path : '/en' + path;
  const altHref = lang === 'en' ? path.replace(/^\/en/, '') || '/' : '/en' + (path === '/' ? '/' : path);
  const items = c.nav.map(n => `<li>${n.sub ? `<a href="${href(lang, n.href)}"${path === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a><ul class="drop">${n.sub.map(s => `<li><a href="${href(lang, s.href)}"${ext(s.href)}>${esc(s.label)}</a></li>`).join('')}</ul>` : `<a href="${href(lang, n.href)}"${path === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`}</li>`).join('');
  const sheet = c.nav.map(n => `<li><a href="${href(lang, n.href)}">${esc(n.label)}</a>${n.sub ? `<div class="sub">${n.sub.map(s => `<a href="${href(lang, s.href)}"${ext(s.href)}>${esc(s.label)}</a>`).join('')}</div>` : ''}</li>`).join('');
  const switchTo = lang === 'en' ? (path === '/' ? '/' : path) : '/en' + (path === '/' ? '/' : path);
  return `<nav class="nav" id="nav" aria-label="${esc(c.ui.mainNav)}">
  <a class="brand" href="${href(lang, '/')}"><img src="/img/logo.png" alt="${esc(c.site.name)}" width="180" height="39"></a>
  <ul class="nav-links">${items}</ul>
  <div class="nav-tools"><a class="lang" href="${href(lang, '/events/#calendar')}">${esc(c.ui.calendar)}</a><a class="lang" href="${switchTo}" hreflang="${lang === 'en' ? 'zh-Hant' : 'en'}">${lang === 'en' ? '中文' : 'EN'}</a><a class="btn btn-ink btn-sm" href="${FORM_URL}/">${esc(c.ui.registerShort)}</a>
  <button class="menu-btn" id="menu-btn" aria-label="${esc(c.ui.menu)}" aria-expanded="false" aria-controls="sheet"><span></span></button></div>
</nav>
<div class="sheet" id="sheet"><ul>${sheet}</ul><div class="actions"><a class="btn btn-ink" href="${FORM_URL}/">${esc(c.ui.registerShort)} ${arrow}</a><a class="btn btn-ghost" href="${switchTo}">${lang === 'en' ? '中文' : 'English'}</a></div></div>`;
}

function footerHTML(c, lang) {
  const s = c.site;
  return `<section class="foot-cta"><h2 class="h2 reveal">${esc(c.footer.cta)}</h2><div class="actions reveal"><a class="btn btn-ink" href="${href(lang, '/contact/')}">${esc(c.footer.visit)} ${arrow}</a><a class="btn btn-gold" href="${FORM_URL}/">${esc(c.ui.registerShort)} ${arrow}</a></div></section>
<footer class="site"><div class="wrap"><div class="top">
  <div><img class="logo" src="/img/logo.png" alt="${esc(s.name)}"><p style="margin:0">${esc(s.society)}</p><div class="social">${s.social.map(x => `<a href="${x.href}" target="_blank" rel="noopener" aria-label="${x.label}">${ICONS[x.label]}</a>`).join('')}</div></div>
  <div><h4>${esc(c.ui.visit)}</h4><ul><li><a href="${s.mapUrl}" target="_blank" rel="noopener">${esc(s.address)}</a></li><li>${esc(s.hours)}</li></ul></div>
  <div><h4>${esc(c.ui.contact)}</h4><ul><li><a href="tel:${s.phoneTel}">${esc(s.phone)}</a></li><li><a href="mailto:${s.email}">${esc(s.email)}</a></li></ul></div>
  <div><h4>${esc(c.ui.friends)}</h4><ul>${c.friends.map(l => `<li><a href="${l.href}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join('')}</ul></div>
</div><div class="bot"><span>${esc(c.footer.rights)}</span><span>${c.nav.map(n => `<a href="${href(lang, n.href)}">${esc(n.label)}</a>`).join('　')}</span></div></div></footer>`;
}

function page(c, lang, path, { title, desc, body, img: ogImg }) {
  const full = title ? `${title}｜${c.site.name}` : `${c.site.name}｜${c.site.society}`;
  const zhPath = path, enPath = '/en' + path;
  return `<!doctype html><html lang="${lang === 'en' ? 'en' : 'zh-Hant'}" class="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(full)}</title><meta name="description" content="${esc(desc || c.site.desc)}">
<link rel="alternate" hreflang="zh-Hant" href="${zhPath}"><link rel="alternate" hreflang="en" href="${enPath}">
<meta property="og:title" content="${esc(full)}"><meta property="og:image" content="/img/${ogImg || c.home.hero.img}"><meta name="theme-color" content="#f8f5ef">
<link rel="icon" href="/img/icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;600&family=Noto+Serif+TC:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css?v=${BUILD}">
</head><body><a class="skip" href="#main">${esc(c.ui.skip)}</a>${navHTML(c, lang, path)}<main id="main">${body}</main>${footerHTML(c, lang)}<dialog class="lightbox" id="lightbox" aria-label="${esc(c.ui.poster)}"><button type="button" class="lb-close" aria-label="${esc(c.ui.close)}">×</button><img alt=""><a class="btn btn-light lb-go" hidden></a></dialog><script src="/main.js?v=${BUILD}" defer></script></body></html>`;
}

function home(c, lang) {
  const h = c.home.hero, next = eventList(lang).find(e => e.st === 'open' && e.form);
  const nextInfo = next && (c.eventInfo[next.id] || {});
  const heroHTML = `<section class="hero" style="--pos:${h.pos || '50% 40%'}">${img(h.img, h.alt, '', true)}<h1 class="sr-only">${esc((Array.isArray(h.title) ? h.title : [h.title]).join(' '))}</h1></section>`;
  return heroHTML + c.home.sections.map(s => section(s, c, lang)).join('');
}

function sub(c, lang, p) {
  if (p.noHero) return p.sections.map(s => section(s, c, lang)).join('');
  const hero = `<section class="page-hero"><div class="wrap"><h1 class="display reveal">${esc(p.title)}</h1>${p.lede ? `<p class="lede reveal">${esc(p.lede)}</p>` : ''}${p.banner ? `<div class="banner reveal">${img(p.banner, p.title, '', true)}</div>` : ''}</div></section>`;
  return hero + p.sections.map(s => section(s, c, lang)).join('');
}

const BUILD = Date.now().toString(36);
await rm(new URL('dist/', ROOT), { recursive: true, force: true });
await mkdir(out(''), { recursive: true });
await cp(new URL('public/', ROOT), out(''), { recursive: true });
await cp(new URL('src/styles.css', ROOT), out('styles.css'));
await cp(new URL('src/main.js', ROOT), out('main.js'));
let n = 0;
for (const lang of ['zh', 'en']) {
  const c = content[lang], base = lang === 'en' ? 'en/' : '';
  await mkdir(out(base), { recursive: true });
  await writeFile(out(base + 'index.html'), page(c, lang, '/', { body: home(c, lang) })); n++;
  for (const [slug, p] of Object.entries(c.pages)) {
    await mkdir(out(base + slug), { recursive: true });
    const body = slug === 'news' ? newsIndex(c, lang) : sub(c, lang, p);
    await writeFile(out(`${base}${slug}/index.html`), page(c, lang, `/${slug}/`, { title: p.title, desc: p.lede, body })); n++;
  }
  for (const [i, a] of NEWS.entries()) {
    await mkdir(out(`${base}news/${a.slug}`), { recursive: true });
    await writeFile(out(`${base}news/${a.slug}/index.html`), page(c, lang, `/news/${a.slug}/`, { title: a.title, desc: excerpt(a, 120), body: newsArticle(a, i, c, lang), img: a.thumb })); n++;
  }
}
console.log(`Built ${n} pages → dist/ (events from ${existsSync(new URL('src/forms.snapshot.js', ROOT)) ? 'registration site' : '?'})`);
