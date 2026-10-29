(function () {
  'use strict';
  var SITES = window.SITES || [], AREAS = window.FOCUS_AREAS || [];
  var STATUSES = [
    ['finished', 'Finished'], ['needs-polish', 'Needs polish'], ['in-progress', 'In progress'], ['early', 'Early'], ['stale', 'Stale']
  ];
  var ORDER = {}; STATUSES.forEach(function (s, i) { ORDER[s[0]] = i; });
  var YEAR_COL = { 7: 'var(--y7)', 8: 'var(--y8)', 9: '#3a67b0', 10: 'var(--y10)' };
  var SIM = { simulator: 1, game: 1, tool: 1 };
  var TODAY = new Date();

  function h(tag, attrs, kids) {
    var e = document.createElement(tag);
    for (var k in attrs || {}) { if (attrs[k] == null || attrs[k] === false) continue; if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function $(id) { return document.getElementById(id); }
  function ls(op, k, v) { try { return op === 'get' ? localStorage.getItem(k) : localStorage.setItem(k, v); } catch (e) { return null; } }
  function sname(k) { return STATUSES.filter(function (s) { return s[0] === k; })[0]; }
  function col(k) { return 'var(--s-' + k + ')'; }
  function daysAgo(d) { var t = Date.parse(d + 'T00:00:00'); return isNaN(t) ? null : Math.max(0, Math.floor((TODAY - t) / 86400000)); }
  function fmtDate(d) { var t = new Date(d + 'T00:00:00'); return isNaN(t) ? d : t.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }); }

  function counters() {
    var box = $('counters'); box.innerHTML = '';
    STATUSES.forEach(function (s) {
      var n = SITES.filter(function (x) { return x.maker_status === s[0]; }).length;
      box.appendChild(h('div', { 'class': 'counter', style: '--c:' + col(s[0]) }, [h('b', { text: n }), h('span', { text: s[1] })]));
    });
  }

  function steps(s) {
    var wrap = h('div', null, [h('h5', { text: 'Next steps' })]);
    var ul = h('ul', { 'class': 'steps' });
    (s.next_steps || []).forEach(function (t, i) {
      var key = 'whlh.step.' + s.id + '.' + t;
      var cb = h('input', { type: 'checkbox', id: 'st-' + s.id + '-' + i });
      cb.checked = ls('get', key) === '1';
      cb.addEventListener('change', function () { ls('set', key, cb.checked ? '1' : '0'); });
      ul.appendChild(h('li', null, [cb, h('span', null, [h('label', { 'for': cb.id, text: t })])]));
    });
    wrap.appendChild(ul);
    return (s.next_steps || []).length ? wrap : null;
  }

  function issues(s) {
    var list = s.issues || []; if (!list.length) return null;
    var ul = h('ul', { 'class': 'issues' });
    list.forEach(function (t, i) { var li = h('li', { text: t }); if (i >= 3) li.hidden = true; ul.appendChild(li); });
    var kids = [h('h5', { text: 'Issues (' + list.length + ')' }), ul];
    if (list.length > 3) {
      var b = h('button', { 'class': 'more', type: 'button', 'aria-expanded': 'false', text: 'show all ' + list.length });
      b.addEventListener('click', function () {
        var open = b.getAttribute('aria-expanded') === 'true';
        Array.prototype.forEach.call(ul.children, function (li, i) { if (i >= 3) li.hidden = open; });
        b.setAttribute('aria-expanded', String(!open)); b.textContent = open ? 'show all ' + list.length : 'show fewer';
      });
      kids.push(b);
    }
    return h('div', null, kids);
  }

  function mcard(s) {
    var d = daysAgo(s.last_push), old = d != null && d > 60;
    return h('article', { 'class': 'mcard', style: '--c:' + col(s.maker_status) }, [
      h('h4', null, [h('a', { href: s.url, text: s.title })]),
      h('p', { 'class': 'cov', text: s.coverage || '' }),
      h('p', { 'class': 'push' + (old ? ' old' : ''), text: 'Last push ' + fmtDate(s.last_push) + (d != null ? ' (' + d + ' day' + (d === 1 ? '' : 's') + ' ago)' : '') }),
      issues(s), steps(s),
      s.unpushed_note ? h('div', { 'class': 'warn' }, [h('strong', { text: 'Unpushed: ' }), s.unpushed_note]) : null,
      s.notes ? h('p', { 'class': 'mnotes', text: s.notes }) : null
    ]);
  }

  function sorted(list) {
    var m = $('msort').value;
    return list.slice().sort(function (a, b) {
      if (m === 'updated') return (b.last_push || '').localeCompare(a.last_push || '');
      if (m === 'year') return Math.min.apply(null, a.years) - Math.min.apply(null, b.years) || a.title.localeCompare(b.title);
      return (ORDER[a.maker_status] - ORDER[b.maker_status]) || a.title.localeCompare(b.title);
    });
  }
  function match(s, q) {
    if (!q) return true;
    var t = [s.title, s.id, s.coverage, s.notes, s.unpushed_note].concat(s.issues || [], s.next_steps || [], s.topics || []).join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).every(function (w) { return t.indexOf(w) >= 0; });
  }
  function board() {
    var q = $('mq').value.trim(), list = sorted(SITES.filter(function (s) { return match(s, q); }));
    $('board-sub').textContent = 'Showing ' + list.length + ' of ' + SITES.length + ' sites. Dates in red are more than 60 days old.';
    var root = $('board'); root.innerHTML = '';
    STATUSES.forEach(function (st) {
      var items = list.filter(function (s) { return s.maker_status === st[0]; });
      var c = h('section', { 'class': 'col', style: '--c:' + col(st[0]), 'aria-label': st[1] }, [h('h3', null, [st[1], h('span', { text: items.length })])]);
      if (!items.length) c.appendChild(h('p', { 'class': 'none', text: 'Nothing here' }));
      items.forEach(function (s) { c.appendChild(mcard(s)); });
      root.appendChild(c);
    });
  }

  function dot(s) {
    var tip = s.title + ' (' + sname(s.maker_status)[1] + ')';
    return h('a', { 'class': 'dot', href: s.url, style: '--c:' + col(s.maker_status), 'data-tip': tip, 'aria-label': tip });
  }
  function matrix() {
    var t = $('matrix'); t.innerHTML = '';
    t.appendChild(h('thead', null, [h('tr', null, ['Focus area', 'Notebook', 'Simulators / games', 'Revision'].map(function (x) { return h('th', { scope: 'col', text: x }); }))]));
    var body = h('tbody');
    [7, 8, 9, 10].forEach(function (y) {
      body.appendChild(h('tr', { 'class': 'yr', style: '--c:' + YEAR_COL[y] }, [h('th', { colspan: 4, text: 'Year ' + y })]));
      AREAS.filter(function (a) { return a.year === y; }).forEach(function (a) {
        var cov = SITES.filter(function (s) { return (s.focus || []).indexOf(a.id) >= 0; });
        var nb = cov.filter(function (s) { return s.kind === 'course-site' || s.kind === 'slides'; });
        var sims = cov.filter(function (s) { return SIM[s.kind] && s.focus.length <= 6; });
        var rev = cov.filter(function (s) { return s.kind === 'revision' || s.focus.length > 6; });
        function cell(list, cls, empty) { return h('td', { 'class': cls || null }, [list.length ? h('div', { 'class': 'dots' }, list.map(dot)) : (empty ? h('span', { text: empty }) : null)]); }
        body.appendChild(h('tr', { 'class': sims.length ? null : 'nosim' }, [h('th', { scope: 'row', text: a.name }), cell(nb), cell(sims, 'sim', 'No simulator'), cell(rev)]));
      });
    });
    t.appendChild(body);
    var lg = $('legend'); lg.innerHTML = '';
    STATUSES.forEach(function (s) { lg.appendChild(h('span', { style: '--c:' + col(s[0]) }, [h('i'), s[1]])); });
  }

  function overlaps() {
    var root = $('overlaps'), n = 0; root.innerHTML = '';
    AREAS.forEach(function (a) {
      var sims = SITES.filter(function (s) { return SIM[s.kind] && (s.focus || []).indexOf(a.id) >= 0 && s.focus.length <= 6; });
      if (sims.length < 2) return; n++;
      root.appendChild(h('div', { 'class': 'overlap' }, [
        h('b', { text: 'Year ' + a.year + ': ' + a.name }),
        h('p', { text: sims.map(function (s) { return s.title; }).join(' + ') + '. Keep both, merge, or position one as the quick version?' })
      ]));
    });
    if (!n) root.appendChild(h('p', { 'class': 'mk-sub', text: 'No overlaps found.' }));
  }

  counters(); matrix(); overlaps(); board();
  $('mq').addEventListener('input', board);
  $('msort').addEventListener('change', board);
})();
