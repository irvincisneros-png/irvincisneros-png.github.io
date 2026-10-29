// Generated from the 2026-10-29 audit. Edit freely: this file is the source of truth for the homepage.
// maker_status: finished | needs-polish | in-progress | early | stale   public_badge: ready | beta | coming-soon
window.FOCUS_AREAS = [
  {
    "id": "y7-universe",
    "year": 7,
    "name": "Observing the universe",
    "course_url": "https://irvincisneros-png.github.io/Year-7/observing-universe/"
  },
  {
    "id": "y7-forces",
    "year": 7,
    "name": "Forces",
    "course_url": "https://irvincisneros-png.github.io/Year-7/forces/"
  },
  {
    "id": "y7-cells",
    "year": 7,
    "name": "Cells & classification",
    "course_url": "https://irvincisneros-png.github.io/Year-7/cells-classification/"
  },
  {
    "id": "y7-solutions",
    "year": 7,
    "name": "Solutions & mixtures",
    "course_url": "https://irvincisneros-png.github.io/Year-7/solutions-mixtures/"
  },
  {
    "id": "y8-living",
    "year": 8,
    "name": "Living systems",
    "course_url": "https://irvincisneros-png.github.io/Year-8-Science/living-systems/"
  },
  {
    "id": "y8-periodic",
    "year": 8,
    "name": "Periodic table & atoms",
    "course_url": "https://irvincisneros-png.github.io/Year-8-Science/periodic-table/"
  },
  {
    "id": "y8-change",
    "year": 8,
    "name": "Change (energy & Earth)",
    "course_url": "https://irvincisneros-png.github.io/Year-8-Science/change/"
  },
  {
    "id": "y8-data",
    "year": 8,
    "name": "Data science 1",
    "course_url": "https://irvincisneros-png.github.io/Year-8-Science/data-science/"
  },
  {
    "id": "y9-energy",
    "year": 9,
    "name": "Energy & electricity",
    "course_url": "https://irvincisneros-png.github.io/Year-9/energy/"
  },
  {
    "id": "y9-diseases",
    "year": 9,
    "name": "Diseases & immunity",
    "course_url": "https://irvincisneros-png.github.io/Year-9/diseases/"
  },
  {
    "id": "y9-materials",
    "year": 9,
    "name": "Materials",
    "course_url": "https://irvincisneros-png.github.io/Year-9/materials/"
  },
  {
    "id": "y9-env",
    "year": 9,
    "name": "Environmental sustainability",
    "course_url": "https://irvincisneros-png.github.io/Year-9/environmental-sustainability/"
  },
  {
    "id": "y10-genetics",
    "year": 10,
    "name": "Genetics & evolution",
    "course_url": "https://irvincisneros-png.github.io/Year-10-Science/genetics-evolution/"
  },
  {
    "id": "y10-chem",
    "year": 10,
    "name": "Chemical reactions",
    "course_url": "https://irvincisneros-png.github.io/Year-10-Science/chemical-reactions/"
  },
  {
    "id": "y10-waves",
    "year": 10,
    "name": "Waves & motion",
    "course_url": "https://irvincisneros-png.github.io/Year-10-Science/waves-motion/"
  },
  {
    "id": "y10-data",
    "year": 10,
    "name": "Data science 2",
    "course_url": "https://irvincisneros-png.github.io/Year-10-Science/data-science-2/"
  }
];

window.SITES = [
  {
    "repo": "LifeLens",
    "title": "LifeLens",
    "years": [
      7
    ],
    "topics": [
      "Cells & classification",
      "Observing the living world"
    ],
    "kind": "game",
    "tagline": "Short visual mini-games: sort, spot, zoom and build your way through cells.",
    "description": "Visual mini-games for the NSW Year 7 Cells and Classification topic, one per syllabus dot point. The LIVE site currently releases only 3 games (3.1.1 MRS GREN, 3.1.2 classification sort, 3.1.3 kangaroo taxonomy); all other outcomes show as TBA. Games are lesson companions with no accounts, grades or tracking.",
    "outcomes": [
      "3.1.1",
      "3.1.2",
      "3.1.3"
    ],
    "features": [
      "mini-games",
      "drag and drop",
      "catalogue",
      "no accounts",
      "sound"
    ],
    "last_push": "2026-07-24",
    "stack": "Next.js static export + React (GitHub Pages)",
    "maker_status": "in-progress",
    "public_badge": "beta",
    "coverage": "3 of 18 outcomes live on main (3.1.1-3.1.3); the other 15 games (3.1.4-3.1.6, 3.2.1-3.2.11, 3.3.1) are built on an unpushed local branch; 3.1.7 deliberately excluded",
    "issues": [
      "Live play pages 3-1-4 and 3-2-5 return 404 - 15 of 18 outcomes unreachable publicly",
      "Local branch holds 18 games but it is unpushed and has a large uncommitted rebuild, so the finished work is at risk and not live",
      "KNOWN_LIMITATIONS lists release blockers: teacher science review, accessibility review, cultural review for 3.1.7, publication decision",
      "Live README/catalogue differ from the local branch README (3 vs 18 games) so docs will be stale until merge",
      "Heavy overlap with CellScape (cell biology) - two Y7 cells products"
    ],
    "next_steps": [
      "Finish/stabilise the visual-games-complete rebuild, commit it and merge to main",
      "Run build + Playwright, then push so all 18 games go live",
      "Complete the human science/accessibility review listed in KNOWN_LIMITATIONS",
      "Decide how LifeLens (games) and CellScape (3D world) are positioned on the homepage",
      "Update README/catalogue badges once 18 games are live"
    ],
    "unpushed_note": "Local clone is on branch visual-games-complete: 4 commits ahead of origin/main (scaffold + 18-game release metadata, 3.2.2, 3.2.7) plus ~78 uncommitted changes (modified game modules and new per-game CSS) - a large unfinished rebuild. Not touched. origin/main only has the 3.1.1-3.1.3 release.",
    "notes": "Not pushed since 24 Jul 2026 on main; the real progress (18 games) sits unpublished locally. Overlaps CellScape on Y7 cells topics.",
    "subject": "science",
    "live_ok": true,
    "id": "lifelens",
    "url": "https://irvincisneros-png.github.io/LifeLens/",
    "teacher_url": null,
    "focus": [
      "y7-cells"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/lifelens.webp"
  },
  {
    "repo": "MatterLab",
    "title": "MatterLab",
    "years": [
      7
    ],
    "topics": [
      "Solutions & mixtures",
      "States of matter",
      "Water"
    ],
    "kind": "simulator",
    "tagline": "3D playgrounds for states, density, solutions, separation and water pollution.",
    "description": "Interactive 3D simulators covering all 19 supplied Year 7 Term 4 matter outcomes (4.1.x-4.5.1): water cycle, heating curves, density, solubility, particle models, separation techniques (including yandying) and pollution clean-up. A syllabus menu launches each lesson; includes a 2D fallback when WebGL is unavailable.",
    "outcomes": [
      "4.1.1",
      "4.1.2",
      "4.1.3",
      "4.1.4",
      "4.2.1",
      "4.2.2",
      "4.2.3",
      "4.3.1",
      "4.3.2",
      "4.3.3",
      "4.3.4",
      "4.3.5",
      "4.4.1",
      "4.4.2",
      "4.4.3",
      "4.4.4",
      "4.4.5",
      "4.4.6",
      "4.5.1"
    ],
    "features": [
      "3D",
      "virtual investigations",
      "data tables & graphs",
      "2D fallback",
      "offline (no external assets)",
      "Playwright tests"
    ],
    "last_push": "2026-10-23",
    "stack": "TypeScript + React + Vite + Three.js",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "all 19 Y7 Term 4 matter outcomes have a working lesson route",
    "issues": [
      "Duplicates MixLab (Y7 states/density/solutions/mixtures/water) - two products for the same Term 4 unit",
      "Docs/PLAN.md still says 'other Term 4 topics remain future work' though OUTCOME_COVERAGE claims all 19 built - docs inconsistent",
      "Independent reviews exist but no recorded teacher classroom trial",
      "Three.js deprecation warnings in console; heavy WebGL on school laptops untested",
      "Hash routing (/#/simulators/CODE) only - OK on Pages but no teacher page"
    ],
    "next_steps": [
      "Decide MatterLab vs MixLab: pick one primary Y7 matter site and link or retire the other",
      "If keeping both, differentiate (MatterLab = outcome menu of lessons, MixLab = guided lab-bench/hand mode)",
      "Reconcile docs/PLAN.md with OUTCOME_COVERAGE",
      "Test on a school laptop for frame rate",
      "Add teacher/lesson-notes page"
    ],
    "notes": "Overlaps MixLab strongly: same Y7 Term 4 Solutions & Mixtures/States content and the same audience, built on a different engine (React+Three vs CellScape engine). Owner should choose which to keep as the catalogue entry.",
    "unpushed_note": null,
    "subject": "science",
    "live_ok": true,
    "id": "matterlab",
    "url": "https://irvincisneros-png.github.io/MatterLab/",
    "teacher_url": null,
    "focus": [
      "y7-solutions"
    ],
    "featured": true,
    "audience": "students",
    "shot": "shots/matterlab.webp"
  },
  {
    "subject": "science",
    "live_ok": true,
    "unpushed_note": "Local branch fix/genetics-science-errors exists but points at the same commit as main and origin/main (bcc462a, already pushed and merged); no unpushed commits, working tree clean.",
    "id": "year-10-science",
    "repo": "Year-10-Science",
    "url": "https://irvincisneros-png.github.io/Year-10-Science/",
    "title": "Year 10 Science",
    "years": [
      10
    ],
    "topics": [
      "Genetics & evolutionary change",
      "Chemical reactions",
      "Waves & motion",
      "Data science 2"
    ],
    "kind": "course-site",
    "tagline": "Four Year 10 topics as interactive notebooks, from DNA to waves.",
    "description": "Self-paced interactive notebook for all four Stage 5 Year 10 topics: Genetics and Evolutionary Change, Chemical Reactions, Waves and Motion and Data Science 2. Each has sections, embedded interactives (Punnett tool, equation balancer, graphing/stats tools), questions, glossary and end-of-topic review. Use as homework or revision alongside the Waves & Motion Studio sim.",
    "outcomes": [
      "Genetics & Evolution 5.1.1-5.5.1 (17 points)",
      "Chemical Reactions 6.1.1-6.5.1 (19 points)",
      "Waves and Motion 7.1.1-7.5.1 (24 points)",
      "Data Science 2 8.1.1-8.4.1 (19 points)"
    ],
    "features": [
      "works offline after load",
      "progress saving",
      "completion certificate",
      "search",
      "glossary",
      "dyslexia-friendly mode",
      "2D interactives",
      "Punnett square tool",
      "topic images"
    ],
    "teacher_url": null,
    "last_push": "2026-10-29",
    "stack": "React 18 + in-browser Babel (no build), self-hosted fonts",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "4 of 4 topics live; 7-12 interactives per topic",
    "issues": [
      "No teacher page, answer key or class-use guidance anywhere in the site",
      "Runs Babel in the browser (3 MB babel.min.js transpiling JSX on every load): slow first paint on school Chromebooks/networks, and nothing renders if scripts are blocked (a 12 s fallback message exists)",
      "No README, docs or outcome map in the repo; coverage can only be inferred from the hub data",
      "Content and interactives were generated in bulk and have not had a documented teacher science-accuracy review (Year 10 genetics needed a correction pass in Oct 2026)",
      "Waves & Motion notebook overlaps the much deeper WaveMotion Studio flagship; nothing links the two",
      "Waves & Motion hub points skip 7.4.3 (list goes 7.4.2 then 7.4.4): check whether a section is missing or just renumbered",
      "Chemical Reactions has the fewest interactives (7) for the largest abstract load; equation balancing is by typed inputs",
      "Only the genetics topic has had a science-error fix (Oct 2026); the other three remain unreviewed"
    ],
    "next_steps": [
      "Review the FLAGGED rows in docs/AUDIT-2026-10-29.md",
      "Run the same science-error review the genetics topic got over Chemical Reactions, Waves & Motion and Data Science 2",
      "Link Waves & Motion to year10-waves-motion-studio and decide which is primary",
      "Check the missing 7.4.3 dot point",
      "Add a teacher guide and answer keys",
      "Precompile JSX to remove runtime Babel",
      "Delete the merged remote branch framework-reliability-a11y"
    ],
    "notes": "Content audit 2026-10-29 pushed live: science errors, answer keys, simulator logic and accessibility fixed across all four topics; flagged items for your decision are in docs/AUDIT-2026-10-29.md in this repo. Most recently updated of the four year notebooks (genetics science fix, 2026-10-10). Local clone is clean.",
    "focus": [
      "y10-genetics",
      "y10-chem",
      "y10-waves",
      "y10-data"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year-10-science.webp"
  },
  {
    "subject": "science",
    "live_ok": true,
    "unpushed_note": null,
    "id": "year-7",
    "repo": "Year-7",
    "url": "https://irvincisneros-png.github.io/Year-7/",
    "title": "Year 7 Science",
    "years": [
      7
    ],
    "topics": [
      "Observing the universe (Earth & space)",
      "Forces",
      "Cells & classification",
      "Solutions & mixtures"
    ],
    "kind": "course-site",
    "tagline": "Work through four Year 7 topics with interactive notebooks and quizzes.",
    "description": "Self-paced interactive notebook for all four Stage 4 Year 7 topics: Observing the Universe, Forces, Cells and Classification, and Solutions and Mixtures. Each topic is a sectioned reading with embedded 2D interactives, multiple-choice and written questions, glossary and end-of-topic review; suited to homework, relief lessons or revision.",
    "outcomes": [
      "Observing the Universe 1.1.1-1.5.1 (19 points)",
      "Cells and Classification 3.1.1-3.3.1 (19 points)",
      "Solutions and Mixtures 4.1.1-4.5.1 (19 points)",
      "Forces (bundled page; points not enumerated)"
    ],
    "features": [
      "works offline after load",
      "progress saving",
      "completion certificate",
      "search",
      "glossary",
      "dyslexia-friendly mode",
      "2D interactives",
      "MCQ + written questions",
      "topic images"
    ],
    "teacher_url": null,
    "last_push": "2026-10-29",
    "stack": "React 18 + in-browser Babel (no build), self-hosted fonts",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "4 of 4 topics live (all with content); about 9-13 small interactives per topic; Forces is a single bundled page",
    "issues": [
      "No teacher page, answer key or class-use guidance anywhere in the site",
      "Runs Babel in the browser (3 MB babel.min.js transpiling JSX on every load): slow first paint on school Chromebooks/networks, and nothing renders if scripts are blocked (a 12 s fallback message exists)",
      "No README, docs or outcome map in the repo; coverage can only be inferred from the hub data",
      "Content and interactives were generated in bulk and have not had a documented teacher science-accuracy review (Year 10 genetics needed a correction pass in Oct 2026)",
      "Forces is one 22.8 MB self-contained HTML bundle (different build from the other three topics): very slow on mobile/school wifi and not editable from source in this repo",
      "Solutions & Mixtures here (9 small 2D interactives) is superseded by the richer MixLab sim; Cells & Classification by CellScape; keep or retire needs a decision",
      "Hub card for Forces uses a placeholder progress key ('done') so progress is not tracked per section like the other topics"
    ],
    "next_steps": [
      "Review the FLAGGED rows in docs/AUDIT-2026-10-29.md",
      "Decide per topic whether to keep this notebook or link to CellScape (cells) / MixLab (solutions) as the primary resource and demote this to 'text notes'",
      "Replace the 22.8 MB Forces bundle with a source version using the shared kit, or at least lazy-load it with a size warning",
      "Add a one-page teacher guide and answer key per topic",
      "Spot-check science accuracy topic by topic (Observing the Universe has not been checked)",
      "Precompile JSX (esbuild/Vite) to remove the 3 MB Babel runtime",
      "Add a README listing topics and outcome coverage"
    ],
    "notes": "Content audit 2026-10-29 pushed live: science errors, answer keys, simulator logic and accessibility fixed across all four topics; flagged items for your decision are in docs/AUDIT-2026-10-29.md in this repo. Shared framework (kit.jsx, hub.jsx) is byte-identical across Year-7/8/9/10 repos, so a fix to the framework needs applying four times. Local clone is clean and level with origin/main.",
    "focus": [
      "y7-universe",
      "y7-forces",
      "y7-cells",
      "y7-solutions"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year-7.webp"
  },
  {
    "subject": "science",
    "live_ok": true,
    "unpushed_note": null,
    "id": "year-8-science",
    "repo": "Year-8-Science",
    "url": "https://irvincisneros-png.github.io/Year-8-Science/",
    "title": "Year 8 Science",
    "years": [
      8
    ],
    "topics": [
      "Living systems",
      "Atoms & periodic table",
      "Change (energy, reactions, geological)",
      "Data science 1"
    ],
    "kind": "course-site",
    "tagline": "Four Year 8 topics as interactive notebooks, from atoms to rocks.",
    "description": "Self-paced interactive notebook for all four Stage 4 Year 8 topics: Living Systems, Periodic Table and Atomic Structure, Change and Data Science 1. Periodic Table is a separate lesson app (16 lessons, 5 side quests, interactive periodic table); the others use the shared sectioned-notebook format with quizzes and interactives.",
    "outcomes": [
      "Living Systems 5.1.1-5.4.1 (15 points)",
      "Periodic Table 6.1.1-6.4.1 (16 lessons)",
      "Change 7.1.1-7.4.1 (21 points incl. 7.3.8 superposition)",
      "Data Science 1 8.1.1-8.5.1 (14 points)"
    ],
    "features": [
      "works offline after load",
      "progress saving",
      "completion certificate",
      "search",
      "glossary",
      "dyslexia-friendly mode",
      "2D interactives",
      "interactive periodic table",
      "side quests"
    ],
    "teacher_url": null,
    "last_push": "2026-10-29",
    "stack": "React 18 + in-browser Babel (no build), self-hosted fonts (periodic table also loads Google Fonts)",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "4 of 4 topics live; Periodic Table has all 16 lessons present (6.1.1-6.4.1) plus 5 side quests",
    "issues": [
      "No teacher page, answer key or class-use guidance anywhere in the site",
      "Runs Babel in the browser (3 MB babel.min.js transpiling JSX on every load): slow first paint on school Chromebooks/networks, and nothing renders if scripts are blocked (a 12 s fallback message exists)",
      "No README, docs or outcome map in the repo; coverage can only be inferred from the hub data",
      "Content and interactives were generated in bulk and have not had a documented teacher science-accuracy review (Year 10 genetics needed a correction pass in Oct 2026)",
      "Periodic Table lesson page loads Google Fonts from the network (fails/blocked on some school filters; inconsistent with the self-hosted fonts elsewhere)",
      "Change topic covers geological change (7.3.x) as text + small 2D widgets; DeepTime is the richer replacement",
      "Periodic Table app has fallback strings 'Lesson coming soon' / 'Coming soon' in code (no live lesson hits them as all 16 are defined, but not verified in-browser)",
      "A stale remote branch framework-reliability-a11y still exists on GitHub (merged already)"
    ],
    "next_steps": [
      "Review the FLAGGED rows in docs/AUDIT-2026-10-29.md",
      "Decide whether Change/geological should link out to ChangeLab (energy) and DeepTime (geology) as primary resources",
      "Self-host the Periodic Table fonts and drop the Google Fonts dependency",
      "Browser-check all 16 periodic-table lessons and 5 side quests for rendering errors",
      "Add a teacher page and answer keys",
      "Precompile JSX to remove runtime Babel"
    ],
    "notes": "Content audit 2026-10-29 pushed live: science errors, answer keys, simulator logic and accessibility fixed across all four topics; flagged items for your decision are in docs/AUDIT-2026-10-29.md in this repo. Local clone is clean and level with origin/main. Titles on the hub follow NESA order (Living Systems, Periodic Table, Change, Data Science 1).",
    "focus": [
      "y8-living",
      "y8-periodic",
      "y8-change",
      "y8-data"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year-8-science.webp"
  },
  {
    "subject": "science",
    "live_ok": true,
    "unpushed_note": null,
    "id": "year-9",
    "repo": "Year-9",
    "url": "https://irvincisneros-png.github.io/Year-9/",
    "title": "Year 9 Science",
    "years": [
      9
    ],
    "topics": [
      "Energy & electricity",
      "Disease & immunity",
      "Materials",
      "Environmental sustainability"
    ],
    "kind": "course-site",
    "tagline": "Four Year 9 topics as interactive notebooks, from circuits to climate.",
    "description": "Self-paced interactive notebook for all four Stage 5 Year 9 topics: Energy, Diseases, Materials and Environmental Sustainability. Diseases is its own app (4 sub-topics, 11 interactives such as spread simulation, herd immunity and vaccine response, plus a PDF booklet); the others use the shared sectioned-notebook format.",
    "outcomes": [
      "Energy 1.1.1-1.6.1 (16 points)",
      "Diseases 2.1.1-2.4.1 (17 points)",
      "Materials 3.1.1-3.5.1 (23 points)",
      "Environmental Sustainability 4.1.1-4.5.1 (18 points)"
    ],
    "features": [
      "works offline after load",
      "progress saving",
      "completion certificate",
      "search",
      "glossary",
      "dyslexia-friendly mode",
      "2D interactives",
      "epidemic simulation",
      "topic booklet PDF"
    ],
    "teacher_url": null,
    "last_push": "2026-10-29",
    "stack": "React 18 + in-browser Babel (no build), self-hosted fonts (Diseases also loads Google Fonts)",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "4 of 4 topics live; about 7-12 interactives per topic; Diseases has 11 dedicated interactives",
    "issues": [
      "No teacher page, answer key or class-use guidance anywhere in the site",
      "Runs Babel in the browser (3 MB babel.min.js transpiling JSX on every load): slow first paint on school Chromebooks/networks, and nothing renders if scripts are blocked (a 12 s fallback message exists)",
      "No README, docs or outcome map in the repo; coverage can only be inferred from the hub data",
      "Content and interactives were generated in bulk and have not had a documented teacher science-accuracy review (Year 10 genetics needed a correction pass in Oct 2026)",
      "Diseases page loads Google Fonts from the network",
      "Environmental Sustainability here is a text/2D notebook; Carrying Capacity is the richer game for the same topic",
      "Materials here overlaps with the year-9-materials-adjusted slide decks and the 'adjusted 2026 sequence' (organic compounds/polymers); the two may disagree in content order",
      "Diseases uses a different source layout (src/*.jsx) from the other topics, so framework fixes do not apply there automatically",
      "Stale remote branch framework-reliability-a11y remains on GitHub"
    ],
    "next_steps": [
      "Review the FLAGGED rows in docs/AUDIT-2026-10-29.md",
      "Confirm Materials content matches the adjusted 2026 sequence used in the slide decks; update or link the decks from the Materials page",
      "Link Environmental Sustainability to Carrying Capacity as the primary activity",
      "Self-host fonts for Diseases; browser-test the epidemic/herd-immunity sims on mobile",
      "Add teacher page + answer keys",
      "Check that the Diseases PDF booklet (uploads/) is intended to be public",
      "Precompile JSX"
    ],
    "notes": "Content audit 2026-10-29 pushed live: science errors, answer keys, simulator logic and accessibility fixed across all four topics; flagged items for your decision are in docs/AUDIT-2026-10-29.md in this repo. Hub 'Energy' topic is the physics energy + electric circuits unit. Local clone is clean and level with origin/main.",
    "focus": [
      "y9-energy",
      "y9-diseases",
      "y9-materials",
      "y9-env"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year-9.webp"
  },
  {
    "id": "aural-skills-quiz",
    "repo": "aural-skills-quiz",
    "url": "https://irvincisneros-png.github.io/aural-skills-quiz/",
    "title": "Year 8 Aural Skills Quiz",
    "subject": "music",
    "years": [
      8
    ],
    "topics": [
      "Aural skills",
      "Pitch (high/same/low)",
      "Rhythm dictation",
      "Tempo & dynamics"
    ],
    "kind": "revision",
    "tagline": "Listen, answer and see which skill band you are in.",
    "description": "A 15-question listening quiz (5 each of high-same-low, rhythm dictation and tempo/dynamics) built with Web Audio so it works on locked-down Chromebooks. Results are scored into the Year 8 report bands and posted to the teacher's Google Sheet via an Apps Script web app, with a backup code and CSV download if the network blocks it. Set as a Google Classroom assignment with the live link.",
    "outcomes": [
      "MU4-LIS-01"
    ],
    "features": [
      "quiz",
      "synthesised audio",
      "rhythm notation",
      "teacher decode page",
      "Google Sheet results",
      "backup code + CSV",
      "works on Chromebook",
      "729 logic checks"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/aural-skills-quiz/?mode=teacher",
    "live_ok": true,
    "last_push": "2026-05-19",
    "stack": "single-file vanilla JS + Web Audio + Google Apps Script",
    "maker_status": "finished",
    "public_badge": "ready",
    "coverage": "1 quiz with 3 skill strands (15 questions per attempt); no other year groups or strands yet",
    "issues": [
      "Google Sheet backend: the Apps Script endpoint is referenced in index.html (CONFIG.scriptUrl) and responds 200 'receiver is running' to a GET, so the receiver is alive; submissions use no-cors so the page can never confirm a row was written, and I did not POST a test row (read-only audit)",
      "The endpoint URL is public in the repo, so anyone could post junk rows; the sheet is the real check and student names/class codes go to a personal Google Sheet outside the school system (privacy consideration to confirm with the school)",
      "Per memory notes, two human-only checks were never confirmed: eyeballing/listening to the new sixteenth-note rhythms on a phone/Chromebook, and creating the Google Classroom assignment",
      "Hard-coded class list (8MUS1-8MUS7) and quizId 'Y8-Aural' need editing in the HTML each term",
      "Report-band comments live in code, so a change in report wording means a code edit",
      "Teacher page is only a code decoder; no in-site results view or per-class summary"
    ],
    "next_steps": [
      "Open the Google Sheet and confirm recent rows appear; run one full attempt on a school Chromebook and confirm the row lands",
      "Listen to the rhythm items on Chromebook speakers and phone to check clarity and the easy-to-hard ordering",
      "Make sure the Classroom assignment exists and uses the live URL",
      "Consider a Year 7 version and a composition-reflection strand reusing the same engine",
      "Rotate quizId and class list each term; add a 'Back to home' link"
    ],
    "unpushed_note": null,
    "notes": "Local clone did not exist; audited GitHub main (single commit). Test harness 'node test-logic.mjs' passes 729/729.",
    "focus": [],
    "featured": false,
    "audience": "students",
    "shot": "shots/aural-skills-quiz.webp"
  },
  {
    "id": "carrying-capacity",
    "repo": "carrying-capacity",
    "url": "https://irvincisneros-png.github.io/carrying-capacity/",
    "title": "Carrying Capacity",
    "subject": "science",
    "years": [
      9
    ],
    "topics": [
      "Environmental sustainability"
    ],
    "kind": "game",
    "tagline": "Grow a town through the boom, then restore the planet by 2100.",
    "description": "A Year 9 strategy game in two acts: build an industrial NSW town (energy, pollution, climate graphs), then lead the transition to net zero and restoration with a circular economy. Six scenarios from a 20-minute tutorial to an expert city run, with named residents, wildlife, water field kit, cause chains and a printable 2100 report card. Teacher page has lesson plans, syllabus map and limitations.",
    "outcomes": [
      "Y9 Environmental sustainability 4.1.1-4.5.1"
    ],
    "features": [
      "3D",
      "game",
      "6 scenarios",
      "teacher page",
      "graphs + CSV export",
      "autosave",
      "quality tiers",
      "printable report",
      "zoning",
      "audio"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/carrying-capacity/teacher.html",
    "live_ok": true,
    "last_push": "2026-10-27",
    "stack": "Vite + TypeScript + Three.js (+ postprocessing/N8AO), Vitest (~950 tests), GitHub Actions deploy",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "all 6 scenarios and both acts live; all planned stations built; zoning added 2026-10-27",
    "issues": [
      "All Aboriginal and Torres Strait Islander content is draft placeholder text pending AECG/LALC consultation (hidden on the public build)",
      "Never piloted with a real Year 9 class; play-time estimates are adult-based",
      "Phones work at 375px but cramped; laptop intended",
      "Water kit values are a model near ANZG trigger values; ANZG 2018 figures still need confirming before print",
      "Late-game money piles up in Coal Coast and Reef Island; community projects untested in balance runs",
      "Very-low-tier fps measured only via SwiftShader proxy, real Chromebook test waived",
      "Main JS chunk over 900 kB (slow school networks)",
      "modelviewer.html is tracked in the repo but returns 404 on the live site; stray 'x' item in repo root"
    ],
    "next_steps": [
      "Run a classroom pilot with one Year 9 class and log where students stall",
      "Start AECG / Local Aboriginal Land Council consultation, then finalise the cultural content",
      "Confirm ANZG 2018 water figures",
      "Code-split the postprocessing bundle for slow networks",
      "Add a teacher view that collects class reports",
      "Re-measure low-tier fps on a real Chromebook"
    ],
    "unpushed_note": null,
    "notes": "The most complete project in the set; active 2026-10-27 with zoning merged and live. Clean local clone.",
    "focus": [
      "y9-env"
    ],
    "featured": true,
    "audience": "students",
    "shot": "shots/carrying-capacity.webp"
  },
  {
    "repo": "cellarium",
    "title": "Cellarium",
    "years": [
      7,
      8
    ],
    "topics": [
      "Cells & organelles",
      "Photosynthesis & respiration"
    ],
    "kind": "game",
    "tagline": "Grow a tomato plant by managing sugar, water and energy in its cells.",
    "description": "Single-player 3D resource-management game where students develop leaf-cell capacities across four chapters (First light, The dry spell, Under the canopy, Weather the change) and harvest a tomato. Reinforces organelle functions, photosynthesis and respiration with a guided practice tutorial and field guide.",
    "outcomes": [],
    "features": [
      "3D",
      "game",
      "tutorial",
      "field guide",
      "audio",
      "local saves",
      "mobile checked"
    ],
    "last_push": "2026-09-09",
    "stack": "TypeScript + React + Vite + Three.js",
    "maker_status": "needs-polish",
    "public_badge": "beta",
    "coverage": "4 chapters (campaign complete); no explicit syllabus mapping",
    "issues": [
      "No syllabus outcome mapping or teacher page",
      "Year level and topic fit unclear (plant-cell metabolism could sit in Y7 cells or Y8 living systems)",
      "Saves are local to the browser only",
      "Gameplay time per chapter 8+ minutes - hard to fit short lessons",
      "Overlaps CellScape (cell structures) and LifeLens (cell games)"
    ],
    "next_steps": [
      "Decide year/topic and map to syllabus outcomes",
      "Add a teacher page (aim, 20-minute lesson plan, key questions)",
      "Playtest with a class and shorten/skip options",
      "Decide whether to retire or position as a Y8 Living systems extension",
      "Cross-link from CellScape"
    ],
    "notes": "Complete, tested game (24 tests, CI deploys). Overlaps CellScape/LifeLens on cell structure but differs as a management game on plant metabolism.",
    "unpushed_note": null,
    "subject": "science",
    "live_ok": true,
    "id": "cellarium",
    "url": "https://irvincisneros-png.github.io/cellarium/",
    "teacher_url": null,
    "focus": [
      "y7-cells",
      "y8-living"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/cellarium.webp"
  },
  {
    "id": "cellscape",
    "repo": "cellscape",
    "url": "https://irvincisneros-png.github.io/cellscape/",
    "title": "CellScape",
    "subject": "science",
    "years": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "topics": [
      "Cells & classification",
      "Energy in cells",
      "Genetics & inheritance",
      "Disease & immunity"
    ],
    "kind": "simulator",
    "tagline": "Zoom from a whole cell down to molecules and poke how they work.",
    "description": "One zoomable 3D world: plant and animal cells, then organelles (chloroplast, mitochondrion, nucleus) and molecular levels such as membrane transport, DNA to protein, mitosis, meiosis, inheritance, epigenetics and immune defence. A year-level lens changes vocabulary and depth, with 185 NSW dot points mapped; teachers get a class-link/QR page and a revision quiz.",
    "outcomes": [
      "SC4-CEL (cells, Stage 4)",
      "Y7 3.2.3 (via ?code=)",
      "Stage 5 genetics/immunity",
      "Biology Y11 M1-M2",
      "Biology Y12 M5"
    ],
    "features": [
      "3D",
      "year lens",
      "teacher page",
      "quiz",
      "microscope mode",
      "clay art style",
      "light/dark theme",
      "accessibility",
      "2D fallback"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/cellscape/teacher.html",
    "live_ok": true,
    "last_push": "2026-10-12",
    "stack": "vanilla JS + Three.js r169 (no build)",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "15+ levels live across cells, energy, genetics, division, heredity, immunity (Phases 1-5 complete; Phase 6 polish partly done)",
    "issues": [
      "Not tested on real Chromebooks or phones; perf tiers only proxy-measured",
      "Several interactions never hand-tested with real mouse/touch (enzyme drag, ATP-synthase crank, meiosis crossover drag, mitosis DIY)",
      "Portrait layout not checked on every level",
      "Clay style rough spots: plant/animal morph approximate, chromatin/epigenetics glows use plain shading",
      "Microscope TEM view sparse; long-run frame rate untested",
      "Several teaching-scale simplifications (folding sped up, cyclin curve drawn, HbS 2 strands) and epigenetics parameters are stylised",
      "Hidden browser tab stalls requestAnimationFrame so dives/morphs pause (harmless)",
      "Engine fixes (e.g. style.js material-array crash fixed in MixLab) not back-ported"
    ],
    "next_steps": [
      "Run a real-device pass (school Chromebook, iPad, phone portrait) and fix framing/perf problems",
      "Hand-test the four flagged drag interactions with mouse and touch",
      "Back-port the MixLab style.js crash fix and other shared-engine fixes",
      "Absorb remaining sibling sims per AUDIT-other-sims (body/plant worlds) or link them from the new homepage",
      "Add a teacher-view for class results or a printable worksheet per pathway",
      "Finish Phase 6 clay-style per-level polish"
    ],
    "unpushed_note": null,
    "notes": "Local main matches origin/main; no uncommitted work seen. Old 2D card grid kept as library.html; equilibrium-lost sim deliberately excluded.",
    "focus": [
      "y7-cells",
      "y8-living",
      "y9-diseases",
      "y10-genetics"
    ],
    "featured": true,
    "audience": "students",
    "shot": "shots/cellscape.webp"
  },
  {
    "repo": "changelab-year-8-science",
    "title": "ChangeLab",
    "years": [
      8
    ],
    "topics": [
      "Change (energy)",
      "Energy transfer & stores"
    ],
    "kind": "simulator",
    "tagline": "Change the system and watch how heat and energy move.",
    "description": "Interactive Year 8 simulations for heat transfer (conduction, convection, radiation) and energy stores, with evidence lenses, light/dark themes, narration and reduced-motion support. Use the outcome catalogue to launch 7.1.1 Heat Transfer Lab or 7.1.2 Energy Vault; later outcomes are shown as planned.",
    "outcomes": [
      "7.1.1",
      "7.1.2"
    ],
    "features": [
      "narration",
      "dark mode",
      "reduced motion",
      "responsive",
      "missions",
      "Web Audio"
    ],
    "last_push": "2026-07-22",
    "stack": "Next.js static export + React + CSS modules (Vinext/Vite)",
    "maker_status": "early",
    "public_badge": "beta",
    "coverage": "2 of 21 outcomes live (7.1.1, 7.1.2); 19 planned (7.1.3-7.1.7, 7.2.1-7.2.4, 7.3.1-7.3.9, 7.4.1)",
    "issues": [
      "19 of 21 catalogue outcomes show 'Planned / Coming later' (e.g. /play/7-2-1/ is 404)",
      "Home page promises Matter, Earth and chain-reaction pathways with no simulations behind them",
      "Energy-transformation, conservation and solar outcomes (7.1.3-7.1.7) missing - the core of the energy topic",
      "Overlaps DeepTime / tectonic-earth for the Earth-change pathway",
      "No teacher page or quiz"
    ],
    "next_steps": [
      "Build 7.1.3 transformations and 7.1.6 conservation/dissipation next to complete the energy core",
      "Add a teacher notes page and printable mission sheet",
      "Decide whether Earth (7.3) and matter (7.2) pathways link out to DeepTime/tectonic-earth/MixLab rather than being rebuilt",
      "Hide or mark upcoming pathways clearly on the homepage card",
      "Mobile/classroom laptop check"
    ],
    "notes": "Clean, polished vertical slice but only ~10% of its own plan. Last touched 22 Jul 2026.",
    "unpushed_note": null,
    "subject": "science",
    "live_ok": true,
    "id": "changelab-year-8-science",
    "url": "https://irvincisneros-png.github.io/changelab-year-8-science/",
    "teacher_url": null,
    "focus": [
      "y8-change"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/changelab-year-8-science.webp"
  },
  {
    "id": "chordhands",
    "repo": "chordhands",
    "url": "https://irvincisneros-png.github.io/chordhands/",
    "title": "ChordHands",
    "subject": "music",
    "years": [
      7,
      8
    ],
    "topics": [
      "Chords & harmony",
      "Performing",
      "Elements of music: pitch & texture",
      "Song study"
    ],
    "kind": "tool",
    "tagline": "Play chords with your hands on the webcam, or keys and touch.",
    "description": "Students make chords and melodies with hand gestures via the webcam (MediaPipe), or with keyboard, mouse and touch if cameras are blocked. It has 16 synth, keys, band and voice instruments, a theremin mode, a chord pad, 18 song tutorials (chord progressions only, with practice scoring) and light/dark themes. Fully self-hosted so a single allowed domain works on school networks; video never leaves the device.",
    "outcomes": [
      "MU4-PER-01",
      "MU4-LIS-01"
    ],
    "features": [
      "webcam",
      "hand tracking",
      "works offline after load",
      "self-hosted",
      "18 song tutorials",
      "16 instruments",
      "theremin",
      "projector mode",
      "light/dark theme",
      "touch/keyboard fallback"
    ],
    "teacher_url": null,
    "live_ok": true,
    "last_push": "2026-10-22",
    "stack": "vanilla ES modules + WebAudio + MediaPipe (vendored)",
    "maker_status": "needs-polish",
    "public_badge": "beta",
    "coverage": "Complete app: 18 songs, 16 instruments, 128 passing tests; webcam gesture tuning not validated",
    "issues": [
      "Memory notes say never tested with a real webcam or on student Chromebooks, so gesture thresholds may need tuning",
      "Some songs (three) only partially verified against the original chord sequences",
      "No teacher page or lesson ideas inside the site; README is developer-oriented",
      "Hand-guide help exists but no outcome mapping to the syllabus",
      "Large vendored MediaPipe model and WASM mean a slow first load on weak school Wi-Fi; no PWA or service worker",
      "Wrong-hand labelling varies by device (a 'Swap hands' setting is the workaround)"
    ],
    "next_steps": [
      "Test with a real webcam on a school Chromebook and an iPad, then tune gesture thresholds and fix hand-assignment",
      "Verify the three partially checked song progressions and add a source note",
      "Add a one-page teacher guide (3 lesson activities, Chromebook camera permissions, tie to MU4-PER-01 and MU4-LIS-01)",
      "Add a PWA manifest and cache the MediaPipe files for offline use",
      "Link in from the Stage 4 Music site and add a 'Back to home' link"
    ],
    "unpushed_note": null,
    "notes": "Clean and in sync with origin/main. Tests: node --test tests/ passes 128/128.",
    "focus": [],
    "featured": true,
    "audience": "students",
    "shot": "shots/chordhands.webp"
  },
  {
    "id": "deepswell",
    "repo": "deepswell",
    "url": "https://irvincisneros-png.github.io/deepswell/",
    "title": "DeepSwell",
    "subject": "science",
    "years": [
      9,
      10
    ],
    "topics": [
      "Marine ecosystems",
      "Aquaculture & marine technology"
    ],
    "kind": "game",
    "tagline": "Surf a wave, wipe out, then freedive into living reefs.",
    "description": "A third-person surfing and first-person freediving game across five Australian sites (GBR, Illawarra kelp reef, Moreton Bay seagrass, open ocean, Tasmanian deep seamount). Each has 17-26 sourced field-guide species, an underwater camera and journal, five missions with questions and an ecosystem lab. Teacher page generates mission links and QR codes; students can export a CSV.",
    "outcomes": [],
    "features": [
      "3D",
      "game",
      "5 sites",
      "teacher page",
      "QR mission links",
      "field guide",
      "journal + CSV export",
      "procedural audio",
      "touch controls",
      "cosy/realistic art toggle"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/deepswell/teacher.html",
    "live_ok": true,
    "last_push": "2026-10-28",
    "stack": "vanilla JS ES modules + Three.js r169, Blender-made cosy models, node:test",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "all 5 planned sites live with species, missions and labs",
    "issues": [
      "No explicit syllabus dot-point mapping; targets NSW Stage 5 Marine & Aquaculture Technology (elective) in general terms",
      "Touch/phone controls never tried on a real phone",
      "Open Codex review items: lab assessment awards completion on single-run thresholds; deep-sea lab model lacks age-at-maturity; pelagic energy transfer not demonstrated; some hidden-agent ecology edge cases",
      "Keyboard and mouse on a laptop only (Chrome/Edge)",
      "No HANDOVER/PLAN doc in repo (only art-style plan and specs)",
      "Heavy 3D; low-tier performance on real school laptops unconfirmed"
    ],
    "next_steps": [
      "Test touch controls on a real phone and a school Chromebook",
      "Fix remaining Codex review items (lab assessment, deep and pelagic models)",
      "Add a syllabus mapping page (Marine & Aquaculture Tech outcomes) and write a HANDOVER/PLAN",
      "Add cosy animation clips (crab scuttle, bird take-off) and remodel larger rigs",
      "Pilot with the Y9-10 class and collect feedback"
    ],
    "unpushed_note": "Local clone is 16 commits BEHIND origin/main (fetch only, not pulled); nothing local to lose. Live version is newer than the local files.",
    "notes": "Recent pushes (2026-10-28 shader warm-up freeze fix) keep it moving. Species facts are sourced on each card.",
    "focus": [
      "y9-env"
    ],
    "featured": true,
    "audience": "students",
    "extra": "Marine & Aquaculture Technology elective",
    "shot": "shots/deepswell.webp"
  },
  {
    "id": "deeptime",
    "repo": "deeptime",
    "url": "https://irvincisneros-png.github.io/deeptime/",
    "title": "DeepTime",
    "subject": "science",
    "years": [
      8
    ],
    "topics": [
      "Geological change"
    ],
    "kind": "simulator",
    "tagline": "Build rock layers, tilt and erode them, then date a real cliff.",
    "description": "Year 8 Geological change in 3D. The one live station covers the law of superposition (7.3.8): build strata in six environments with fossils, disturb them, then date flat, tilted and real Illawarra escarpment cliffs. Extension adds dykes and overturned beds. Teacher page and revision questions included.",
    "outcomes": [
      "SC4-CHG-01",
      "Y8 7.3.8"
    ],
    "features": [
      "3D",
      "teacher page",
      "quiz",
      "fossil range data",
      "real Illawarra cliff",
      "year lens (y8/ext)"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/deeptime/teacher.html",
    "live_ok": true,
    "last_push": "2026-10-13",
    "stack": "vanilla JS + Three.js r169 (no build) + GLSL strata shader",
    "maker_status": "early",
    "public_badge": "beta",
    "coverage": "1 of 8 planned stations live (7.3.8 only); 7.3.1-7.3.7 and 7.3.9 not built",
    "issues": [
      "Only one dot point (7.3.8) exists; no landscape hub, so the strata level is the home page",
      "Fossils drawn 10-20x life size and face-on (noted on page)",
      "Build-mode erosion after a tilt can remove several layers",
      "No real-device check",
      "Plate tectonics (7.3.1-7.3.2) lives in a separate tectonic-earth repo, not linked"
    ],
    "next_steps": [
      "Build Station 2 Fossils (7.3.7) reusing strataFossils.js",
      "Build Rock cycle (7.3.6) and Minerals/rocks (7.3.5)",
      "Add earthquakes and volcanoes (7.3.3) and First Nations accounts (7.3.4, sourced and consulted)",
      "Link or absorb tectonic-earth for 7.3.1-7.3.2",
      "Add a landscape hub home level linking stations",
      "Real-device test on Chromebook/phone"
    ],
    "unpushed_note": null,
    "notes": "Local main equals origin; clean. Code and engine quality is high but content is a vertical slice.",
    "focus": [
      "y8-change"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/deeptime.webp"
  },
  {
    "id": "mineral-detective-lab",
    "repo": "mineral-detective-lab",
    "url": "https://irvincisneros-png.github.io/mineral-detective-lab/",
    "title": "Mineral Detective Lab",
    "subject": "science",
    "years": [
      7,
      8,
      9
    ],
    "topics": [
      "Geological change",
      "Materials & properties"
    ],
    "kind": "simulator",
    "tagline": "Weigh, scratch, streak and test minerals to identify the mystery sample.",
    "description": "A virtual lab bench where students measure mass on a balance, volume by water displacement, then examine crystal form, Mohs hardness, streak and acid reaction on eight mineral specimens (calcite, fluorite, gypsum, halite, magnetite, pyrite, quartz, talc). Readings go into a student-written notebook and an identification key supports a justified conclusion. Good as a practical-skills lead-in or revision on density and mineral properties.",
    "outcomes": [],
    "features": [
      "interactive lab",
      "8 specimens",
      "6 instruments",
      "notebook",
      "identification key",
      "no timer",
      "no login",
      "keyboard alternatives"
    ],
    "teacher_url": null,
    "live_ok": true,
    "last_push": "2026-09-18",
    "stack": "vanilla JS + 2D canvas (AI-generated sprite atlases)",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "1 complete investigation loop: 6 instrument stations x 8 minerals (single lab, no further modules)",
    "issues": [
      "No syllabus outcome codes or year level stated anywhere in the site or README, so it is unclear which unit it belongs to",
      "No teacher page, answer key or worksheet to go with it",
      "Specimens are AI-generated illustrations, not photographs of measured specimens (disclosed in About); 2D canvas, not 3D",
      "styles.css is minified single-line and the page has no automated tests",
      "Mobile: canvas drag layout has an 'enlarge' workaround at under 800px; not verified on touch devices",
      "Repo contains unused assets (lab-backdrop, bench/notebook textures not published) and a historical rebuild spec that may confuse future maintainers",
      "Minerals only: no rocks or rock-cycle links, so it covers only part of a geological-change unit"
    ],
    "next_steps": [
      "Decide and state the target year and syllabus link (likely Y8 Geological change, density in Y7/Y8 matter) and add outcome chips",
      "Add a short teacher page with learning intentions, expected readings per mineral and a printable recording sheet",
      "Test on a Chromebook and an iPad (drag and meniscus reading) and fix any touch issues",
      "Add a mystery-sample challenge mode or assessed identification task with a teacher-visible result code",
      "Extend with rocks (igneous, sedimentary, metamorphic) or link into DeepTime for a full geological-change unit",
      "Add a 'Back to home' link once the new homepage exists"
    ],
    "unpushed_note": null,
    "notes": "No local clone existed; audited a fresh clone of GitHub main. Built in one day (17-18 Sep) with Codex; deploys via GitHub Actions publishing only the app files.",
    "focus": [
      "y8-change",
      "y9-materials"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/mineral-detective-lab.webp"
  },
  {
    "id": "mixlab",
    "repo": "mixlab",
    "url": "https://irvincisneros-png.github.io/mixlab/",
    "title": "MixLab",
    "subject": "science",
    "years": [
      7
    ],
    "topics": [
      "Solutions & mixtures"
    ],
    "kind": "simulator",
    "tagline": "Run real lab experiments on a 3D bench, then zoom in to particles.",
    "description": "Year 7 Solutions and Mixtures as a 3D lab bench. The live version has Station 1 (states of matter with a live heating curve and particle view) and Station 2 (density: float/sink lab, density column, buoyancy). Use for the matching Term 4 lessons; a teacher page and a 200-item revision bank are included.",
    "outcomes": [
      "SC4-SOL-01",
      "Y7 4.1.1-4.1.4",
      "Y7 4.2.1-4.2.3"
    ],
    "features": [
      "3D",
      "particle view",
      "teacher page",
      "quiz",
      "year lens (y7/ext)",
      "heating curve"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/mixlab/teacher.html",
    "live_ok": true,
    "last_push": "2026-10-13",
    "stack": "vanilla JS + Three.js r169 (no build), engine copied from CellScape",
    "maker_status": "in-progress",
    "public_badge": "beta",
    "coverage": "LIVE: 2 of 10 stations (states of matter, density). Stations 3-10 planned: dissolving, solubility, concentration, pure vs mixture, separation, First Nations techniques, crude oil, water treatment",
    "issues": [
      "Live site covers only dot points 4.1 and 4.2; 4.3-4.5 (dissolving through water treatment) not built",
      "Real-webcam acceptance of Hand mode not done",
      "Balanced-tier glass reads milky; Extension 'double the mass' mission not exercised end to end",
      "Revision bank answer key is the longest option in 56% of items",
      "Density portrait view starts on a partial overview",
      "Real-device (Chromebook/phone) check not done",
      "Old Year-7 solutions page still has science errors (separate repo)"
    ],
    "next_steps": [
      "Finish real-webcam testing of Hand mode on a school laptop, then push the 30 queued commits",
      "Build Station 3-4 (dissolving + solubility curves) as guided practicals with a lab book, matching the new Density pattern",
      "Fix the revision bank answer-length bias",
      "Build separation lab and water treatment stations (4.4-4.5)",
      "Source and add First Nations separation techniques with consultation",
      "Real-device check; port shared-engine fixes back to CellScape"
    ],
    "unpushed_note": "Local main is 30 commits ahead of origin/main (not live): optional webcam Hand mode (glove hands, point-to-press, two-hand camera, movable measuring cylinder), Guided practicals P1-P4 with a lab book plus Free lab sandbox for Density, Opus graphics polish (MSAA, shadows, lab environment), Hand gesture research/specs, and a no-cache dev server. Owner is testing the webcam before pushing; pushing makes it all live to students.",
    "notes": "maker_status is judged on live (2 stations) plus pending work, which is substantial and will likely lift polish once pushed. Guided-practical pattern is meant to be reused for later stations.",
    "focus": [
      "y7-solutions"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/mixlab.webp"
  },
  {
    "id": "science-defender",
    "repo": "science-defender",
    "url": "https://irvincisneros-png.github.io/science-defender/",
    "title": "Science Defender",
    "subject": "science",
    "years": [
      7,
      8,
      9,
      10
    ],
    "topics": [
      "Observing the universe",
      "Forces",
      "Cells & classification",
      "Solutions & mixtures",
      "Living systems",
      "Periodic table & atomic structure",
      "Change",
      "Data science 1",
      "Energy",
      "Diseases",
      "Materials",
      "Environmental sustainability",
      "Genetics & evolutionary change",
      "Chemical reactions",
      "Waves & motion",
      "Data science 2"
    ],
    "kind": "game",
    "tagline": "Defend your lab from science myths by answering syllabus questions.",
    "description": "A tower-defence revision game where history's scientific misconceptions attack and students earn Research Points by answering questions to upgrade towers. About 895 multiple-choice questions cover all four topics in each of Years 7-10, selectable by year, topic or half-yearly/yearly exam pool. Best used as low-stakes retrieval practice after teaching, not as a stand-alone lesson.",
    "outcomes": [],
    "features": [
      "quiz",
      "895 questions",
      "20 levels + endless",
      "exam-pool revision",
      "heroes & towers",
      "audio",
      "local save",
      "mobile layout (in progress)"
    ],
    "teacher_url": null,
    "live_ok": true,
    "last_push": "2026-10-29",
    "stack": "vanilla JS + HTML5 canvas",
    "maker_status": "needs-polish",
    "public_badge": "ready",
    "coverage": "All 16 Year 7-10 focus areas as a question bank (4 topics x 4 years, ~895 questions); 20 campaign levels plus Endless; only Level 3 (phlogiston) has the full Atlas of Evidence learning loop",
    "issues": [
      "Phone experience is poor per owner's 24 Oct audit: Start/Call Wave button is hidden in the collapsed Field Kit drawer, drawer covers about half the map and overflows sideways, tower build needs several taps, enemies about 15px at phone scale, map pillarboxed in landscape and tiny in portrait with no rotate prompt",
      "Quiz bank: correct answer is still usually the longest option (option-length normalisation not done); answer positions are now shuffled at draw time",
      "Balance: gold glut after wave 3, bosses trivial and unblockable, Astronomy tower near-useless, Railgun and Tectonic branches dead, Berserker attack-speed does nothing, Pyroclastic burn overwritten, double x1.3 damage scaling",
      "Difficulty curve uneven (HP spikes at L6 and L11; L18-20 likely near-impossible); Barracks unlocks only at Level 7",
      "Questions are an extrinsic reward layer: only Level 3 integrates evidence into mechanics; no outcome codes tagged on questions, so it is topic-level not dot-point-level alignment",
      "Google Fonts loaded from CDN (fails offline); no PWA manifest or service worker; no pause on tab hide; console.log on every tap; Field-notes/hero state may leak between levels (inferred)",
      "Docs are stale: learning-design assessment and README disagree on question counts (README says 225+, actual about 895)"
    ],
    "next_steps": [
      "Sprint 2 from docs/game-audit-2026-10-24.md: visible wave-start flag at the path entrance, radial build/upgrade ring on pad tap, remove the Field Kit drawer from the core loop",
      "Fill the screen on phones (cover-scale map, compact HUD overlay) and add a rotate-device prompt in portrait",
      "Question-bank content pass: normalise option lengths so the longest option is not the answer; tag questions with syllabus outcome codes",
      "Sprint 3 balance: remove double x1.3 scaling, cut gold income, flatten HP curve, fix Astronomy/Berserker/Pyroclastic, move Barracks earlier",
      "Extend the Atlas of Evidence claim-evidence-reasoning loop beyond Level 3 (one level per topic)",
      "Self-host fonts and add PWA manifest + offline cache so Chromebooks and iPads can install it; update README question count"
    ],
    "unpushed_note": null,
    "notes": "Local clone is clean but 2 commits behind origin/main (the Sprint 1 'honest quiz' merge, 24-29 Oct), so audit read GitHub main. Largest and most polished side-project in the music/science set but touches every year with shallow depth.",
    "focus": [
      "y7-universe",
      "y7-forces",
      "y7-cells",
      "y7-solutions",
      "y8-living",
      "y8-periodic",
      "y8-change",
      "y8-data",
      "y9-energy",
      "y9-diseases",
      "y9-materials",
      "y9-env",
      "y10-genetics",
      "y10-chem",
      "y10-waves",
      "y10-data"
    ],
    "featured": true,
    "audience": "students",
    "shot": "shots/science-defender.webp"
  },
  {
    "repo": "tectonic-earth",
    "title": "Tectonic Earth",
    "years": [
      8
    ],
    "topics": [
      "Geological change",
      "Plate tectonics"
    ],
    "kind": "simulator",
    "tagline": "Spin the globe, drift the continents and explore volcanoes, quakes and impacts.",
    "description": "3D globe showing continents drifting from 400 Ma through Pangaea to a future supercontinent, with real plate boundaries, mantle convection, sea-level tool and a Disaster Lab (2004 tsunami, Tohoku, Krakatau, Chicxulub, volcanic winter, ice ages). Good for whole-class demonstration or exploration of plate tectonics.",
    "outcomes": [],
    "features": [
      "3D",
      "timeline slider",
      "no build step",
      "real data (PB2002, Natural Earth, NASA)",
      "disaster scenarios",
      "satellite imagery"
    ],
    "last_push": "2026-09-11",
    "stack": "Vanilla JS + Three.js r128 (CDN), static files",
    "maker_status": "needs-polish",
    "public_badge": "beta",
    "coverage": "Plate tectonics, convection, 10 Earth events; no syllabus-coded outcomes",
    "issues": [
      "No syllabus outcome mapping (7.3.x) or student tasks beyond four prompts",
      "No teacher page or lesson sequence",
      "Three.js loaded from CDN - fails offline/blocked networks",
      "Heavy textures/terrain; performance on school laptops/mobile not documented",
      "Overlaps DeepTime (Y8 geological change) in topic",
      "Scenes are schematic, not calculated tsunami models (disclosed)"
    ],
    "next_steps": [
      "Map to Y8 geological-change outcomes and add guided tasks",
      "Bundle Three.js locally for offline/school networks",
      "Add teacher notes and a loading/perf check on low-spec devices",
      "Decide relationship with DeepTime so both appear sensibly in the catalogue",
      "Add a clear title/credits page"
    ],
    "notes": "Single-purpose globe sim that grew into a larger app; strong visuals. Local clone is stale.",
    "unpushed_note": "Local clone is 3 commits BEHIND origin/main (Disaster Lab / measured-terrain work already live); nothing unpushed locally.",
    "subject": "science",
    "live_ok": true,
    "id": "tectonic-earth",
    "url": "https://irvincisneros-png.github.io/tectonic-earth/",
    "teacher_url": null,
    "focus": [
      "y8-change"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/tectonic-earth.webp"
  },
  {
    "id": "whs-stage4-music",
    "repo": "WHS-Stage4-Music",
    "url": "https://irvincisneros-png.github.io/WHS-Stage4-Music/",
    "title": "Stage 4 Music Companion",
    "subject": "music",
    "years": [
      7,
      8
    ],
    "topics": [
      "Performing",
      "Listening",
      "Composing",
      "Elements of music",
      "Guitar & keyboard",
      "Drums & rhythm",
      "Singing",
      "Reading music (notation)",
      "The orchestra",
      "Film music"
    ],
    "kind": "course-site",
    "tagline": "Practise guitar, piano, rhythm, listening and reading music.",
    "description": "A Stage 4 (Years 7-8) music practice site for NSW Music 7-10 students: 17 topic pages (8 for Year 7, 9 for Year 8) with interactive drum pads, a piano with free play and real grand-piano samples, guitar and tuner studios, clef trainer, rhythm game, guided listening, improvisation bits, quizzes and a Year 8 song practice room. Tracks progress anonymously on the device; no login. Students use it for homework or class practice alongside Classroom tasks.",
    "outcomes": [
      "MU4-PER-01",
      "MU4-LIS-01",
      "MU4-COM-01"
    ],
    "features": [
      "interactive piano",
      "drum pads",
      "guitar tuner",
      "rhythm game",
      "clef trainer",
      "quizzes",
      "print-to-PDF",
      "no login",
      "self-hosted fonts",
      "works on Chromebook"
    ],
    "teacher_url": null,
    "live_ok": true,
    "last_push": "2026-10-28",
    "stack": "React 19 + Vite (live repo); source copy is React 18 + in-browser Babel",
    "maker_status": "in-progress",
    "public_badge": "ready",
    "coverage": "17 topic pages live (Year 7: 8, Year 8: 9); Year 9 content not started",
    "issues": [
      "Two diverging copies: the public GitHub repo is now a Vite/React 19 rebuild with a 'companion' hub, tuner fixes and the Year 8 song practice room, while the iCloud source folder is the older Babel version without companion-home or the July PR work, so syncing by rsync would overwrite live work",
      "Progress/completion rules are too easy (counts exposure, not mastery) per the owner's open-items list; assessment is mostly MCQ recall",
      "Companion data contains 2 'planned' activity links with no component yet",
      "No automated tests; verification is a manual jsdom/compile script that lives in /tmp",
      "Public footer scrubbed to 'Music Faculty' (verify scrub stays in place after any resync); no teacher page for the public version",
      "Year 8 Semester 2 teaching decks (19 HTML decks) are not published; Year 9 not started"
    ],
    "next_steps": [
      "Reconcile the two copies: make the GitHub repo the source of truth or port the Vite/companion work back, before any further edits",
      "Decide module-completion rules (mastery vs exposure) and rebalance quizzes toward applied tasks",
      "Review which of the unpublished Year 8 decks (and the studio decks) are fit to publish, keep copyrighted/staff material out",
      "Add outcome chips per topic from the 2024 syllabus (MU4-PER/LIS/COM) and a short teacher page",
      "Implement or remove the 2 planned companion activities; add a few smoke tests to CI",
      "Add a 'Back to home' link in the header once the new homepage exists"
    ],
    "unpushed_note": "Piano free-play (key-name pop-ups, treble stave, full-screen, grand-piano samples) was committed in the source folder and is ALREADY live on the GitHub repo (pushed 28 Oct), contrary to the earlier memory note. Still uncommitted locally and not live: a Reset button on the step-sequencer (interactives/section-bits.jsx), an untracked CONTINUE.md handover, and the 19-deck Year 8 Semester 2 'decks/' folder. The source folder is a local-only git repo with no remote.",
    "notes": "Source of truth for the maintained app is the iCloud 'stage4musicsite' folder per the owner, but the public repo carries July 2026 work missing from it. Uses NSW Music 7-10 (2024) Stage 4 framing; no staff names published.",
    "focus": [],
    "featured": true,
    "audience": "students",
    "shot": "shots/whs-stage4-music.webp"
  },
  {
    "id": "year-10-balancing-equations",
    "repo": "Year-10-Balancing-Equations",
    "url": "https://irvincisneros-png.github.io/Year-10-Balancing-Equations/",
    "title": "Chem Quest: Balancing Equations",
    "subject": "science",
    "years": [
      10
    ],
    "topics": [
      "Chemical reactions"
    ],
    "kind": "game",
    "tagline": "Balance equations and name compounds to beat pixel monsters.",
    "description": "A retro RPG-style game (Chem Quest) with a customisable avatar, three worlds and 10 levels: ionic formulae, covalent naming (formula to name and name to formula) and balancing five reaction types (synthesis, decomposition, single and double replacement, combustion). Students lose lives for wrong answers and earn stars, with a boss at the end of each level. Suitable as practice after teaching balancing and chemical naming.",
    "outcomes": [],
    "features": [
      "game",
      "avatar customiser",
      "stars & progress save",
      "lives & streaks",
      "10 levels in 3 worlds"
    ],
    "teacher_url": null,
    "live_ok": true,
    "last_push": "2026-05-07",
    "stack": "React 18 + in-browser Babel (single HTML file, CDN)",
    "maker_status": "needs-polish",
    "public_badge": "beta",
    "coverage": "3 worlds / 10 levels; balancing section has only 4 equations per reaction type (20 total) so repeats come quickly",
    "issues": [
      "Depends on CDNs (jsDelivr React and Babel standalone, Google Fonts): fails on networks that block them and loads slowly because Babel compiles about 2,500 lines in the browser",
      "Very small equation pool (4 per type), so students see the same questions repeatedly; ionic and covalent pools are also small",
      "Viewport locks zoom (user-scalable=no), an accessibility problem; pixel font at 8-9px is hard to read",
      "Orphaned files: app.js and styles.css in the repo are an older, unused version of the game (60 missions) and are not loaded by index.html",
      "Title is only 'Chem Quest' and repo name says Year 10 Balancing Equations: no year, topic or outcome info on the page; no teacher page",
      "Progress is stored only in localStorage on one device; no way for a teacher to see results",
      "Combustion equations with large coefficients may feel unfair without a worked-example hint; no formula tutorials for beginners (not verified in browser)"
    ],
    "next_steps": [
      "Expand the equation bank (at least 12-15 per type, add word-equation to symbol-equation items) and add randomised coefficients",
      "Vendor React/ReactDOM and precompile the JSX (or use the Vite approach from the music site) to remove CDN and Babel dependencies",
      "Delete the orphaned app.js/styles.css, rename the page title to e.g. 'Chem Quest: Balancing Equations' and add syllabus tag (Y10 Chemical reactions)",
      "Remove the zoom lock and raise minimum font sizes; test on Chromebook and phone",
      "Add worked-example hints / step-by-step atom counter and a short teacher notes page",
      "Optional: results code students can paste into Classroom, like the aural quiz"
    ],
    "unpushed_note": null,
    "notes": "No local clone existed; audited GitHub main. Untouched since May 2026; the pixel-art style is unlike the other sites and a candidate to refresh or fold into the Y10 chemical-reactions sim.",
    "focus": [
      "y10-chem"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year-10-balancing-equations.webp"
  },
  {
    "subject": "science",
    "live_ok": true,
    "unpushed_note": null,
    "id": "year-9-materials-adjusted",
    "repo": "year-9-materials-adjusted",
    "url": "https://irvincisneros-png.github.io/year-9-materials-adjusted/",
    "title": "Year 9 Materials Slide Decks",
    "years": [
      9
    ],
    "topics": [
      "Materials: resources, bonding, organic compounds, polymers"
    ],
    "kind": "slides",
    "tagline": "Teacher-led interactive slide decks for the Year 9 Materials unit.",
    "description": "22 self-contained interactive HTML slide decks (about 11-15 slides each) covering syllabus sections 3.1 Resources, 3.2 Bonding, 3.3 Organic Compounds, 3.4 Polymers and 3.5 Materials in Context, one deck per dot point. Open the index and launch a deck on the classroom projector; each deck embeds its own imagery and interactives.",
    "outcomes": [
      "3.1.1-3.1.4",
      "3.2.1-3.2.7",
      "3.3.1-3.3.6",
      "3.4.1-3.4.5",
      "3.5.1"
    ],
    "features": [
      "slide decks",
      "interactive slides",
      "teacher-led",
      "works offline (Lexend font optional)"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/year-9-materials-adjusted/",
    "last_push": "2026-07-25",
    "stack": "static HTML, self-contained decks (images embedded), no framework",
    "maker_status": "finished",
    "public_badge": "ready",
    "coverage": "all 22 dot-point decks across sections 3.1-3.5 (complete)",
    "issues": [
      "Decks are 0.3-0.5 MB each of base64-embedded HTML: hard to edit, no source files",
      "Only Google Fonts (Lexend) is external; it falls back gracefully offline",
      "Deck order is the 'adjusted 2026 sequence'; the Year-9 repo's Materials notebook may be in the original order",
      "No student-facing practice or answer checking: purely presentation material"
    ],
    "next_steps": [
      "Link these decks from the Year-9 Materials notebook page and from the new homepage as teacher resources",
      "Add student handouts or checking questions if students are meant to use them independently",
      "Keep the source (pre-embedding) of the decks somewhere so they can be edited",
      "Reconcile ordering with the Year-9 Materials notebook"
    ],
    "notes": "Best classified as a teacher resource rather than a student sim. README says it is a public teaching resource.",
    "focus": [
      "y9-materials"
    ],
    "featured": false,
    "audience": "teachers",
    "shot": "shots/year-9-materials-adjusted.webp"
  },
  {
    "repo": "year10-waves-motion-studio",
    "title": "WaveMotion Studio",
    "years": [
      10
    ],
    "topics": [
      "Waves & motion (sound, light, EM spectrum)"
    ],
    "kind": "simulator",
    "tagline": "Launch waves, tune the spectrum and test ideas in virtual investigations.",
    "description": "Offline-capable React app covering the NSW Waves topic (sound, light, EM spectrum, hearing, vision, ultrasound, astronomy) with simulators, investigations, a 101-question mastery bank and teacher tools. Use for demonstrations, guided investigations or revision; progress is stored locally in the browser.",
    "outcomes": [
      "7.1.1",
      "7.1.2",
      "7.1.3",
      "7.1.4",
      "7.1.5",
      "7.1.6",
      "7.1.7",
      "7.2.1",
      "7.2.2",
      "7.2.3",
      "7.2.4",
      "7.2.6",
      "7.3.1",
      "7.3.2",
      "7.3.3",
      "7.3.4"
    ],
    "features": [
      "offline PWA",
      "teacher page",
      "quiz / mastery bank",
      "investigations",
      "graphing",
      "accessibility",
      "Web Audio (opt-in)"
    ],
    "teacher_url": "https://irvincisneros-png.github.io/year10-waves-motion-studio/#/teacher",
    "last_push": "2026-08-06",
    "stack": "TypeScript + React 19 + Vite + Canvas/SVG (hash routing)",
    "maker_status": "needs-polish",
    "public_badge": "beta",
    "coverage": "24 active outcomes; only 7.1.1-7.1.4 (+7.2.2 visualiser) are on the new outcome-first simulator standard, the rest are 'transitional launchers'; 7.2.5 deliberately deferred",
    "issues": [
      "Docs say only 7.1.1-7.1.4 passed the corrected-direction (outcome-first) gate; remaining outcomes are explicit transitional launchers, not final quality",
      "Status docs still say 'verified (builder; user approval pending)' - no owner sign-off recorded",
      "Stage 7 fresh-context release audit not recorded as complete",
      "7.2.5 (Aboriginal and Torres Strait Islander instruments) has no content pending community-approved sources",
      "Syllabus codes use 7.x numbering under a Year 10 label - confirm the syllabus year/focus-area mapping before showing publicly",
      "2D canvas only (no 3D) - visually plainer than the 3D sims"
    ],
    "next_steps": [
      "Decide and record owner approval for 7.1.1-7.1.4 and the rest",
      "Convert remaining 'transitional launcher' outcomes (7.1.5-7.4) to canonical outcome-first simulators one focus area at a time",
      "Run and record the Stage 7 release audit",
      "Source community-approved material for 7.2.5 or hide the gap clearly",
      "Check 7.x vs Year 10 labelling and set the homepage card badge accordingly"
    ],
    "notes": "Last push 6 Aug 2026; local clone matches origin/main. Strong engineering/test base (254 unit + 761 browser checks) but not touched for 12 weeks.",
    "unpushed_note": null,
    "subject": "science",
    "live_ok": true,
    "id": "year10-waves-motion-studio",
    "url": "https://irvincisneros-png.github.io/year10-waves-motion-studio/",
    "focus": [
      "y10-waves"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year10-waves-motion-studio.webp"
  },
  {
    "subject": "science",
    "live_ok": true,
    "unpushed_note": null,
    "id": "year8-valid-revision",
    "repo": "year8-valid-revision",
    "url": "https://irvincisneros-png.github.io/year8-valid-revision/",
    "title": "Year 8 VALID Revision",
    "years": [
      8
    ],
    "topics": [
      "Stage 4 revision: all eight Year 7-8 topics",
      "VALID exam skills"
    ],
    "kind": "revision",
    "tagline": "Practise Stage 4 questions and VALID-style exam questions, self-marked.",
    "description": "Stage 4 revision site for the Year 8 VALID test: 8 topics (Year 7: Universe, Forces, Cells, Solutions; Year 8: Living Systems, Periodic Table, Change, Data Science 1), each with 10 key-idea questions and 4 VALID-style questions using a table, graph or diagram, plus 3 extended-response stimuli, a guide to VALID question words and test tips. Progress saves on the device.",
    "outcomes": [
      "Stage 4 (Year 7 and 8) topics 1-8"
    ],
    "features": [
      "self-marking quiz",
      "VALID question words guide",
      "extended response",
      "progress saving",
      "dark mode",
      "works offline after load",
      "mobile friendly"
    ],
    "teacher_url": null,
    "last_push": "2026-10-22",
    "stack": "single-file vanilla JS + CSS (no framework), question data embedded",
    "maker_status": "finished",
    "public_badge": "ready",
    "coverage": "8 of 8 topics, 80 key questions (30 short, 16 blank, 15 true/false-fix, 10 choose, 8 match, 1 label), 32 VALID MCQs, 3 extended tasks",
    "issues": [
      "Typed answers are self-marked (no automatic checking for short/blank questions), so weaker students may mark themselves generously",
      "Only 3 extended-response tasks for 8 topics",
      "Not linked from the root hub or from any year notebook",
      "Time-limited use: relevant mainly around the Year 8 VALID test window"
    ],
    "next_steps": [
      "Add it to the new homepage as a revision tool for Year 8 (and Year 7 content)",
      "Add extended-response tasks for the remaining five topics",
      "Offer a teacher answer-key/print view",
      "Consider an equivalent VALID revision for Years 7, 9, 10 if the format works"
    ],
    "notes": "Newest of the audited repos and the most polished: clean accessible code, 17 images all present, system dark mode. No local clone existed; audited from a fresh clone of origin/main.",
    "focus": [
      "y7-universe",
      "y7-forces",
      "y7-cells",
      "y7-solutions",
      "y8-living",
      "y8-periodic",
      "y8-change",
      "y8-data"
    ],
    "featured": false,
    "audience": "students",
    "shot": "shots/year8-valid-revision.webp"
  }
];
