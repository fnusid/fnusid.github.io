/* Shared header, footer and renderers. Content lives in data.js. */
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page || 'home';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* header */
  const header = document.getElementById('site-header');
  if (header) {
    const nav = [['home', 'index.html', 'Home'], ['research', 'research.html', 'Research'], ['cv', 'cv.html', 'CV']];
    header.innerHTML = `<div class="container nav-inner">
      <a class="nav-logo" href="index.html">${esc(S.name)}</a>
      <div class="nav-email"><span id="nav-mail">sidcs [at] umich [dot] edu</span><button type="button" id="mail-btn">Copy email</button></div>
      <ul class="nav-links">${nav.map(([k, h, l]) => `<li><a href="${h}"${k === page ? ' class="active" aria-current="page"' : ''}>${l}</a></li>`).join('')}</ul>
    </div>`;
    const btn = document.getElementById('mail-btn');
    btn.addEventListener('click', () => {
      const span = document.getElementById('nav-mail');
      span.textContent = S.email;
      const done = t => { btn.textContent = t; setTimeout(() => (btn.textContent = 'Copy email'), 1800); };
      try {
        navigator.clipboard.writeText(S.email).then(() => done('Copied'), () => done('Shown'));
      } catch (_) { done('Shown'); }
    });
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* footer */
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = `© ${new Date().getFullYear()} ${esc(S.name)} · Ann Arbor, MI · <a href="index.html">Home</a>`;

  /* news: chat-style bubbles in a scrollable box */
  const ICON = {
    paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
    work:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    edu:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>',
    talk:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><line x1="12" y1="18" x2="12" y2="22"/></svg>'
  };
  const LABEL = { paper: 'Paper', work: 'Industry', edu: 'Milestone', talk: 'Talk' };
  window.renderNews = (id, limit) => {
    const el = document.getElementById(id); if (!el) return;
    const items = limit ? S.news.slice(0, limit) : S.news;
    el.innerHTML = `<div class="news-scroll" tabindex="0" aria-label="News, scrollable"><ul class="news-list">${items.map((n, i) => {
      const t = n.type || 'paper';
      return `<li class="news-item t-${t}" style="--i:${i}">
        <span class="news-icon" title="${LABEL[t]}">${ICON[t]}</span>
        <div class="bubble"><div class="bubble-meta"><span class="news-date">${esc(n.date)}</span><span class="news-tag">${LABEL[t]}</span></div><div class="news-text">${n.html}</div></div>
      </li>`;
    }).join('')}</ul></div>`;
    const box = el.querySelector('.news-scroll');
    const edge = () => {
      el.classList.toggle('at-top', box.scrollTop < 4);
      el.classList.toggle('at-end', box.scrollTop + box.clientHeight >= box.scrollHeight - 4);
    };
    box.addEventListener('scroll', edge, { passive: true }); edge();
  };

  /* publications */
  const pubCard = p => `<li class="pub-card${p.thumb ? ' has-thumb' : ''}" data-area="${p.area.join(' ')}">
      ${p.thumb ? `<div class="pub-thumb"><img src="${p.thumb}" alt="" loading="lazy"></div>` : ''}
      <div>
        <h3 class="pub-title">${p.links && Object.values(p.links)[0] ? `<a href="${Object.values(p.links)[0]}">${esc(p.title)}</a>` : esc(p.title)}</h3>
        <div class="pub-authors">${p.authors}</div>
        <div class="pub-venue">${esc(p.venue)}${p.status ? `<span class="status">${esc(p.status)}</span>` : ''}</div>
        ${p.summary ? `<p class="pub-summary">${esc(p.summary)}</p>` : ''}
        ${p.links ? `<div class="pub-links">${Object.entries(p.links).map(([k, v]) => `<a class="chip" href="${v}">${esc(k)}</a>`).join('')}</div>` : ''}
        ${p.related ? `<div class="pub-related"><span class="rel-label">${esc(p.related.label)}</span>
          <div class="rel-title"><a href="${Object.values(p.related.links)[0]}">${esc(p.related.title)}</a></div>
          <div class="pub-authors">${p.related.authors}</div>
          <div class="pub-venue">${esc(p.related.venue)}</div>
          <div class="pub-links">${Object.entries(p.related.links).map(([k, v]) => `<a class="chip" href="${v}">${esc(k)}</a>`).join('')}</div>
        </div>` : ''}
      </div>
    </li>`;

  window.renderSelectedPubs = id => {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = `<ul class="pub-list">${S.publications.filter(p => p.selected).map(pubCard).join('')}</ul>`;
  };

  window.renderAllPubs = id => {
    const el = document.getElementById(id); if (!el) return;
    const draw = area => {
      const list = S.publications.filter(p => area === 'all' || p.area.includes(area));
      const years = [...new Set(list.map(p => p.year))].sort((a, b) => b - a);
      el.innerHTML = years.map(y => `<h3 class="year-head">${y}</h3><ul class="pub-list">${list.filter(p => p.year === y).map(pubCard).join('')}</ul>`).join('');
    };
    document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
      document.querySelectorAll('.filters button').forEach(x => x.setAttribute('aria-pressed', x === b));
      draw(b.dataset.area);
    }));
    draw('all');
  };

  /* experience / education */
  window.renderOrgs = (id, key) => {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = `<ul class="org-list">${S[key].map(o => `<li class="org">
        <div class="org-logo${o.fill ? ' fill' : ''}"><img src="${o.logo}" alt="${esc(o.org)} logo"></div>
        <div><div class="org-name">${esc(o.org)}</div><div class="org-role">${esc(o.role)}</div>${o.note ? `<div class="org-note">${esc(o.note)}</div>` : ''}</div>
        <div class="org-dates">${esc(o.dates)}</div>
      </li>`).join('')}</ul>`;
  };

  window.renderTalks = id => {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = `<ul class="talk-list">${S.talks.map(t => `<li><div class="talk-title">${esc(t.title)}</div><div class="talk-meta">${esc(t.meta)}</div></li>`).join('')}</ul>`;
  };

  /* small signature touch: a live waveform under the name */
  window.drawWave = id => {
    const c = document.getElementById(id); if (!c) return;
    const ctx = c.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W, H;
    const fit = () => { const d = devicePixelRatio || 1; W = c.clientWidth; H = c.clientHeight; c.width = W * d; c.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    const frame = t => {
      ctx.clearRect(0, 0, W, H);
      const mid = H / 2;
      // background talkers (faint)
      ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(0,39,76,.16)'; ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const u = x / W, y = mid + Math.sin(u * 61 - t * 2.6) * H * .18 * Math.sin(u * 7 + t * .7) + Math.sin(u * 97 + t * 3.1) * H * .08;
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
      // the target voice
      const g = ctx.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#00274C'); g.addColorStop(1, '#1D4F91');
      ctx.lineWidth = 1.8; ctx.strokeStyle = g; ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const u = x / W, env = Math.max(0, Math.sin(u * 9 - t * 1.1)) ** 1.6;
        const y = mid + Math.sin(u * 38 - t * 3) * H * .4 * env;
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    };
    fit(); addEventListener('resize', () => { fit(); if (reduce) frame(0); });
    if (reduce) frame(0); else { const loop = ts => { frame(ts / 1000); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
  };
})();
