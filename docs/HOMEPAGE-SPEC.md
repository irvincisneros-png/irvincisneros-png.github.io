# Homepage spec (2026-10-29)

The root GitHub Pages site `https://irvincisneros-png.github.io/` becomes one homepage that organises every science and music site the owner has built. It has three audiences: students (find your class's stuff fast), teachers (what it covers, how to use it in class) and anyone else (a showcase). A hidden **Maker view** is the owner's own tracker of what's finished and what needs work.

## Constraints
- Static and no build: `index.html`, `maker.html`, `assets/home.css`, `assets/home.js`, plus the existing `data/sites.js` (source of truth, loaded with a plain `<script>`; defines `window.SITES` and `window.FOCUS_AREAS`) and `shots/*.webp`. Vanilla JS only, no frameworks, no CDN, no external requests. Use the self-hosted fonts in `/fonts` (Fraunces 700, Inter 400/500/700; see `junior-science/index.html` for the @font-face blocks).
- Pages must work opened from the filesystem and on GitHub Pages. Use relative paths.
- They must run fast on a slow school Chromebook: lazy-load screenshots (`loading="lazy"`, width/height attrs), and keep total JS/CSS small.
- Responsive from 360 px phones up to 1440 px, with no horizontal scroll. Keyboard accessible with visible focus, real `<a>`/`<button>` elements, alt text, and WCAG AA contrast.
- Australian English.
- Never present it as an official NSW Department of Education site. Footer: "Made by a Woonona High School teacher · Not an official NSW Department of Education site".
- Preserve `junior-science/index.html` (the old hub) untouched and link to it once in the footer ("Old Junior Science hub").

## Look: clean & bright
A light, school-friendly look on a warm off-white paper background with a subtle dot grid (like the old hub). It uses white cards with soft shadows and rounded corners (14 px). Fraunces is the display face and Inter the body face. Year accent colours are Y7 #0f766e, Y8 #7a3a9b, Y9 #4b7bc9, Y10 #34495e, and Music #c2410c. Badge colours:
- Ready: green.
- Beta: amber.
- Coming soon: grey.

There's no dark mode requirement, but it must not break in dark mode: set an explicit background and colours.

## index.html (public)
1. **Header/hero**: title "Woonona High Learning Hub", subtitle "Interactive science and music for Years 7–10: simulators, games and self-paced notebooks." There's a search box that filters by title, tagline, topics and outcomes. A row of big "Find your class" buttons (Year 7, Year 8, Year 9, Year 10, Music) jumps to or filters that section and remembers the last choice in localStorage. Wrap localStorage in try/catch. If a last choice exists, show a small "Welcome back — jump to Year N" banner, as the old hub did.
2. **Filter bar** (sticky on desktop): a Year chip group (All/7/8/9/10), a Subject chip group (All/Science/Music) and a Type chip group (All, Simulators & games, Notebooks & revision, Teacher resources). Filters combine with search. Show a live count, e.g. "Showing 12 of 23". The URL hash mirrors the filters (`#year=8&subject=science`) so teachers can share a filtered link.
3. **Featured**: a horizontal row of the `featured: true` sites, with large cards.
4. **By year**: one section per year (7, 8, 9, 10). Inside, list that year's FOCUS_AREAS as topic rows in syllabus order. Each topic row has a topic heading and a "Notebook" link to `focus.course_url`, then a card strip of every site whose `focus` includes that topic, excluding the year's course-site entry itself. A site appears under every topic it covers, so Science Defender is better handled separately: list sites with more than 6 focus areas once, in an "All-year revision" strip at the bottom, not in every row. If a topic has no simulator, show a dashed "Simulator coming soon" placeholder tile.
5. **Music** section: the subject "music" sites.
6. **Card** (shared component, rendered from data):
   - Screenshot (`shot`), title, badge (`public_badge`), tagline, year pills and kind label (Simulator / Game / Notebook / Revision / Slides / Tool), with feature tags capped at 3.
   - Primary "Open" link to `url`, which opens in the same tab.
   - A "For teachers" `<details>` that shows `description`, `outcomes` (as chips) and a teacher-page link if `teacher_url` is set. If `audience === 'teachers'`, label the card "For teachers".
7. **Footer**: what this is, a link to maker.html labelled discreetly as "Maker", the old-hub link, and the disclaimer.

## maker.html (owner tracker; linked only from the footer)
- Top: summary counters by `maker_status`: Finished, Needs polish, In progress, Early, Stale.
- **Board**: a kanban with one column per maker_status. Each item card shows:
  - Title, link, `coverage`, `last_push` (with an "N days ago" note, highlighted when over 60 days).
  - Issues as a bullet list, collapsed after 3 with "show all".
  - Next steps as a checklist. Checkbox state is saved in localStorage per site plus step text, and is a personal convenience only.
  - `unpushed_note` shown in an amber box when present, and `notes`.
- **Coverage matrix**: rows are FOCUS_AREAS (16, grouped by year) and columns are Notebook, Simulators/games and Revision. Each cell lists the covering sites as small coloured dots by maker_status, with the title on hover or focus. Highlight rows that have no simulator in red-ish.
- **Overlaps**: list focus areas covered by 2 or more simulators or games, e.g. Y7 Solutions (MatterLab + MixLab), as decision prompts.
- A toolbar with a search box and a "Sort by: status / last updated / year" control.
- Note at top: "Edit `data/sites.js` to change statuses."

## Done when
- Both pages render with no console errors, all 23 sites appear and every link resolves to `url`.
- Filters, search and hash sharing work.
- Pages look good at 375 px and 1280 px.
- `node --check assets/home.js` passes.
