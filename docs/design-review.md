# Design, UX and brand review

Reviewed 2 September 2026 against the static export at commit `f9742e8`, rendered
with Playwright at 1440x900, 768x1024 and 390x844, in dark and light themes, in
English and Spanish. Screenshots and probe scripts live under `local/review/`
(gitignored); rerun `pnpm tsx local/review/shoot.ts local/review/shots` against
`tests/e2e/static-server.ts` to regenerate them. This document is a critique and
the basis for an implementation plan. Nothing was changed during the review.

## Verdict

The site is fast, restrained and technically clean, and two pages (the
Carcinisation project page and the 404) show a real point of view. But the parts
a first-time visitor actually judges are the weakest: the home page says nothing
about who Marco is, the project cards are empty boxes, the game page sells a
game with placeholder rectangles instead of screenshots, sharing any URL
produces a broken preview image, and the contact form silently does nothing for
most visitors. The identity ingredients (type stack, per-project palettes,
monospace labels) are all present but never cashed in.

## What already works, preserve it

- **Carcinisation page.** The full Game Boy cartridge treatment: pixel display
  font, plum-and-cream palette, `CARTRIDGE` eyebrow, a controls table, jam
  notes, known issues. It reads like an artefact rather than a template. This is
  the strongest page on the site and the model for everything else.
- **404 page.** `SIGNAL LOST`, pixel 404, "Return to signal". Cheap, memorable,
  in character.
- **Type stack.** Space Grotesk for display, IBM Plex Sans for body, IBM Plex
  Mono for labels is a coherent, technical pairing. Keep it.
- **Monospace eyebrow pattern.** `SYSTEMS ENGINEER`, `SIGNAL CARTOGRAPHY
  STUDY`, `CARTRIDGE`: a consistent labelling voice already exists in three
  places. It is the seed of the brand system.
- **Per-project accent worlds.** Maroon/cream for Carcinisation, cyan for
  SonicThames. The idea of each project owning a palette is distinctive; the
  execution just stops at a 1px card border.
- **Speed and hygiene.** No clutter, no trackers beyond analytics, visible
  focus states, aria labels on icon links, working keyboard navigation.

## Critical

### 1. The Open Graph image is a placeholder URL

- **Observed:** every page ships `og:image: https://marcotoniut.github.io/PLACEHOLDER.png`,
  plus `og:image:alt: "Marco Toniut - Marco Toniut"`. The file does not exist.
- **Why it matters:** every share on LinkedIn, Slack, Discord or iMessage shows
  a broken or blank card. For someone whose plausible conversions arrive via a
  shared link, this is the single worst bug on the site.
- **Change:** design one real 1200x630 OG image (name, role, dark ground, brand
  accent), wire it in `src/config/site.ts`, and fix the alt text. Per-project OG
  images (cartridge art for Carcinisation) are a cheap follow-up.
- **Should feel like:** sharing the site anywhere produces a deliberate,
  branded card.
- **Priority:** critical. **Impact/effort:** very high impact, hours.

### 2. Home `<title>` renders "Marco Toniut | Marco Toniut"

- **Observed:** the title template appends the site name to a page title that
  is already the site name.
- **Why it matters:** it is the first text in the browser tab and in search
  results, and it reads as a bug.
- **Change:** home gets a standalone title ("Marco Toniut, systems engineer,
  London" or similar); the `| Marco Toniut` suffix applies only to subpages.
- **Priority:** critical. **Impact/effort:** high impact, minutes.

### 3. Carcinisation "screenshots" are literal placeholder boxes

- **Observed:** the Screenshots section shows three styled rectangles reading
  "Carcinisation Mockup", "Gameplay Placeholder" and "WIP Screenshot Slot".
- **Why it matters:** this is the flagship project of the game-developer
  identity, on the best-designed page of the site, and it contains zero pixels
  of the actual game. The itch.io page presumably has real captures; a visitor
  who does not click through assumes the game does not exist.
- **Change:** replace with real screenshots and ideally one short gameplay GIF
  or webm loop. If a capture is genuinely unavailable for the third slot, cut
  the slot rather than shipping a labelled placeholder.
- **Should feel like:** the cartridge page finally contains the game.
- **Priority:** critical. **Impact/effort:** very high impact, hours (assets
  already exist on itch.io).

### 4. The contact form is a mailto trampoline

- **Observed:** `src/app/[lang]/contact/components/contact-form.tsx` builds a
  `mailto:` URL from the fields and sets `window.location.href`. There is no
  network submission, no success state, and no visible email address on the
  page as a fallback.
- **Why it matters:** for visitors without a configured desktop mail client
  (most people, who live in webmail), pressing "Send message" does nothing,
  silently. The page titled "Get in Touch" is where getting in touch fails. It
  also asks for a phone number but never for the sender's email, so even when
  the mailto works, a reply address depends on the visitor's client.
- **Change:** either wire a real endpoint (Formspree, a Cloudflare Worker, or
  GitHub-Pages-compatible service) with a success state, or drop the form
  pretence entirely and make the page email-first: a large `mailto:` link with
  the address visible, plus LinkedIn/GitHub. A form that works is better; an
  honest email link beats a form that lies.
- **Priority:** critical. **Impact/effort:** high impact, half a day.

## High

### 5. The home page says nothing about who Marco is

- **Observed:** above the fold: the name, `SYSTEMS ENGINEER`, "Resume ·
  Contact", two link cards, footer. No sentence of bio, no location, no current
  role, no availability, no photo or mark. Meta description says "Personal page
  for experiments and publications".
- **Why it matters:** the page never answers "who is this, what is he
  exceptionally good at, and why should I care". A recruiter, client or
  collaborator gets a label and two doors. The intersection that makes Marco
  memorable (senior engineer who ships Rust games and maps cities by sound)
  is only discoverable by clicking everything.
- **Change:** add a two-to-three sentence introduction under the name: current
  role and company, London, the engineer/game-dev/tinkerer span, and an
  availability or collaboration line. Rewrite the meta description to match.
- **Should feel like:** within five seconds a stranger can say what Marco does,
  where he is, and what is unusual about him.
- **Priority:** high. **Impact/effort:** very high impact, a day including copy.

### 6. Project cards are empty full-width strips

- **Observed:** two cards, each about 1080px wide and 110px tall, containing a
  title and one line of text hugging the left edge; the right 80% of each card
  is empty. Below them, roughly 300px of dead space before the footer. Hover
  merely underlines all the card text; the border and background do not
  respond. The whole page fits in one fold with around 40% unused.
- **Why it matters:** the cards are the portfolio. Vast empty boxes read as
  unfinished, the underline-everything hover reads as a default style, and
  neither card shows a single pixel of the work. The composition has no focal
  hierarchy: two identical strips, equal weight, no imagery.
- **Change:** redesign the cards as project tiles: a thumbnail or palette
  region on one side (cartridge art for Carcinisation, a fog-of-war map crop
  for SonicThames), title, one-line pitch, year, role and two or three tech
  tags. Consider a two-up grid rather than stacked strips, and let each card
  carry its project palette more assertively than a 1px border. On hover:
  border brightens, arrow slides, thumbnail subtly shifts; 150ms, respecting
  reduced motion.
- **Should feel like:** the projects look like things you can pick up and play,
  not directory listings.
- **Priority:** high. **Impact/effort:** high impact, one to two days.

### 7. SonicThames links to nothing

- **Observed:** the page has no demo link, no repository link, no video and no
  imagery. The only anchors are chrome (go back, coffee, socials, robots.txt).
  For a project about maps and sound there is nothing to see or hear. The home
  card promises "Trace London by sound →" and the arrow leads to a dead end.
- **Why it matters:** a project page that cannot prove the project exists
  undermines the credibility of everything else. The writing is evocative but
  unsupported.
- **Change:** add the live demo and/or repository links as primary buttons in
  the hero (mirroring Carcinisation's "Play on itch.io / View source" pair),
  plus at least one map screenshot or a short clip of the fog-of-war reveal. If
  the project is not deployable, say so and label it a study with visuals.
- **Priority:** high. **Impact/effort:** high impact, hours to a day.

### 8. The hero drop shadow renders as a smudge

- **Observed:** `h1` carries `text-shadow: 0 20px 60px rgba(10,12,18,0.45)`,
  which paints a blurry grey rectangle behind and below "Marco Toniut". In
  light mode it looks like a rendering artefact or dirt on the screen.
- **Why it matters:** it is the first element on the site and it looks broken,
  particularly in light mode.
- **Change:** remove it. If depth is wanted, use a subtle accent glow that is
  tuned per theme, or none; Space Grotesk at size needs no help.
- **Priority:** high. **Impact/effort:** medium impact, minutes.

### 9. No single brand accent; the accent changes per page and per theme

- **Observed:** home focus/hover state is mint green; the CV is mint in dark
  mode but switches to blue in light mode; contact uses a teal button; project
  pages use cyan and maroon; the coffee button is bright yellow. No colour
  belongs to "Marco Toniut" as such.
- **Why it matters:** distinctive personal sites own a colour. Here the
  strongest recurring colour signal across the site is the Buy Me a Coffee
  yellow, which is someone else's brand.
- **Change:** pick one brand accent (the mint is the best candidate: already in
  the CV, the focus states and the 404 button hierarchy) and use it for all
  chrome: nav, links, focus, buttons, form accents, in both themes. Scope the
  per-project palettes strictly to project page content, where they are a
  strength, and make the CV stop switching hue across themes.
- **Priority:** high. **Impact/effort:** high impact on coherence, a day.

### 10. Spanish home leaks English

- **Observed:** on `/es/`, the Carcinisation card subtitle still reads "GBJam
  11 — Rust · Bevy ECS · Game Boy prototype" because it is hardcoded in
  `src/app/content.tsx:81` instead of coming from the i18n dictionaries, while
  the SonicThames card is translated.
- **Why it matters:** a bilingual site that half-translates its own home page
  undermines the point of shipping Spanish at all.
- **Change:** move the string into the locale dictionaries like its sibling.
- **Priority:** high (it is user-visible on a top-level page), trivial effort.

## Medium

### 11. No persistent identity in the header; the coffee button dominates it

- **Observed:** subpages have "← Go back" on the left and, on the right, the
  coffee button, theme toggle and language dropdown. There is no site mark or
  name in the header anywhere, and the coffee button (bright yellow cup in a
  light circle) is the most visually prominent interactive element on every
  page, including the contact page where the actual CTA is below the fold of
  attention.
- **Why it matters:** page-to-page there is nothing that says whose site this
  is, and attention is spent on a tip jar rather than on hiring or contacting.
  "Go back" also assumes the visitor came from home; deep links from search or
  shares land with no navigation to CV or Contact.
- **Change:** put a small name mark (or `MT` monogram) top left linking home,
  replace "Go back" with real nav (Work, CV, Contact), and demote the coffee
  button to the footer as a quiet text link with the existing "Support my
  work" tagline.
- **Priority:** medium. **Impact/effort:** medium-high impact, half a day.

### 12. SonicThames prose runs ~120 characters per line

- **Observed:** paragraphs measure 1014px at 16px font size; the "Poetic Drift"
  italic section spans the full content width. The Concept section is narrower
  and comfortable.
- **Why it matters:** 120ch lines are hard to track and look unconsidered;
  the italic full-width block reads like a styling accident rather than a
  pull-quote.
- **Change:** cap running prose at roughly 70ch site-wide; style Poetic Drift
  as an actual pull-quote (narrower, larger, accent rule) or as regular prose.
- **Priority:** medium. **Impact/effort:** medium impact, an hour.

### 13. The type scale is timid for a personal site

- **Observed:** the hero H1 is 51px on a 1440px viewport with a 13.6px
  monospace subtitle; section headings on project pages sit close to body
  size. Everything is legible; nothing is confident.
- **Why it matters:** with no imagery on home, typography is the only tool
  making a first impression, and it is set at "documentation" scale rather
  than "identity" scale.
- **Change:** a fluid hero scale around `clamp(3.5rem, 8vw, 6rem)` for the
  name, a slightly larger and more spaced eyebrow, and one step more contrast
  between heading levels on content pages.
- **Priority:** medium. **Impact/effort:** medium impact, hours.

### 14. Tablet and mobile margins collapse to the edge

- **Observed:** at 768px the hero and cards sit ~16px from the screen edge
  while desktop enjoys ~180px side margins; the same single-fold dead zone
  below the cards persists at every size.
- **Why it matters:** the composition loses all its air exactly when the
  viewport most needs breathing room; edge-hugging headline text looks
  cramped.
- **Change:** a proper spacing scale for the container (e.g. 24px mobile,
  48px tablet), and let the content column, not the viewport, define the
  layout.
- **Priority:** medium. **Impact/effort:** medium impact, hours.

### 15. CV order buries Experience on mobile

- **Observed:** on 390px the single column runs Profile, Contact, Skills,
  Software, Personal, and only then Experience, roughly two and a half screens
  down. The page is 6500px tall.
- **Why it matters:** Experience is what a recruiter opens the CV for; hobbies
  (tennis, bouldering) appear before any job.
- **Change:** reorder the mobile flow to name, profile, experience first;
  sidebar metadata after. Desktop two-column order is fine.
- **Priority:** medium. **Impact/effort:** medium impact, hours.

### 16. Light theme is a second-class citizen

- **Observed:** in light mode the Carcinisation card's grid texture becomes
  loud pink noise, the SonicThames card border nearly disappears against the
  pale ground, the hero smudge (finding 8) is far more visible, and the CV
  swaps to a different accent hue.
- **Why it matters:** half the theme toggle's output looks unfinished, which
  is worse than not offering the toggle.
- **Change:** tune the light palette deliberately (texture opacity, border
  contrast, single accent) or ship dark-only until light earns its keep.
- **Priority:** medium. **Impact/effort:** medium impact, half a day to tune.

## Low

### 17. Metadata copy undersells

- **Observed:** meta description "Personal page for experiments and
  publications"; structured data says jobTitle "Systems Engineer" while the CV
  leads with Lead Software Engineer roles.
- **Change:** one confident sentence naming the role, the stack span and
  London; align the job title.
- **Priority:** low. **Impact/effort:** small but free.

### 18. `robots.txt` as a visible footer link

- **Observed:** the home footer renders a text link to `/robots.txt` beside
  the social icons.
- **Why it matters:** it is an in-joke that reads as debris to anyone who is
  not a crawler enthusiast.
- **Change:** remove it, or lean in and label it (`for robots →`) as a
  deliberate wink. Half-measures read as accidents.
- **Priority:** low.

### 19. The 404 mixes metaphors

- **Observed:** the 404 uses Carcinisation's cartridge palette with
  SonicThames' "signal" language.
- **Change:** harmless, but when the brand system (finding 9) lands, restyle
  it in the site's own chrome so project palettes stay scoped to projects.
- **Priority:** low.

## The identity question

The site currently contains three unrelated visual worlds: a generic dark
developer home, a lovingly crafted Game Boy cartridge, and a moody cyan sound
study; plus a CV in template mint. The interests read as disconnected because
only the projects got identities; Marco did not.

The unifier is already latent in the site's own vocabulary: cartridge, signal,
console, systems. Treat the site as the console and each project as a module
that slots into it: constant chrome (type stack, monospace eyebrows, one brand
accent, consistent card frame with a small labelled header like `MODULE 01 /
CARTRIDGE`), while the module's interior carries its own palette. Home shows
the console with modules docked; project pages power a module up. This gives
the engineer/game-dev/tinkerer identities one memorable frame without a single
gimmick pixel; it also explains the 404 ("SIGNAL LOST") and gives the future
hardware projects an obvious home.

Against the bar of the best senior-engineer and creative-technologist personal
sites, what those have and this lacks is: an owned accent, a real bio above the
fold, real imagery of the work, and one signature interactive moment. The bones
here (type stack, theming infrastructure, per-project palettes, the cartridge
page) are better than most; they are simply not assembled into a brand yet.

## Prioritised shortlist

The smallest set of changes that moves the site from competent to premium:

1. **Ship a real OG image and fix the doubled home title** (findings 1, 2).
   Hours. Every share and search result improves.
2. **Real Carcinisation screenshots and a gameplay loop** (finding 3). Hours;
   assets exist.
3. **Home hero: bio, role, location, availability; kill the smudge; scale the
   type** (findings 5, 8, 13). About a day. This is the perceived-quality
   centre of gravity.
4. **Project cards with imagery, and SonicThames demo/repo links** (findings
   6, 7). One to two days. The portfolio starts selling the work.
5. **Contact that works: real endpoint or email-first** (finding 4). Half a
   day. Converts the attention the other fixes generate.
6. **One brand accent everywhere, coffee button demoted, ES leak fixed**
   (findings 9, 10, 11). About a day. Coherence.

Roughly a week of focused work. The console/module identity system is the
phase-two project after these land; nothing in the shortlist blocks it.
