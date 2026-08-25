# Michael Josiah — Design System

The personal brand system for **michael.josiah.com**, the portfolio site of Michael Josiah — engineer, creator, technologist, storyteller. The site's job is to present his projects, writing and skills in one cinematic, dark-mode surface.

## Sources given

Three full-page mockup renders of the site, supplied as PNGs (no codebase, no Figma file, no font binaries):

- `uploads/cac94d5c-fa66-4c7c-babe-4cfb40d453f6.png` — **Home**: hero, "What I Create" three-pillar grid, "Built With" strip, closing quote.
- `uploads/2a7dcc03-9638-4284-a6c4-a52e78ad25fa.png` — **Projects**: hero band, category sidebar with counts, 6-up project card grid, CTA banner.
- `uploads/e18f81e1-53d8-417f-bce3-3b3bd5141e30.png` — **Journal** (left half) and **Contact** (right half): filter tabs, featured article, article list + grid, newsletter capture; contact form, "Ways to Connect" panel, values row, pull quote.

Everything in this system is derived from those three renders. Because no source code was available, exact numeric values are measured from the renders rather than read from CSS — treat spacing and type sizes as faithful-but-reconstructed.

### Products / surfaces

One product: the **marketing/portfolio website**. Five routes visible in the nav — Home, Projects, About, Journal, Contact. A light-mode toggle appears top-right on every page; the renders only show dark mode, so dark is the canonical theme and light mode is undefined (see Caveats).

Three named sub-brands appear as project properties, each with its own accent and its own mark in the renders:
- **Arke Studio** — story worlds / creative writing platform (gold).
- **AONIK** — AI platforms and agents (teal).
- **Stories That Last** — writing & production (gold).

---

## CONTENT FUNDAMENTALS

**Voice: first person, declarative, present tense.** Michael speaks as "I" and addresses the reader as "you" only in invitations. "I build worlds. I build what's next." "I merge imagination with engineering to create stories, platforms and AI systems that transform businesses and inspire the future." "Whether you have a question, a project in mind, or just want to say hello, I'd love to hear from you."

**Headlines are short sentences terminated with periods, often in a stack of two or three.** The period is doing real work — it is the brand's punctuation signature. Examples verbatim from the renders: `I BUILD WORLDS. I BUILD WHAT'S NEXT.` / `IDEAS. ENGINEERED. BUILT TO INSPIRE.` / `THOUGHTS. INSIGHTS. IDEAS IN PROGRESS.` / `IDEAS ARE STRONGER TOGETHER.` / `Dream. Build. Repeat.`

**Casing is a three-tier system:**
1. **Display headlines** — ALL CAPS, wide tracking, white.
2. **Eyebrows / labels / nav / buttons / tags** — ALL CAPS, wider tracking, small, gold (or category color). `WHAT I CREATE`, `LET'S CONNECT`, `EXPLORE PROJECTS`, `SEND MESSAGE`, `READ ARTICLE`, `VIEW PROJECT`, `AI & TECH`.
3. **Body, card titles, article titles** — sentence case, mixed weight. `Building Worlds That Move Hearts` uses title case for editorial titles; running copy is sentence case.

**Sentence length: one to two lines, then stop.** Body paragraphs in the renders are never more than three short lines and are hard-wrapped for rhythm. Card descriptions are one or two clauses: "A creative platform for writers and creators to build stories, worlds and immersive narratives together."

**Em dashes are used sparingly and deliberately**, always spaced: "From concept to screen." / "creating impact at scale." / "The best way to predict the future is to build it — together."

**No emoji anywhere.** Not in nav, not in cards, not in the values row. Meaning is carried by line icons instead.

**Numbers are used as proof, in tight triads.** `15+ YEARS EXPERIENCE`, `3 CORE PILLARS`, `∞ POSSIBILITIES` — the infinity glyph stands in for the third value rather than a made-up number. Category counts sit beside their labels (`ALL PROJECTS 14`, `STORY WORLDS 4`). Read times are stated plainly: `6 MIN READ`.

**Quotes are attributed to himself, in italic, prefixed with a large gold ❝.** "Technology is how we bring imagination to life. — Michael Josiah" / "Imagination is the beginning of creation. Technology is how we bring it to life." Use them as section punctuation, one per page maximum.

**CTAs are verb-first and end with an arrow.** `EXPLORE MY WORK →`, `LET'S BUILD TOGETHER →`, `VIEW MY PROJECTS →`, `SUBSCRIBE →`. Secondary CTAs drop the arrow: `ABOUT ME`.

**Reassurance copy is plain and small.** "I respect your privacy. Your information will never be shared." "I typically reply within 24–48 hours." No legalese, no exclamation marks.

**Vibe:** cinematic, aspirational, engineer-with-a-mythology. Grand at headline scale, understated everywhere else. Never salesy, never jokey, never self-deprecating.

---

## VISUAL FOUNDATIONS

### Color
Near-black, gold, and one cool accent. The page sits at `#03060A`; panels and cards step up in 3–5 point increments (`--ink-900` → `--ink-750`) rather than using shadow to separate. **Molten gold `#E8A33D`** is the single primary — used for eyebrows, active nav, links, filled buttons, rules, icons and the logo. **Signal teal `#4FD1C5`** is the AI/platform accent (AONIK, "AI & TECH" tags). **Deep violet `#8B7FD6`** marks experiments; **ember blue `#4FA3E3`** marks engineering. Category color is meaningful, not decorative: a tag's color tells you which taxonomy it belongs to.

Text runs cool grey, not white: display is `#FFFFFF`, headings `#F2F5F8`, body `#98A4B1`, meta `#6E7C8C`. Maximum two background colors per view.

### Type
Two families. **Display:** a geometric sans in caps at wide tracking (`.18em` for eyebrows, `.02em` for display headlines) — this tracking is the most recognizable thing about the brand. **Body:** a neutral humanist sans at 13–16px with generous 1.62 line-height. Editorial titles break the caps rule and use sentence/title case at medium weight. Pull quotes are italic.

Display sizes step 56 / 44 / 34; headings 28 / 22 / 18 / 16; body 16 / 14 / 13; labels 12 / 11 / 10. Labels are small but always tracked out, which keeps them legible.

### Spacing & layout
A 4px base scale (`--sp-1` … `--sp-12`). Cards pad 20px, panels 24px, page shell 32px. Grid gutters 20–24px; sections separated by 64px. Content maxes at 1360px. A **fixed 56px left rail** on Home holds vertical social icons; the top nav is a fixed 68px bar with the monogram + wordmark left, tracked caps links center-right, and a circular theme toggle at the far right. Active nav items get a 2px gold underline.

### Backgrounds & imagery
Full-bleed cinematic renders — dark, warm-toned, high-contrast, heavy on orange/amber rim light with cool blue-teal secondary light. Recurring motifs: a lone figure on a ridge, a distant city skyline, glowing concentric rings and constellation lattices, faint handwriting/equations as texture. Imagery is always *behind* a protection gradient, never bare under text: hero images use a left-to-right scrim (`--scrim-left`) so headline copy sits on solid black; card thumbnails use a bottom scrim (`--scrim-card`). No photographic grain filter; the grain is in the source renders. No gradient *fills* as decoration — gradients exist only as scrims.

### Cards
Flat, near-square: `--radius-md` (6px) or less, 1px `rgba(255,255,255,.06)` border, background one step above the page, and a subtle inner top highlight plus a deep soft drop shadow (`--shadow-card`). No colored left borders. Featured cards use an image top with the title stack over a bottom scrim. Project cards carry a small monochrome property mark in the top-right corner.

### Hover, press, focus
Hover *warms* rather than lightens: border goes from white-6% to gold-38%, background steps up one ink level, and a soft gold glow appears (`--glow-gold`). Text links go `--gold-400` → `--gold-300`. Arrow glyphs in CTAs translate 3–4px right on hover. Filled gold buttons brighten to `--gold-300` on hover and darken to `--gold-500` on press with no scale change; ghost buttons take a gold border. Press states on cards use a 1px downward translate, never a scale-down. Focus is a 2px gold ring at 2px offset.

### Motion
Restrained and slow. Entrances are fade + 8–12px rise over 420ms on `cubic-bezier(.16,.84,.44,1)`. Interactive feedback is 140ms. The only continuous motion is ambient: a slow 6s pulse on the hero's glowing rings and constellation points. No bounce, no spring, no parallax, no scroll-jacking.

### Transparency & blur
Used for two jobs only: the fixed nav bar (page color at 72% with a 12px backdrop blur once scrolled) and dialog scrims (`--surface-scrim`). Cards are opaque. Frosted-glass panels are not part of this brand.

### Rules & dividers
A 3px × 40px gold rule sits under display headlines as a signature. Elsewhere dividers are 1px white-6% hairlines. Section headers on Home center the title between two long hairlines with the eyebrow above in gold.

---

## ICONOGRAPHY

The renders use a single consistent line-icon set: **1.5px uniform stroke, rounded caps, no fill, 20–24px, drawn in gold** (or the section's category color). Observed glyphs: mail, LinkedIn, Instagram, YouTube, map pin, clock, tag, pencil, user, lock, magnifier, chevron-down, arrow-right, grid, layers, bar-chart, target, heart, lightbulb, users, shield, feather, code brackets (`</>`), cloud, cube/hexagon, compass rose, eye.

- **No icon font and no SVG sprite were provided** (PNG renders only), so icons could not be copied out. The set matches **Lucide** closely on stroke weight, terminal style and metaphor, so **Lucide is used as a substitution** and is linked from CDN in the UI kit. **This is a substitution — flagged below.**
- Icons are always monochrome and always inherit the text color of their label group. They are never boxed, never filled, never multicolor.
- Property marks (Arke Studio's wing, AONIK's chevron-A, the code brackets, the hexagon, the spiral) sit in project card corners at ~24px in the property's accent color. These are part of the source renders and are **not reproduced as vectors** — see Caveats.
- **No emoji, ever.** The only non-icon glyphs used as symbols are `∞` (in the hero stat triad), `❝` (pull quotes), `→` (CTAs), `/` (breadcrumb-style counts: `ALL PROJECTS / 14`), and `•` (meta separators: `MAY 20, 2025 • AI & TECH`).

---

## Font substitution — please confirm

No font binaries were supplied. Measured against the renders, the nearest Google Fonts matches are in use:

| Role | Substitute | Reading from renders |
| --- | --- | --- |
| Display / caps / nav | **Poppins** 400–700 | Geometric sans, single-storey `a`, near-circular `o`, very wide caps tracking |
| Body / editorial titles | **Barlow** 300–600 | Neutral humanist grotesque, slightly narrow, tall x-height |
| Pull quotes | **Barlow Italic** | Low-contrast italic |

**If you have the real typefaces, send the files and I will swap them in and rewrite `tokens/fonts.css` with proper `@font-face` rules.**

---

## Logo

The gold **MJ monogram** — an interlocking M and J inside an implied diamond — was extracted from the Home render into `assets/logo-monogram.png`. It is a raster crop from a 1536px-wide mockup, so it is soft at large sizes. **No vector logo was provided and none has been drawn.** Where a crisp mark is needed, the wordmark `MICHAEL JOSIAH` in tracked caps is used instead. **Send the SVG/AI original when you have it.**

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only |
| `tokens/colors.css` | Base palette + semantic surface/text/line/action aliases |
| `tokens/typography.css` | Families, size scale, weights, tracking, semantic roles |
| `tokens/spacing.css` | Spacing scale, layout maxima, radii, borders, elevation, scrims, motion |
| `tokens/fonts.css` | Webfont loading (Google Fonts substitution) |
| `tokens/base.css` | Element resets: body, headings, links, selection, focus |
| `assets/logo-monogram.png` | MJ monogram, raster crop from source render |
| `assets/hero-portrait.png` | Full-bleed hero image (portrait + city + lattice) |
| `assets/img-*.png` | Card/section imagery cropped from source renders |
| `readme.md` | This guide |
| `SKILL.md` | Agent Skills entry point |

### Components

| Group | Components |
| --- | --- |
| `components/core/` | **Button**, **Icon**, **Eyebrow**, **GoldRule**, **DisplayHeading**, **Tag**, **MetaLine** |
| `components/navigation/` | **TopNav**, **SocialRail**, **FilterTabs**, **CategorySidebar** |
| `components/forms/` | **TextField**, **SearchInput**, **Select**, **SubscribePanel** |
| `components/cards/` | **Panel**, **ProjectCard**, **ArticleCard**, **FeaturedArticleCard**, **PillarCard**, **ValueCard**, **ContactMethod**, **QuoteBlock**, **StatTriad** |
| `components/sections/` | **PageHero**, **SectionHeader**, **CTABanner**, **CapabilityStrip**, **RoleList** |

Every family here has a counterpart in the three source renders. **Intentional additions:** `Icon` (a wrapper around the substituted Lucide glyph set — the renders show icons but supplied no asset) and `Panel` (extracted as the shared card surface so every card inherits the same border, radius and shadow).

### UI kit

`ui_kits/website/` — an interactive four-route recreation of michael.josiah.com (`index.html`, `HomeScreen.jsx`, `ProjectsScreen.jsx`, `JournalScreen.jsx`, `ContactScreen.jsx`). See its own `README.md`. The **About** route is deliberately left blank: no render was supplied for it.

`SKILL.md` at the root makes this system usable as an Agent Skill.

---

## Caveats

- **Light mode is undefined.** A sun/theme toggle is present in all three renders but no light-mode view was supplied. The token file has no light theme scope.
- **Property marks (Arke Studio, AONIK, Nexus Core, MJ Dev Suite, Project Origin) are not vectorized.** They exist only inside the raster crops.
- **All values are measured from 1536px-wide renders**, not read from source. Type sizes and paddings are close reconstructions.
- **About page was never supplied** — it is in the nav but no render exists for it.
