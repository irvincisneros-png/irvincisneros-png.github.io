/* Woonona High Learning Hub — shared "← Learning Hub" pill for every site.
 *
 * Usage (put just before </body>):
 *   <script src="https://irvincisneros-png.github.io/assets/hub-link.js"
 *           data-position="top-left" data-year="8" defer></script>
 *
 * data-position: top-left (default) | top-right | bottom-left | bottom-right
 * data-year:     7 | 8 | 9 | 10 | music   (optional colour dot)
 * data-compact:  "true" shows only the arrow + "Hub" below 520px wide
 * data-theme:    light (default) | dark  (dark glass for dark 3D scenes)
 * Self-contained: no fonts, no other requests. Hides itself in fullscreen.
 */
(function () {
  'use strict';
  if (document.getElementById('whlh-hub-link')) return;
  var me = document.currentScript || {};
  var ds = me.dataset || {};
  var pos = /^(top|bottom)-(left|right)$/.test(ds.position || '') ? ds.position : 'top-left';
  var COL = { '7': '#0f766e', '8': '#7a3a9b', '9': '#3a67b0', '10': '#34495e', music: '#c2410c' };
  var dot = COL[ds.year] || null;
  var dark = ds.theme === 'dark';
  var v = pos.split('-');

  var css = '' +
    '#whlh-hub-link{position:fixed;' + v[0] + ':calc(10px + env(safe-area-inset-' + v[0] + ',0px));' + v[1] + ':calc(10px + env(safe-area-inset-' + v[1] + ',0px));' +
    'z-index:2147483000;display:inline-flex;align-items:center;gap:7px;box-sizing:border-box;min-height:44px;padding:0 15px 0 12px;margin:0;' +
    'font:600 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;letter-spacing:0;text-transform:none;text-decoration:none;white-space:nowrap;' +
    'border-radius:999px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .15s,box-shadow .15s;' +
    (dark
      ? 'color:#f4f2ec;background:rgba(18,22,28,.72);border:1px solid rgba(255,255,255,.18);box-shadow:0 2px 10px rgba(0,0,0,.35);'
      : 'color:#1d2733;background:rgba(247,245,240,.94);border:1px solid rgba(29,39,51,.14);box-shadow:0 1px 2px rgba(29,39,51,.08),0 4px 14px rgba(29,39,51,.14);') +
    '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}' +
    '#whlh-hub-link:hover{transform:translateY(-1px);}' +
    '#whlh-hub-link:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px;}' +
    '#whlh-hub-link .whlh-a{font-size:16px;line-height:1;}' +
    '#whlh-hub-link .whlh-d{width:9px;height:9px;border-radius:50%;flex:none;}' +
    '#whlh-hub-link .whlh-s{display:none;}' +
    (ds.compact === 'true' ? '@media (max-width:519px){#whlh-hub-link .whlh-l{display:none;}#whlh-hub-link .whlh-s{display:inline;}}' : '') +
    '@media print{#whlh-hub-link{display:none;}}' +
    '@media (prefers-reduced-motion:reduce){#whlh-hub-link{transition:none;}}';

  function mount() {
    if (document.getElementById('whlh-hub-link')) return;
    var st = document.createElement('style');
    st.id = 'whlh-hub-link-css';
    st.textContent = css;
    document.head.appendChild(st);
    var a = document.createElement('a');
    a.id = 'whlh-hub-link';
    a.href = 'https://irvincisneros-png.github.io/';
    a.setAttribute('aria-label', 'Back to the Woonona High Learning Hub');
    a.innerHTML = '<span class="whlh-a" aria-hidden="true">←</span>' +
      (dot ? '<span class="whlh-d" aria-hidden="true" style="background:' + dot + '"></span>' : '') +
      '<span class="whlh-l">Learning Hub</span><span class="whlh-s">Hub</span>';
    document.body.appendChild(a);
    function fs() { a.style.display = (document.fullscreenElement || document.webkitFullscreenElement) ? 'none' : ''; }
    document.addEventListener('fullscreenchange', fs);
    document.addEventListener('webkitfullscreenchange', fs);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
