(function () {
  'use strict';
  var SITES = window.SITES || [], AREAS = window.FOCUS_AREAS || [];
  var YEAR_COL = { 7: 'var(--y7)', 8: 'var(--y8)', 9: 'var(--y9)', 10: 'var(--y10)' };
  var KIND = { simulator: 'Simulator', game: 'Game', 'course-site': 'Notebook', revision: 'Revision', slides: 'Slides', tool: 'Tool' };
  var BADGE = { ready: 'Ready', beta: 'Beta', 'coming-soon': 'Coming soon' };
  var SIMKINDS = { simulator: 1, game: 1, tool: 1 };
  var TYPES = [['all', 'All'], ['play', 'Simulators & games'], ['notes', 'Notebooks & revision'], ['teach', 'Teacher resources']];
  var COVER = { 'course-site': 1, revision: 1, slides: 1 };
  var LS = 'whlh.class';
  var state = { year: 'all', subject: 'all', type: 'all', q: '' };

  function h(tag, attrs, kids) {
    var e = document.createElement(tag);
    for (var k in attrs || {}) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function store(op, v) { try { return op === 'get' ? localStorage.getItem(LS) : localStorage.setItem(LS, v); } catch (e) { return null; } }
  function $(id) { return document.getElementById(id); }

  /* ── Filtering ─────────────────────────────────────────────── */
  function typeOk(s) {
    var t = state.type;
    if (t === 'all') return true;
    if (t === 'play') return !!SIMKINDS[s.kind] && s.audience !== 'teachers';
    if (t === 'notes') return (s.kind === 'course-site' || s.kind === 'revision') && s.audience !== 'teachers';
    return s.audience === 'teachers' || s.kind === 'slides';
  }
  function hay(s) { return [s.title, s.tagline].concat(s.topics || [], s.outcomes || []).join(' ').toLowerCase(); }
  var HAY = {}; SITES.forEach(function (s) { HAY[s.id] = hay(s); });
  function pass(s) {
    if (state.subject !== 'all' && s.subject !== state.subject) return false;
    if (state.year !== 'all' && (s.years || []).indexOf(+state.year) < 0) return false;
    if (!typeOk(s)) return false;
    var q = state.q.trim().toLowerCase();
    if (q && q.split(/\s+/).some(function (w) { return HAY[s.id].indexOf(w) < 0; })) return false;
    return true;
  }
  function filtered() { return state.q.trim() !== '' || state.type !== 'all'; }

  /* ── Card ──────────────────────────────────────────────────── */
  function yearLabel(ys) {
    ys = (ys || []).slice().sort(function (a, b) { return a - b; });
    if (!ys.length) return null;
    var contiguous = ys.every(function (y, i) { return i === 0 || y === ys[i - 1] + 1; });
    if (ys.length === 1) return { t: 'Y' + ys[0], c: 'y' + ys[0] };
    if (ys.length === 2) return { t: 'Y' + ys[0] + ' + Y' + ys[1], c: 'y' + ys[0] };
    return { t: contiguous ? 'Y' + ys[0] + '–' + ys[ys.length - 1] : ys.map(function (y) { return 'Y' + y; }).join(' '), c: 'mixed' };
  }
  function accentFor(s) {
    if (s.subject === 'music') return 'var(--music)';
    var ys = s.years || [];
    return ys.length === 1 && YEAR_COL[ys[0]] ? YEAR_COL[ys[0]] : 'var(--neutral)';
  }
  function shot(s, opts) {
    if (COVER[s.kind] || s.cover || !s.shot) {
      var ys = (s.years || []).slice().sort(function (a, b) { return a - b; });
      var big = s.subject === 'music' ? '♪' : (ys.length === 1 ? String(ys[0]) : (ys.length ? ys[0] + '–' + ys[ys.length - 1] : ''));
      return h('div', { 'class': 'shot cover', 'aria-hidden': 'true' }, [
        h('span', { 'class': 'cv-kind', text: KIND[s.kind] || s.kind }),
        h('span', { 'class': 'cv-big' + (big.length > 2 ? ' long' : ''), text: big }),
        h('span', { 'class': 'cv-title', text: s.title })
      ]);
    }
    return h('div', { 'class': 'shot' }, [h('img', { src: s.shot, alt: 'Screenshot of ' + s.title, width: 640, height: 400, loading: opts.eager ? 'eager' : 'lazy', decoding: 'async' })]);
  }
  // compact one-line link for a site already shown as a full card earlier in the same year
  function mini(s) {
    return h('li', null, [h('a', { 'class': 'mini', href: s.url, style: '--accent:' + accentFor(s) }, [
      h('span', { 'class': 'mini-t', text: s.title }),
      h('span', { 'class': 'mini-k', text: KIND[s.kind] || s.kind })
    ])]);
  }
  function card(s, opts) {
    opts = opts || {};
    var yl = yearLabel(s.years);
    var meta = h('div', { 'class': 'meta' }, [
      h('span', { 'class': 'kind', text: KIND[s.kind] || s.kind }),
      yl ? h('span', { 'class': 'ypill ' + yl.c, text: yl.t }) : null,
      s.audience === 'teachers' ? h('span', { 'class': 'teach-flag', text: 'For teachers' }) : null
    ]);
    var tags = (s.features || []).slice(0, 3).map(function (f) { return h('li', { 'class': 'tag', text: f }); });
    var det = h('details', { 'class': 'teach' }, [
      h('summary', { text: 'For teachers' }),
      h('p', { 'class': 'desc', text: s.description || '' }),
      (s.outcomes && s.outcomes.length) ? h('ul', { 'class': 'outcomes', 'aria-label': 'Outcomes' }, s.outcomes.map(function (o) { return h('li', { 'class': 'chipo', text: o }); })) : null,
      s.teacher_url ? h('a', { 'class': 'tlink', href: s.teacher_url, text: 'Teacher page →' }) : null
    ]);
    var el = h('article', { 'class': 'card' + (opts.wide ? ' wide' : ''), style: '--accent:' + accentFor(s), 'data-id': s.id }, [
      shot(s, opts),
      h('div', { 'class': 'card-body' }, [
        meta,
        h('div', { 'class': 'title-row' }, [h('h3', { text: s.title }), h('span', { 'class': 'badge ' + s.public_badge, text: BADGE[s.public_badge] || s.public_badge })]),
        h('p', { 'class': 'tagline', text: s.tagline }),
        tags.length ? h('ul', { 'class': 'tags', 'aria-label': 'Features' }, tags) : null,
        h('div', { 'class': 'card-foot' }, [
          h('a', { 'class': 'open', href: s.url, 'aria-label': 'Open ' + s.title, text: 'Open' }),
          det
        ])
      ])
    ]);
    return el;
  }

  /* ── Render ────────────────────────────────────────────────── */
  var shown;
  function sec(el, head, kids) { el.innerHTML = ''; el.hidden = !kids.length; if (kids.length) { el.appendChild(head); kids.forEach(function (k) { el.appendChild(k); }); } }
  function mark(s) { shown[s.id] = 1; return s; }

  function renderFeatured() {
    var list = SITES.filter(function (s) { return s.featured && pass(s); });
    var head = h('div', { 'class': 'sec-head' }, [h('h2', { id: 'h-featured', text: 'Featured' }), h('p', { text: 'Good places to start.' })]);
    sec($('featured'), head, list.length ? [h('div', { 'class': 'scroller feat', role: 'list' }, list.map(function (s) { mark(s); var c = card(s, { eager: false }); c.setAttribute('role', 'listitem'); return c; }))] : []);
  }

  function renderYears() {
    var root = $('years'); root.innerHTML = '';
    [7, 8, 9, 10].forEach(function (y) {
      if (state.subject === 'music' || (state.year !== 'all' && +state.year !== y)) return;
      var courseSite = SITES.filter(function (s) { return s.kind === 'course-site' && s.subject === 'science' && s.years.length === 1 && s.years[0] === y; })[0];
      // a single-year revision site sits once beside the notebook, not in every topic row
      var yearRev = SITES.filter(function (s) { return s.kind === 'revision' && s.subject === 'science' && s.years.length === 1 && s.years[0] === y && pass(s); });
      var rows = [], seen = {};
      AREAS.filter(function (a) { return a.year === y; }).forEach(function (a) {
        var list = SITES.filter(function (s) { return s.kind !== 'course-site' && yearRev.indexOf(s) < 0 && (s.focus || []).indexOf(a.id) >= 0 && s.focus.length <= 6 && pass(s); });
        if (!list.length && filtered()) return;
        list.forEach(mark);
        var full = list.filter(function (s) { return !seen[s.id]; }), again = list.filter(function (s) { return seen[s.id]; });
        full.forEach(function (s) { seen[s.id] = 1; });
        var span = full.length >= 3 ? 'span-full' : full.length === 2 ? 'span-2' : 'span-1';
        var body = [];
        if (full.length) body.push(h('div', { 'class': 'grid n' + Math.min(full.length, 3) }, full.map(function (s) { return card(s); })));
        if (again.length) body.push(h('div', { 'class': 'again' }, [h('p', { text: full.length ? 'Also covers this topic' : 'Covered by' }), h('ul', null, again.map(mini))]));
        if (!list.length) body.push(h('p', { 'class': 'placeholder' }, [h('strong', { text: 'Simulator coming soon.' }), ' The notebook covers this topic for now.']));
        rows.push(h('div', { 'class': 'topic ' + span }, [
          h('div', { 'class': 'topic-head' }, [
            h('h3', { text: a.name }),
            h('a', { 'class': 'nb-link', href: a.course_url, 'aria-label': 'Notebook for ' + a.name, text: 'Notebook' })
          ])
        ].concat(body)));
      });
      var course = courseSite && pass(courseSite) ? courseSite : null;
      if (course) mark(course);
      yearRev.forEach(mark);
      if (!rows.length && !course && !yearRev.length) return;
      var s = h('section', { 'class': 'section', id: 'year-' + y, style: '--accent:' + YEAR_COL[y], 'aria-labelledby': 'h-y' + y }, [
        h('div', { 'class': 'year-head' }, [
          h('span', { 'class': 'year-num', 'aria-hidden': 'true', text: y }),
          h('div', null, [h('h2', { id: 'h-y' + y, text: 'Year ' + y }), h('p', { text: AREAS.filter(function (a) { return a.year === y; }).length + ' topics, in syllabus order' })])
        ]),
        course ? h('div', { 'class': 'course-strip' }, [card(course, { wide: true })]) : null,
        yearRev.length ? h('div', { 'class': 'course-strip' }, yearRev.map(function (r) { return card(r, { wide: true }); })) : null,
        rows.length ? h('div', { 'class': 'topics' }, rows) : null
      ]);
      root.appendChild(s);
    });
  }

  function renderAllYear() {
    var list = state.subject === 'music' ? [] : SITES.filter(function (s) { return s.subject === 'science' && s.kind !== 'course-site' && (s.focus || []).length > 6 && pass(s); });
    list.forEach(mark);
    var head = h('div', { 'class': 'sec-head' }, [h('h2', { id: 'h-allyear', text: 'All-year revision' }), h('p', { text: 'Cover many topics across the junior years.' })]);
    sec($('allyear'), head, list.length ? [h('div', { 'class': 'grid roomy' }, list.map(function (s) { return card(s); }))] : []);
  }

  function renderMusic() {
    var list = state.subject === 'science' ? [] : SITES.filter(function (s) { return s.subject === 'music' && pass(s); });
    list.forEach(mark);
    var head = h('div', { 'class': 'sec-head', style: '--accent:var(--music)' }, [h('h2', { id: 'h-music', text: 'Music' }), h('p', { text: 'Instruments, theory and ear training.' })]);
    sec($('music'), head, list.length ? [h('div', { 'class': 'grid roomy' }, list.map(function (s) { return card(s); }))] : []);
  }

  function render() {
    shown = {};
    renderFeatured(); renderYears(); renderAllYear(); renderMusic();
    var n = Object.keys(shown).length;
    $('count').innerHTML = '';
    $('count').appendChild(document.createTextNode('Showing '));
    $('count').appendChild(h('strong', { text: n }));
    $('count').appendChild(document.createTextNode(' of ' + SITES.length));
    $('empty').hidden = n > 0;
    var dirty = state.year !== 'all' || state.subject !== 'all' || state.type !== 'all' || state.q !== '';
    $('reset').hidden = !dirty;
    $('qclear').hidden = state.q === '';
    syncControls(); writeHash();
  }

  /* ── Controls & hash ───────────────────────────────────────── */
  function groupDefs() {
    return {
      type: TYPES
    };
  }
  function buildChips() {
    var defs = groupDefs();
    Object.keys(defs).forEach(function (g) {
      var box = document.querySelector('[data-group="' + g + '"]');
      defs[g].forEach(function (d) {
        var b = h('button', { 'class': 'chip', type: 'button', 'data-g': g, 'data-v': d[0], 'aria-pressed': 'false', text: d[1] });
        b.addEventListener('click', function () { state[g] = d[0]; clearClassIfMismatch(); render(); });
        box.appendChild(b);
      });
    });
  }
  function classKey() { return state.subject === 'music' && state.year === 'all' ? 'music' : (state.subject !== 'music' && state.year !== 'all' ? state.year : null); }
  function clearClassIfMismatch() {}
  function syncControls() {
    Array.prototype.forEach.call(document.querySelectorAll('.chip'), function (b) {
      b.setAttribute('aria-pressed', String(state[b.getAttribute('data-g')] === b.getAttribute('data-v')));
    });
    var ck = classKey();
    Array.prototype.forEach.call(document.querySelectorAll('.class-btn'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-class') === ck && state.type === 'all' && state.q === ''));
    });
    if ($('q').value !== state.q) $('q').value = state.q;
  }
  function writeHash() {
    var p = [];
    ['year', 'subject', 'type'].forEach(function (k) { if (state[k] !== 'all') p.push(k + '=' + encodeURIComponent(state[k])); });
    if (state.q) p.push('q=' + encodeURIComponent(state.q));
    var hash = p.length ? '#' + p.join('&') : '';
    if (location.hash !== hash) { try { history.replaceState(null, '', location.pathname + location.search + hash); } catch (e) {} }
  }
  function readHash() {
    var next = { year: 'all', subject: 'all', type: 'all', q: '' }, any = false;
    location.hash.replace(/^#/, '').split('&').forEach(function (kv) {
      var i = kv.indexOf('='); if (i < 0) return;
      var k = kv.slice(0, i), v; try { v = decodeURIComponent(kv.slice(i + 1)); } catch (e) { return; }
      if (k === 'year' && /^(7|8|9|10)$/.test(v)) { next.year = v; any = true; }
      else if (k === 'subject' && /^(science|music)$/.test(v)) { next.subject = v; any = true; }
      else if (k === 'type' && /^(play|notes|teach)$/.test(v)) { next.type = v; any = true; }
      else if (k === 'q') { next.q = v.slice(0, 80); any = true; }
    });
    state = next; return any;
  }
  function pickClass(c, scroll) {
    state = { year: c === 'music' ? 'all' : c, subject: c === 'music' ? 'music' : 'all', type: 'all', q: '' };
    store('set', c); render();
    if (scroll) {
      var t = $('results'); var top = t.getBoundingClientRect().top + window.pageYOffset - (window.innerWidth >= 900 ? 70 : 8);
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  function init() {
    buildChips();
    var had = readHash();
    var timer;
    $('q').addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = $('q').value; render(); }, 120);
    });
    $('qclear').addEventListener('click', function () { state.q = ''; render(); $('q').focus(); });
    function resetAll() { state = { year: 'all', subject: 'all', type: 'all', q: '' }; render(); }
    $('reset').addEventListener('click', resetAll);
    $('empty-reset').addEventListener('click', resetAll);
    Array.prototype.forEach.call(document.querySelectorAll('.class-btn'), function (b) {
      b.addEventListener('click', function () {
        if (b.getAttribute('aria-pressed') === 'true') { store('set', ''); resetAll(); return; }
        pickClass(b.getAttribute('data-class'), true);
      });
    });
    window.addEventListener('hashchange', function () { readHash(); render(); });

    var saved = store('get');
    if (saved && /^(7|8|9|10|music)$/.test(saved) && !had) {
      var label = saved === 'music' ? 'Music' : 'Year ' + saved;
      $('welcome-go').textContent = 'jump to ' + label;
      $('welcome').hidden = false;
      $('welcome-go').addEventListener('click', function () { $('welcome').hidden = true; pickClass(saved, true); });
      $('welcome-x').addEventListener('click', function () { $('welcome').hidden = true; });
    }
    render();
  }
  init();
})();
