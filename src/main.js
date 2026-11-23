// 佛光山三寶寺 — nav, mobile menu, reveal. No dependencies.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav: transparent over the hero, pill once the hero is behind you.
  const nav = document.getElementById('nav');
  const hero = document.querySelector('.hero');
  if (nav && hero) {
    const onScroll = () => nav.classList.toggle('is-stuck', scrollY > Math.max(40, hero.offsetHeight - nav.offsetHeight - 60));
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll, { passive: true }); onScroll();
  }

  // Mobile menu
  const btn = document.getElementById('menu-btn'), sheet = document.getElementById('sheet');
  if (btn && sheet) {
    const set = open => { sheet.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; nav.classList.toggle('is-stuck', open || nav.classList.contains('is-stuck')); };
    btn.addEventListener('click', () => set(!sheet.classList.contains('open')));
    sheet.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  // Reveal on entry, once.
  const els = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) els.forEach(e => e.classList.add('in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }

  // 大師法語 scratch card: scratch the gold foil to reveal a saying.
  document.querySelectorAll('.scratch').forEach(card => {
    const quotes = JSON.parse(card.dataset.quotes), q = card.querySelector('blockquote'), cv = card.querySelector('canvas'), ctx = cv.getContext('2d', { willReadFrequently: true });
    let order = quotes.map((_, i) => i).sort(() => Math.random() - .5), at = 0, drawing = false, checks = 0;
    const paint = () => {
      const r = card.getBoundingClientRect(), dpr = devicePixelRatio || 1;
      cv.width = r.width * dpr; cv.height = r.height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const g = ctx.createLinearGradient(0, 0, r.width, r.height);
      g.addColorStop(0, '#C5A059'); g.addColorStop(.5, '#e2c98f'); g.addColorStop(1, '#B38D45');
      ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = g; ctx.fillRect(0, 0, r.width, r.height);
      ctx.fillStyle = 'rgba(60,40,10,.55)'; ctx.font = '600 20px "Noto Serif TC", serif'; ctx.textAlign = 'center';
      ctx.fillText(card.dataset.hint, r.width / 2, r.height / 2 + 7);
      card.classList.remove('done'); checks = 0;
    };
    const show = () => { const x = quotes[order[at % order.length]]; q.innerHTML = ''; q.append(x.text); if (x.note) { const s = document.createElement('small'); s.textContent = x.note; q.append(s); } };
    const erase = e => {
      if (!drawing) return; const r = cv.getBoundingClientRect();
      ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(e.clientX - r.left, e.clientY - r.top, 26, 0, Math.PI * 2); ctx.fill();
      if (++checks % 12 === 0) { const d = ctx.getImageData(0, 0, cv.width, cv.height).data; let clear = 0; for (let i = 3; i < d.length; i += 64) if (!d[i]) clear++; if (clear / (d.length / 64) > .45) card.classList.add('done'); }
    };
    cv.addEventListener('pointerdown', e => { drawing = true; cv.setPointerCapture(e.pointerId); erase(e); });
    cv.addEventListener('pointermove', erase);
    addEventListener('pointerup', () => drawing = false);
    card.querySelector('[data-scratch-reveal]').addEventListener('click', () => card.classList.add('done'));
    document.querySelectorAll('[data-scratch-next]').forEach(b => b.addEventListener('click', () => { at++; show(); paint(); }));
    // Save the current saying as a PNG card (reveals it first).
    document.querySelectorAll('[data-scratch-save]').forEach(b => b.addEventListener('click', async () => {
      card.classList.add('done');
      const x = quotes[order[at % order.length]], W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H;
      const g = c.getContext('2d'); g.fillStyle = '#f8f5ef'; g.fillRect(0, 0, W, H);
      g.strokeStyle = '#d6ccbb'; g.lineWidth = 2; g.strokeRect(48, 48, W - 96, H - 96);
      try { await document.fonts.load('600 56px "Noto Serif TC"'); } catch {}
      const zh = /[\u3400-\u9fff]/.test(x.text), size = zh ? 56 : 48, maxW = W - 240;
      g.fillStyle = '#1e1a15'; g.font = `600 ${size}px "Noto Serif TC", serif`; g.textBaseline = 'top';
      // Line breaking with Chinese typesetting rules (禁則): closing punctuation never starts
      // a line (it hangs at the end of the previous one); opening brackets never end a line.
      const NO_START = '。，、；：！？」』）〕】》〉….,;:!?)', NO_END = '「『（〔【《〈(';
      const tokens = zh ? [...x.text] : x.text.split(/(\s+)/).filter(t => t !== '');
      const lines = []; let line = '';
      for (const t of tokens) {
        const next = line + t;
        if (g.measureText(next).width > maxW && line.trim() && !NO_START.includes(t[0])) {
          let carry = '';
          while (line && NO_END.includes(line.slice(-1))) { carry = line.slice(-1) + carry; line = line.slice(0, -1); }
          lines.push(line.trim()); line = (carry + t).trimStart();
        } else line = next;
      }
      if (line.trim()) lines.push(line.trim());
      const lh = size * 1.6; let y = (H - lines.length * lh) / 2 - 60;
      g.textAlign = 'center';
      lines.forEach(l => { g.fillText(l, W / 2, y); y += lh; });
      g.font = '400 28px Inter, "Noto Sans TC", sans-serif'; g.fillStyle = '#013220'; g.fillText(x.note || '', W / 2, y + 30);
      // Temple calligraphy logo, centered at the foot of the card (falls back to text).
      try { const logo = new Image(); logo.src = '/img/logo.png'; await logo.decode(); const lw = 380, lh2 = lw * logo.naturalHeight / logo.naturalWidth; g.drawImage(logo, (W - lw) / 2, H - 150 - lh2 / 2, lw, lh2); }
      catch { g.fillStyle = '#5f574c'; g.font = '500 30px "Noto Serif TC", serif'; g.fillText(card.dataset.site || '', W / 2, H - 150); }
      const a = document.createElement('a'); a.download = 'sanbao-saying.png'; a.href = c.toDataURL('image/png'); a.click();
    }));
    show(); paint(); addEventListener('resize', () => { if (!card.classList.contains('done')) paint(); });
  });

  // 最新公告 slideshow: slow cross-fade, pauses on hover/focus, arrows + dots + swipe.
  document.querySelectorAll('[data-slides]').forEach(box => {
    const slides = [...box.querySelectorAll('.slide')], dots = [...box.querySelectorAll('.dots button')];
    if (slides.length < 2) return;
    let at = 0, timer;
    const go = n => { at = (n + slides.length) % slides.length; slides.forEach((s, k) => { s.classList.toggle('on', k === at); s.setAttribute('aria-hidden', String(k !== at)); s.tabIndex = k === at ? 0 : -1; }); dots.forEach((d, k) => d.setAttribute('aria-current', String(k === at))); };
    const play = () => { clearInterval(timer); if (!reduced) timer = setInterval(() => go(at + 1), 6000); };
    box.querySelector('.nav-prev').onclick = () => { go(at - 1); play(); };
    box.querySelector('.nav-next').onclick = () => { go(at + 1); play(); };
    dots.forEach((d, k) => d.onclick = () => { go(k); play(); });
    box.addEventListener('mouseenter', () => clearInterval(timer)); box.addEventListener('mouseleave', play);
    box.addEventListener('focusin', () => clearInterval(timer)); box.addEventListener('focusout', play);
    let x0 = null; box.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
    box.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { go(at + (dx < 0 ? 1 : -1)); play(); } x0 = null; });
    play();
  });

  // Poster lightbox
  const lb = document.getElementById('lightbox');
  if (lb) {
    const im = lb.querySelector('img'), go = lb.querySelector('.lb-go');
    document.querySelectorAll('[data-lightbox]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); im.src = a.getAttribute('href'); im.alt = a.querySelector('img')?.alt || '';
      go.hidden = !a.dataset.href; if (a.dataset.href) { go.href = a.dataset.href; go.textContent = document.documentElement.lang === 'en' ? 'Register online →' : '線上登記 →'; }
      lb.showModal();
    }));
    lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lb-close')) lb.close(); });
  }

  // Events whose registration window has passed are hidden client-side too,
  // so a stale build never shows a closed event as open.
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
  document.querySelectorAll('[data-close]').forEach(el => { if (el.dataset.close < today) el.remove(); });
  document.querySelectorAll('[data-open]').forEach(el => { if (el.dataset.open > today) el.querySelector('.reg')?.remove(); });
})();
