# Design direction

Evidence base: `docs/design-review.md` (2 September 2026). This pass is
design-direction and planning only; no production code was modified for it.
The three candidate directions were validated against the real content at
desktop and mobile widths using lo-fi HTML mockups set in the site's own woff2
fonts (`local/review/mock/*.html`, gitignored; screenshots regenerable with
`node local/review/mock/shoot-mocks.mjs`). Mockup copy uses only facts from the
CV and project pages.

## Tranche 1 record: objective fixes

Accepted defects, fixed in the working tree in the prior pass and verified
against a fresh export (`pnpm check` green). Recorded here so the design work
stays clean of them:

- `og:image` pointed at a non-existent `PLACEHOLDER.png`; it now serves a real
  card from `public/og.png`, rendered by `scripts/generate-og.ts` from the
  shipped fonts. **This artwork is deliberately interim**: neutral type on the
  current dark ground so it does not pre-empt the brand direction. Phase 2
  regenerates it from the chosen identity; the script exists for exactly that.
- Home `<title>` rendered "Marco Toniut | Marco Toniut"; CV rendered
  "Marco Toniut | Resume | Marco Toniut". Site-name titles are now absolute
  and dictionaries hold bare page titles in both locales.
- `og:image:alt` doubled the name; deduped.
- The Carcinisation card subtitle was hardcoded English JSX; it now lives in
  both locale dictionaries and `/es/` is fully Spanish.

Unambiguous defects found while verifying, needing owner action, not design:

- `github.com/marcotoniut/carcinisation` is **private**, so the project page's
  "View source" button and the CV's repo link 404 for every visitor. Publish
  the repo or remove the links.
- **IBM Plex Mono is named in the font stack but never loaded** (no
  `@font-face`), so the monospace brand voice renders as Menlo/Consolas for
  almost everyone. Self-hosting lands in Phase 2 because subsetting choices
  belong with the brand work.
- The itch.io page has cover art and a playable HTML5 build but **no gameplay
  screenshots exist anywhere**; captures must be produced from the web build.

## Positioning: what should the eyebrow say?

"SYSTEMS ENGINEER" is biographical: the literal English rendering of the
Argentine degree (Ingeniería de Sistemas, i.e. software engineering). The
anglophone market does not read it that way; it signals infrastructure,
embedded, aerospace or IT operations. The current label misfiles Marco in the
five seconds the homepage exists to win, and it carries no seniority, which the
CV otherwise establishes at lead/principal level for eighteen years.

What the work actually supports: lead and principal roles across healthcare
(VitVio), fintech (Ledger, Abound, Prima), energy (Moixa) and events
(Eventbrite); a rare typed-functional thread (TypeScript, Elm, Haskell,
Elixir, Rust); a shipped Rust/Bevy game with a led team; sound cartography;
electronics heading towards hardware. The breadth is the differentiator; the
anchor must be the thing people pay for.

Positioning decision set (final copy needs Marco's sign-off in Phase 2):

- **Primary label: "Lead Software Engineer".** Classifiable at a glance,
  senior, and simply true of the current role.
- **Breadth in a range line, not the label.** One sentence of concrete nouns
  from real work. Working draft, validated in the mockups: "Eighteen years of
  production platforms for healthcare, fintech and energy. Also: a Game Boy
  game written in Rust, a sound map of London, circuits in progress." Banned:
  "digital experiences", "crafting", "engineer and creator" and their genre.
- **No enumerated checklist in the hero.** Tested against the mockups, the
  hero needs exactly four things: name, label, range line, two actions
  (Contact, CV). Employer names stay in the CV; naming VitVio in the hero
  would make the personal site read as an employee page.
- **Location: yes, two words of cost.** It rides the eyebrow or a corner
  annotation (`LONDON`); real recruiter value, no compositional weight.
- **Availability: no.** It goes stale silently, reads as bench time at senior
  level, and adds nothing for the visitor who was going to write anyway. If it
  ever appears, it belongs on the contact page where it is one edit away.

## The "console and modules" hypothesis, critiqued

**Genuinely strong:**

- Derived from vocabulary the site already owns (`CARTRIDGE`, `SIGNAL LOST`,
  `SYSTEMS ENGINEER`), not imported from a moodboard.
- Its mechanics answer the audit's diagnosis exactly: constant parent chrome
  carries Marco; scoped interiors preserve each project's world, Carcinisation
  untouched.
- Nominally extensible: new project, new module.
- Gives the 404 and future hardware an obvious home.

**Where it fails:**

- **It answers the identity question with the wrong identity.** A console
  with cartridges is a gaming frame; on first read it positions Marco as a
  game developer who also does software, inverting the truth the brief
  requires. That misread is most likely in exactly the audience the site must
  convert: CTOs, engineering clients, senior recruiters.
- **The literalism gradient has no natural stop.** Console shells, slots,
  docking motion, power-on sequences: each step is individually charming and
  cumulatively converts a professional asset into a toy. A concept that needs
  constant governance against its own logic is an expensive concept.
- **Everything that is not a project pays a tax.** What module is the CV? A
  client engagement? A talk? Professional material either wears a costume
  that undermines it or sits outside the system, recreating today's split
  (themed projects, unthemed professional surfaces) under a new name.
- **It ages towards a Pokédex.** Ten modules with bespoke cartridge frames
  and palettes drift from workshop to collection; per-entry authoring cost
  rises, so the metaphor dilutes or publishing slows.
- **At a safe dosage it is imperceptible.** Subtle enough not to read as
  gaming, nobody perceives a console at all; what survives is constant
  chrome, a monospace designation vocabulary and scoped palettes. That
  residue is the valuable part and does not need the fiction.

**Verdict:** reject the fiction, keep the mechanics. All three directions
below inherit them. Comprehension must never depend on any metaphor: in every
direction the composition alone (name, label, range, work, contact) answers
the five-second questions.

## Direction 1: The Index

*Restrained premium creative-technologist. Deliberately rejects the console.*

- **Central idea and rationale:** the site is a precisely set index of work: a
  specimen-page hero, then numbered entries. Typography and spacing are the
  entire identity. Rationale: Marco's differentiator is judgement and range;
  the quietest possible frame makes the work list itself the brand.
- **Personality:** calm, exact, quietly confident. An engineer's ledger.
- **Positioning/tagline approach:** no tagline anywhere. Eyebrow
  `LEAD SOFTWARE ENGINEER · LONDON`, name, range line. The absence of sell is
  the sell.
- **Typography:** Space Grotesk 700 for the name (fluid ~56 to 104px) and row
  titles; IBM Plex Sans body at 70ch; IBM Plex Mono (self-hosted) for eyebrow,
  index numbers, tags, footer. Nothing else.
- **Colour and owned accent:** near-monochrome ground (`#0b0d12` kept); one
  Marco accent: the existing mint `#56f3c9`, used for the mark, links, focus
  and hover only.
- **Homepage composition** (validated in mockup):

  ```
  MARCO TONIUT                          WORK  CV  CONTACT  EN
  ─ 12vh ─
  LEAD SOFTWARE ENGINEER · LONDON
  Marco Toniut                        (display scale)
  range line, 60ch
  GET IN TOUCH →   READ THE CV →
  ─ 14vh ─
  SELECTED WORK ────────────────────────────────────────────
  01  Carcinisation   pitch line              GAME · 2023
  02  SonicThames     pitch line              STUDY · 2024
  03  Bench, vol. 1   pitch line          HARDWARE · SOON
  ─ footer: email · socials · support ─
  ```

- **Navigation/chrome:** mono wordmark `MARCO TONIUT` top left in accent; nav
  right (`WORK CV CONTACT EN`); one hairline under the work label and between
  rows; footer is one ruled line with the email visible.
- **Project presentation:** rows, not cards. Index number, title, pitch, tag.
  Hover: title takes the project's channel colour and a small thumbnail
  reveals beside the row; touch renders thumbnails inline, smaller.
- **Parent/project relationship:** parent is monochrome plus mint; project
  colour exists on home only as that hover tint; project pages keep their
  full worlds.
- **Imagery/art direction:** none on home until hover; real captures on
  project pages with plain figure treatment; no device frames.
- **Motion/interaction language:** near zero; instant exact state changes;
  150ms maximum anywhere.
- **Signature interaction:** the hover reveal: thumbnail plus channel tint,
  the only colour event on the page. Honest but modest; the direction accepts
  having no theatrical moment.
- **CV/contact/professional:** native fit; both are editorial pages already;
  the CV needs only the token pass.
- **Future work fit:** new rows with tags (`PLATFORM`, `ENGINE`, `HARDWARE`,
  `CLIENT`); index numbering absorbs anything; zero per-entry design cost.
- **Light/dark behaviour:** trivially symmetric: paper ground, same mint,
  same hairlines. Lowest light-theme risk of the three.
- **Risks and failure modes:** genre-generic: the quiet editorial index is
  the default form of the current senior-dev site; with average copy it is
  indistinguishable from a hundred others. Identity load falls entirely on
  writing quality and whitespace discipline. Memorability is the direct cost
  of its safety.
- **Complexity:** low to medium. Mostly deletion, tokens and typography.

## Direction 2: Bench Notes

*Evolves the console hypothesis away from gaming into instrumentation: the
engineering bench and the kept lab notebook.*

- **Central idea and rationale:** the visual grammar of technical
  documentation: hairline rules, a title block, small mono annotations, work
  entries designated like components on a schematic (`K1 · GAME`,
  `U2 · STUDY`). Rationale: games, platforms, sound maps and circuits are all
  things built at one bench; the frame asserts the engineer, and every kind
  of work becomes evidence on it. It keeps everything the console concept got
  right while removing the gaming misread.
- **Personality:** precise, hands-on, curious. Measurements, not marketing.
- **Positioning/tagline approach:** no tagline; the title block carries the
  positioning as annotation: eyebrow corner `LEAD SOFTWARE ENGINEER`, corners
  `LONDON · 51.5°N` and `REV 2026.09`. Personality lives in the annotations,
  never in adjectives.
- **Typography:** as Direction 1, with mono promoted to a first-class voice:
  designations, corner labels, figure captions, footer title block. Space
  Grotesk reserved for the name and titles so the mono voice stays sharp.
- **Colour and owned accent:** dark ground kept; Marco's accent is phosphor
  mint `#56f3c9` (instrument glow); each project owns a **channel colour**
  (Carcinisation cream `#e8c8a0`, SonicThames cyan `#4cc3e8`) used only in
  its designation and hover state at parent level.
- **Homepage composition** (validated in mockup, desktop and mobile):

  ```
  MT·TONIUT                             WORK  CV  CONTACT  EN
  ──────────────────────────────────────────────────────────
  ┌─ LEAD SOFTWARE ENGINEER ──────────── LONDON · 51.5°N ─┐
  │  Marco Toniut                        (display scale)  │
  │  range line, 58ch                                     │
  │  GET IN TOUCH →   READ THE CV →                       │
  └───────────────────────────────────── REV 2026.09 ─────┘
  │
  ├─ ON THE BENCH
  │ ┌────────────────────────────────────────┬──────────┐
  ├─┤ K1 · GAME · 2023 · RUST + BEVY         │ capture  │
  │ │ Carcinisation                          │          │
  │ │ pitch, 52ch                            │          │
  │ └────────────────────────────────────────┴──────────┘
  ├─ (U2 · SonicThames …)   (J3 · HARDWARE · IN PROGRESS …)
  │
  ┌─ CONTACT ──────┬─ ELSEWHERE ─────┬─ COLOPHON ─────────┐
  │ email          │ socials         │ next.js · support  │
  └────────────────┴─────────────────┴────────────────────┘
  ```

  A single hairline spine runs down the left of the bench section; each panel
  taps into it with a short connector. Validation notes: at 1440 the title
  block reads senior-engineering, not gaming, with the designations sitting
  beside real content; at 390 the panels stack cleanly but the title-block
  corner labels collide and must collapse to stacked rows above the name.
- **Navigation/chrome:** bezel-strip header (mono wordmark `MT·TONIUT`, nav,
  controls) ruled off with one hairline; footer is a three-cell title block:
  CONTACT (visible email), ELSEWHERE (socials), COLOPHON (stack, support
  link). The coffee button lives there, demoted.
- **Project presentation:** hairline panels seated on the spine: designation
  in channel colour, title, pitch, real capture. Hover/focus energises the
  panel border and its spine connector in the channel colour. An `IN
  PROGRESS` ghost panel is part of the system: the bench is allowed to show
  work not yet finished, which no card grid can do gracefully.
- **Parent/project relationship:** the cleanest of the three: at parent level
  a project is a designation and a channel colour; inside its page it is its
  whole world. Carcinisation keeps everything; the scaffold (eyebrow, meta
  grid, figure captions) is shared grammar, not shared skin.
- **Imagery/art direction:** captures mounted as figures with mono captions
  (`FIG. 1 — WAVE INDICATOR`); consistent caption grammar sitewide; no
  device frames, no mockup chrome.
- **Motion/interaction language:** almost everything instant; hover/focus
  energise states at 150ms; one slow element (below).
- **Signature interaction:** **the trace.** The spine is a signal path: as
  the page scrolls, a subtle brighter segment travels down it; hovering or
  focusing a panel energises that panel's connector in its channel colour.
  On the 404 the trace flatlines above `SIGNAL LOST`, which the site already
  owns. Under `prefers-reduced-motion` the spine is a static rule and nothing
  is lost structurally. Dosage cap (acceptance criterion, not taste note):
  the trace is always a 1px rule; no oscilloscopes, dials, drawn devices,
  CRT or scanline effects anywhere outside Carcinisation's own world.
- **CV/contact/professional:** the CV becomes a specification sheet through
  grammar alone (title block header, ruled sections, mono annotations);
  content untouched. Contact is a short title-block page: email first, form
  second. Client and freelance material enters as `PLATFORM`/`CLIENT` panels
  with no costume.
- **Future work fit:** native. Electronics and hardware are literally bench
  work; engine/rendering studies present as captures with figure labels; the
  ghost-panel pattern turns future work into a feature of the composition.
- **Light/dark behaviour:** dark is the instrument at night; light is **graph
  paper**: warm white `#fbfaf7`, 24px grid at ~4% contrast, ink text, deeper
  mint `#0f9d77` for contrast. Validated in mockup: the light theme is not a
  compromise but the second face of the same identity, arguably the more
  distinctive of the two. This direction is the only one whose light theme
  adds meaning.
- **Risks and failure modes:** kitsch by accretion: the metaphor invites
  decorations, and each is individually defensible. Governed by the dosage
  cap and by the rule that every decorative line must double as layout
  structure. Second risk: annotation noise burying content; capped by a
  budget (title block corners, designations, figure captions, footer cells,
  and nothing else). Third: the trace becoming a scroll-jank liability on
  cheap phones; it must be transform-only and disabled below a performance
  budget.
- **Complexity:** medium to high. The spine/panel system, the trace, and the
  light grid are real work; the rest is tokens and typography.

## Direction 3: Ink Worlds

*A third interpretation: not quiet chrome, not instrumentation, but Marco as
publisher. Monochrome paper; each project is an ink that takes over.*

- **Central idea and rationale:** Marco's identity is deliberately neutral:
  large monochrome typography on paper. Each project owns an ink-and-paper
  pair; interacting with a work entry re-inks the entire viewport in that
  project's palette; entering the page commits to it. Rationale: the audit
  found the projects' worlds are the site's best asset; this direction stops
  containing them and starts printing with them.
- **Personality:** confident, gallery-like, a little theatrical.
- **Positioning/tagline approach:** masthead name; a single dense line under
  it: "Lead software engineer, London. Platforms for healthcare, fintech and
  energy; a Game Boy game in Rust; a sound map of London; circuits in
  progress." All positioning in one breath, then the work at display scale.
- **Typography:** the name at masthead scale (up to ~150px, validated); work
  entries as display-scale headlines (40 to 92px), not rows or cards; mono
  only for small metadata lines.
- **Colour and owned accent:** none. Black, paper white, warm greys; the
  refusal of an accent is the brand. Projects supply all colour
  (Carcinisation plum/cream, SonicThames deep blue/cyan).
- **Homepage composition** (validated in mockup):

  ```
  MARCO TONIUT                              CV  CONTACT  EN
  ─ 14vh ─
  Marco
  Toniut                                  (masthead scale)
  one-line positioning, 60ch
  ─ 16vh ─
  ──────────────────────────────────────────────────────────
  GAME · 2023 · RUST + BEVY
  Carcinisation                           (display scale)
  pitch line
  ──────────────────────────────────────────────────────────
  STUDY · 2024 · SOUND + MAPS
  SonicThames                             (display scale)
  pitch line
  ─ footer: email · socials ─
  ```

- **Navigation/chrome:** nearly none: a hairline header with the name and
  three links; footer with email and socials. The chrome disappears so the
  ink events carry everything.
- **Project presentation:** typographic entries; hovering one re-inks the
  whole viewport (validated: hovering Carcinisation turns the page plum and
  the headline cream, a genuinely memorable moment); a small capture appears
  beside the pitch.
- **Parent/project relationship:** total surrender by design: the parent has
  no colour for the projects to clash with. The risk is the inverse of
  today's problem: Marco's own surfaces (CV, contact) have no world at all.
- **Imagery/art direction:** minimal on home; project pages carry their
  worlds at full strength, unchanged.
- **Motion/interaction language:** one move: the 200 to 300ms custom-property
  crossfade of the page palette. Everything else static.
- **Signature interaction:** the re-inking itself.
- **CV/contact/professional:** monochrome editorial; risks reading as the
  unfinished part of the site next to the chromatic moments; a client
  engagement with no natural palette sits flat.
- **Future work fit:** each new project must bring a strong palette to earn
  its ink; ordinary professional work has none, so the system starves
  precisely where the commercial value is.
- **Light/dark behaviour:** the toggle inverts paper polarity (near-black
  paper / warm white paper); project inks stay fixed. Elegant in principle;
  in practice every project palette must be tuned twice to hold contrast on
  both papers.
- **Risks and failure modes:** theatrical over trustworthy for the
  commercial audience; the signature is hover-dependent and therefore
  invisible on touch (confirmed in mockup: without hover the page is a very
  quiet type specimen); with two projects today the worlds trick has little
  material; masthead typography is unforgiving in responsive and localised
  contexts ("Curriculum Vitae" runs long in Spanish chrome).
- **Complexity:** medium build, high polish sensitivity.

## Comparison and recommendation

| | Index | Bench Notes | Ink Worlds |
|---|---|---|---|
| Memorability | low | high | high on pointer devices, low on touch |
| Professional credibility | high | high, with governance | medium |
| Answers the audit's diagnosis (Marco > projects) | partially, by muting projects | yes, structurally | no, inverts it further |
| Contains non-project work (CV, client, talks) | well | best: designation system | poorly |
| Extensibility to hardware/engine/freelance | neutral | native | starves without palettes |
| Light theme | safe, unremarkable | distinctive (graph paper) | doubles palette workload |
| Signature interaction | modest hover reveal | the trace, degrades cleanly | re-inking, hover-only |
| Game-dev misread risk | none | low (instrument, not console) | medium (worlds dominate) |
| Copy dependence | total | moderate | moderate |
| Implementation complexity | low-medium | medium-high | medium, high polish cost |

**Recommendation: Bench Notes, executed with the Index's restraint.**

Why it wins on the four axes that matter:

- **Memorability:** it is the only direction with a distinctive identity that
  survives touch devices, reduced motion and the light theme; the title
  block, designations and trace are recognisable after the tab closes.
- **Professional credibility:** the grammar of technical documentation is the
  native dress of senior engineering; validated against the real content, the
  mockup reads as an engineer's site first and contains a game without being
  contained by it.
- **Extensibility:** the designation system absorbs every future work type,
  including unfinished work (ghost panels) and commercial work (`CLIENT`
  panels), which neither alternative handles; growth makes the bench look
  fuller rather than the metaphor thinner.
- **Commercial value:** the same frame that displays a Game Boy game
  dignifies a healthcare platform engagement; the CV-as-specification and
  title-block contact page make the professional surfaces the most branded
  pages rather than the least.

**Borrowed from the rejected directions:**

- From the Index: the entire restraint discipline as binding constraints: one
  accent, 70ch measures, hairlines only where they structure, near-zero
  motion outside the trace, and the numbered-list clarity inside the CV's
  project history.
- From Ink Worlds: the palette crossfade on page entry into a project (a
  committed navigation event, not a hover tease). **Deferred by design lock
  8:** not in the first pass; re-evaluate once the trace and static identity
  are shipped and judged. Also its lesson that positioning can be one dense
  line: the range line stays a single sentence.

**What not to do (binding, to prevent drift):**

- No drawn hardware: no consoles, cartridges (outside Carcinisation's own
  page), oscilloscopes, dials, knobs, LEDs, breadboards, CRT or scanline
  effects in parent chrome. The bench is a grammar, not an illustration.
- No decorative line that is not also doing layout work; no second accent;
  no gradients in parent chrome.
- No rounded-card grid, no tag pills, no skill bars, no logo walls, no
  testimonial carousels: none of the SaaS portfolio kit.
- No vague copy: "digital experiences", "crafting", "passionate", "engineer
  and creator" are rejected on sight; every claim names a real thing.
- No hero enumeration of employer or availability; no metrics theatre
  (years counters, GitHub graphs).
- Annotation budget is fixed: title-block corners, designations, figure
  captions, footer cells. A fifth annotation class needs this document
  amended first.
- Reference as temperature, never costume: influences (the MGS1 codec green,
  the instrument bench) may set a hue, a weight, a mood; they must never
  produce a recognisable artefact (scanlines, glow, codec frames, drawn
  hardware). If a viewer can name the source, it has gone too far.
- No pseudo-metadata: every annotation states something true and derived
  (`LONDON`, a commit-derived `REV`); coordinates, fake part numbers and
  invented reference designators (`K1`, `U2`) are banned. Designations read
  in plain words: `01 · GAME · 2023 · RUST + BEVY`.
- The trace is 1px, transform-only, and never blocks reading; if it cannot
  hold 60fps on a mid-range phone it ships as the static spine.

## Design lock (3 September 2026)

Bench Notes governed by the Index's restraint is **accepted**. The following
resolutions close the remaining ambiguities and are binding; where they
contradict the direction descriptions above, the lock wins. Label and theme
decisions were tested against the mockups before locking (label variants at
1440 and 390; grid density against real CV prose at 4% and 2.5%).

1. **Positioning label: `SOFTWARE ENGINEER · TECHNICAL LEAD`.** Tested against
   `SOFTWARE ENGINEER` (clean but carries no seniority) and `LEAD SOFTWARE
   ENGINEER` (seniority as an employment grade: it is the current VitVio
   title, goes stale on the next role change, and reduces the identity to a
   job level). The chosen pair states craft plus leadership as durable
   capabilities, matches twelve years of lead/principal history rather than
   one contract, and fits the title block at 1440. At mobile widths the
   corner annotations must stack above the name (validated: side by side they
   collide and truncate at 390 regardless of which label is chosen).
   Spanish: `INGENIERO DE SOFTWARE · LÍDER TÉCNICO`.
2. **Range line (one practice, no "also" hinge):** "Eighteen years of
   building: production platforms for healthcare, fintech and energy; a Game
   Boy game written in Rust; a sound map of London; circuits in progress."
   The colon list makes the professional and experimental work grammatical
   peers of one practice. Spanish: "Dieciocho años construyendo: plataformas
   de producción para salud, finanzas y energía; un juego de Game Boy escrito
   en Rust; un mapa sonoro de Londres; circuitos en progreso."
3. **`51.5°N` is removed.** Rendered without it, the composition loses
   nothing: `LONDON` alone balances the title block. It reinforced the
   instrumentation theme while adding no information, which is the definition
   of the pseudo-metadata this direction bans.
4. **`REV <yyyy>.<mm>` stays only as honest metadata.** It answers the one
   question every personal site fails ("is this current?"), so it is
   meaningful, but only if derived: from the last content commit date,
   injected at build. Never hand-maintained; if derivation proves unreliable
   or churns visual snapshots, it is removed rather than faked.
5. **Schematic prefixes (`K1`, `U2`, `J3`) are rejected.** Reference
   designators have no taxonomy a visitor can decode (K is a relay, U an IC;
   the mapping to GAME/STUDY was invented), violating the rule that the
   design never requires decoding. Designations are semantically transparent
   and index-numbered: `01 · GAME · 2023 · RUST + BEVY`. Numbering is
   curatorial order; categories are plain words (`GAME`, `STUDY`, `PLATFORM`,
   `HARDWARE`, `ENGINE`, `CLIENT`).
6. **No ghost/in-progress panel.** Unfinished work appears only when there is
   real material (a capture, a designation, a sentence of substance); a
   polished placeholder is still a placeholder. The homepage composition must
   stand with exactly the projects that exist.
7. **Graph-paper grid is confined.** Validated against real CV prose: at 4%
   the ruling is clearly visible through paragraphs; even at 2.5% it remains
   perceptible during sustained reading. Binding rule: grid at most 2.5%,
   rendered on the page ground and structural bands (title block, footer)
   only; long-form reading surfaces (CV columns, project prose) sit on solid
   paper. The identity lives in the whitespace, not under the text.
8. **Motion budget, first pass:** the trace is the only signature
   interaction. The Ink Worlds page-entry palette crossfade is explicitly
   deferred: not in the first implementation; re-evaluate after the trace
   and static identity ship.
9. **Dependency correction:** the homepage panel system does not wait for
   final project captures. It ships with existing legitimate assets (the
   Carcinisation itch.io cover art exists today) and must tolerate absent
   media gracefully (a panel without a capture is a valid layout, not a
   broken one). Final captures upgrade the media in the project-page tranche.
10. **Dark palette: codec-tinted green-black (locked 3 September 2026).** The
    dark ground moves from blue-black to green-black, prototyped from the
    Metal Gear Solid 1 codec and tuned on a comparison board (three phosphor
    candidates, four muted-text candidates, two primary whites, and an
    accent-stripped control). Locked ramp: ground `#0c120e`, surface
    `#131a15`, elevated `#171f1a`, borders `#24302a`/`#1a211c`, primary text
    `#eff3ee` (green-white; the old blue-white sat cold), muted text
    `#9aa39c` (barely green: visibly-green `#93a89a` tinted running prose,
    while pure/blue-cast greys drift lavender on this ground), accent
    `#6fe0a0` (phosphor; `#72d995`/`#7bdd9a` cross into generic
    success-green, and the old `#56f3c9` reads off-family aqua on green
    ground). Channel colours unchanged (11.9:1 and 9.3:1 on the new ground);
    all pairs measured AA or better, minimum 6.8:1. The semantic gain: on
    this ground the accent reads as an active signal rather than a decoration,
    which is the trace, focus states and `SIGNAL LOST` speaking one language.
    Binding acceptance test: with the accent removed, every page must still
    read near-black at first glance, never "a green website". **Light mode
    stays warm-neutral paper: dark is powered equipment, light is the drawing
    of it. The reference is a temperature, never a costume** (also added to
    the what-not-to-do list; no scanlines, glows, codec frames or any other
    literal MGS artefact anywhere in parent chrome). The literal codec
    palette is archived as a possible interior world for a future
    comms/tooling project page.
11. **Typography: the incumbent stack survives an adversarial test (locked 3
    September 2026).** Space Grotesk 700 display / IBM Plex Sans text / IBM
    Plex Mono annotation was challenged with real content (name, eyebrow,
    range line, designation, project title) in dark and light at 1440 and
    390, against three deliberate alternatives: Barlow Condensed 700
    (industrial), Chakra Petch 700 (late-90s technical) and Plex Sans 500
    (Plex-forward, no new family). Board: `local/review/mock/type-test.html`.
    Findings: the condensed industrial face makes the name read promotional
    (poster/jersey), worse on paper; the squared technical face is a costume,
    the typographic equivalent of the scanlines this lock bans, and worst in
    light mode; Plex-forward proves the floor: it is handsome but drains the
    display voice entirely and the identity with it. Space Grotesk's honest
    weakness stands on record: it is the house font of the 2020s dev-tools
    genre and confers no distinctiveness by itself. It survives because in
    this system the display face is deliberately the least branded element:
    identity is carried by Plex Mono annotation, the phosphor palette and the
    title-block composition, and every more characterful display candidate
    moved the site toward costume. Consequence, made explicit: **Plex Mono is
    promoted to the primary identity carrier** (designations, eyebrows,
    corners, captions, footer); Space Grotesk is retained as the neutral
    display voice; Plex Sans is untouched. No typography changes ship; the
    weights already self-hosted (Grotesk 400/600/700, Sans 400/500, Mono
    400/500) are sufficient and final.

## Implementation plan

Priorities: P0 blocks everything after it or is already accepted; P1 is the
premium jump; P2 is polish that completes the direction. Acceptance criteria
are testable; "snapshots" means the Playwright visual suite, updated
deliberately in the same change.

### Tranche 1: objective fixes (P0, complete)

Recorded above. Remaining open items, owner action rather than code: publish
or unlink the private Carcinisation repo; sign off positioning copy before
Tranche 2 lands. Acceptance (met for the code items): `pnpm check` green, no
`PLACEHOLDER` in the export, single-instance titles, `/es/` fully localised.

### Tranche 2: brand foundations (P0) — implemented 3 September 2026

Everything later consumes this tranche. Implemented per the design lock;
copy ships pending Marco's review.

- **Positioning copy, both locales.** What: replace "Systems Engineer" with
  `Software Engineer · Technical Lead` (design lock 1) in the profession
  dictionary key, `siteConfig.jobTitle`, structured data and meta
  descriptions; range line (design lock 2) added to both dictionaries for
  Tranche 3 to render. Why: the current label misclassifies Marco at the
  moment of first contact. Depends: Marco's sign-off. Acceptance: no surface
  says Systems Engineer except the CV education entry (the degree, which is
  correct); meta description names role, domains, London; both locales
  reviewed by Marco.
- **Self-host IBM Plex Mono 400/500.** What: subsetted woff2 plus
  `@font-face`, matching the existing font pipeline. Why: the mono voice is
  the identity's designation system and currently renders differently on
  every OS. Depends: nothing. Acceptance: headless Playwright measures Plex
  Mono metrics (not Menlo) for an eyebrow node; no CLS regression; font
  payload under 30kB per weight.
- **Token system.** What: single accent (mint) in both themes replacing the
  light-blue; hairline, spacing scale, fluid type scale, channel colours
  (Carcinisation cream, SonicThames cyan) as named vanilla-extract tokens;
  graph-paper ground tokens for light. Why: the audit's accent drift finding;
  every later tranche needs the vocabulary. Depends: copy decision none;
  design tokens per this document. Acceptance: no hardcoded colour in parent
  chrome components; WCAG AA for text and interactive states in both themes;
  `pnpm check` green.
- **Regenerate `public/og.png` from the brand.** What: rerun the generator
  with final eyebrow, title-block framing, mint rule. Why: the interim card
  predates the direction on purpose. Depends: copy sign-off, tokens.
  Acceptance: share card matches the shipped hero's vocabulary.

### Tranche 3: homepage (P1) — implemented 3 September 2026

Implemented per the design lock: title block with corners that stack below
480px, commit-derived REV, range line rendered from the dictionaries, bench
spine with transparent designations, no ghost panel, media slots deferred to
Tranche 5. Verified: axe 13/13, Lighthouse assertions green, home snapshots
deliberately rebased. Two corrections after review: REV is computed in
`src/utils/content-rev.ts` at build (server module), not via the env schema,
because it is build metadata rather than configuration; and designations are
structural fields (`index`, `category`, optional `year`, `stack`) joined at
render, never preformatted strings, so a missing fact shortens the
designation instead of hiding an implicit schema.

- **Title-block hero.** What: hairline-framed block with corner annotations
  (`SOFTWARE ENGINEER · TECHNICAL LEAD`; `LONDON`; `REV <yyyy>.<mm>` derived
  from the last content commit at build, removed if derivation is
  unreliable), name at fluid display scale, range line from the dictionaries,
  `GET IN TOUCH →` and `READ THE CV →`; remove the `text-shadow` smudge. Why:
  the audit's finding 5 (the page says nothing) and 8 (the smudge), and the
  hero is where the direction is won. Depends: Tranche 2. Acceptance:
  cold-viewer test answers who/what/where in one fold at 1440 and 390; corner
  annotations stack above the name below ~480px (mockup-observed collision);
  `REV` matches the last commit month or is absent; no shadow artefact in
  either theme; axe green; Lighthouse performance assertion (0.88) holds.
- **Bench section scaffold.** What: `ON THE BENCH` label, left spine, panel
  slots; dead zone below content removed. Why: replaces the empty strips and
  the 40% idle fold. Depends: Tranche 2. Acceptance: no vertical dead zone
  taller than one spacing unit at any viewport; spine renders as static rule
  pre-Tranche 9.

### Tranche 4: site chrome and navigation (P1) — implemented 3 September 2026

Implemented with one added criterion from review: the chrome carries the
identity (mono wordmark `MT·TONIUT`, hairline bezel, mono nav, title-block
footer) without repeating the homepage composition on other pages; on the
Carcinisation page the header keeps its structure but retints into the
cartridge world, so entering it still reads as entering another world. The
footer is a conversion surface: the email is the only accent-coloured element
in it, the socials are quiet mono text links, and the coffee CTA is a plain
"Support my work" text link in the colophon (the animated badge variant is
retired from chrome; analytics tracking retained). The sr-only AI-policy
sentence with its labelled robots.txt link is unchanged. Verified: axe 13/13,
Lighthouse assertions green, all eight visual baselines deliberately rebased
(chrome touches every page).

- **Header.** What: mono wordmark linking home; `WORK CV CONTACT` plus
  language and theme controls, small, ruled off with one hairline; replaces
  "Go back". Why: audit finding 11: no persistent identity, deep links are
  dead ends. Depends: Tranche 2. Acceptance: every page reaches every
  top-level page in one click; keyboard order mark, nav, controls; snapshots.
- **Footer title block.** What: three cells: CONTACT (visible clickable
  email), ELSEWHERE (socials), COLOPHON (stack note, support link, the
  robots.txt link either removed or labelled `for robots →`). Why: email was
  invisible sitewide; the coffee button outranked every CTA. Depends:
  Tranche 2. Acceptance: email is copyable text on every page; the
  highest-contrast interactive element on any page is a site CTA, checked
  against screenshots.
- **Demote the coffee button.** What: out of the header, into the COLOPHON
  cell with the existing tagline. Why: someone else's brand was the loudest
  pixel on every page. Depends: footer. Acceptance: header contains no
  third-party branding.

### Tranche 5: project presentation on home (P1) — implemented 3 September 2026

Implemented under the governing question from review: media must behave like
evidence mounted on the bench, never advertising artwork, and must not make
the projects visually stronger than Marco's frame again. The only legitimate
asset that exists, the itch.io cover, turned out to be the game's native
160x144 Game Boy framebuffer; it ships pixel-exact at 2x integer scale in a
hairline mount, slightly de-energised at rest (saturate 0.8, brightness 0.92)
and restored with the channel border on hover/focus. SonicThames ships without
media, exercising the absent-media layout deliberately. Judged against the
question at 1440 and 390, dark and light: the name and chrome still outrank
the media; the mount reads as a specimen, not a poster. Verified: axe 13/13,
Lighthouse assertions green, snapshots deliberately rebased.

**Execution order (revised on review):** 5, then the parent-system portions
of 8 (the graph-paper light environment can only be judged against the real
homepage and chrome, so it moves ahead), then 6, then 7, then 9.

**Decisions recorded:**

- **Carcinisation repository:** Marco's call stands open: publish it if the
  Rust/Bevy source is fit for strangers (inspectable engineering evidence is
  worth more to this brand than the game itself); otherwise unlink rather
  than leaving a public 404. Tranche 6 proceeds either way.
- **SonicThames:** demo/repo availability does not block Tranche 6; the page
  presents honestly as a study with its own visual evidence and can gain
  `DEMO →` / `SOURCE →` later.
- **Contact service:** deferred to Tranche 7 proper. The footer email shipped
  in Tranche 4 means a working conversion path already exists sitewide, so no
  third-party dependency is taken merely to preserve the old form design.

- **Work panels.** What: designation (`01 · GAME · 2023 · RUST + BEVY`),
  title, pitch, media slot; hover/focus energise border and connector in
  channel colour; thumbnails inline on touch. No ghost panels (design lock
  6). Why: audit finding 6: the cards are the portfolio and show nothing.
  Depends: Tranches 3, 4 only; media uses existing legitimate assets (itch
  cover art) and the layout must be valid with the media slot absent (design
  lock 9), so Tranche 6 captures are an upgrade, not a dependency.
  Acceptance: every entry shows designation, year, pitch; imagery where a
  real asset exists, graceful absence where not; tap targets at least 44px;
  hover and focus-visible identical; snapshots updated once.

### Tranche 6: individual project pages (P1) — implemented 3 September 2026

Governing principle applied: the shared scaffold establishes authorship, the
project world establishes character, evidence establishes credibility.

**Repository decision: BLOCKED from publication, unlinked.** The
pre-publication audit (full history, all branches) found no secrets and no
personal information anywhere in 994 commits, but a real provenance gap:
teammates' music and sprite art ship in-tree with no root LICENSE, no CREDITS,
and no stated rights (three non-Marco contributors hold authorship in git),
plus two font gaps (Pixeboy with no licence text; Fira Sans without the
required OFL text). Per the review rule, the dead `View source`/GitHub links
are removed from the project page and the CV rather than leaving public 404s.
Path back to publication, separate from this tranche: teammate consent, root
LICENSE (code) plus an assets rights statement, CREDITS naming the GBJam 11
team, OFL text for Fira Sans, a README that says what the game is. Optional:
history rewrite to drop ~52MB of jam-era zips/WAVs.

**Carcinisation:** the three labelled placeholders are gone, replaced by
machine evidence captured from the itch.io web build via Playwright (the
build's own first-load stall, documented in Known Issues, reproduced and
worked around with a reload): the intro scene, the mutation cutscene, and
stage one in play with the score counter live, each cropped to the game
viewport with honest captions in both locales. The backdrop grid was tamed
from 0.35/0.2/0.16 alpha to 0.16/0.1 (the audit's "loud noise" finding, worst
in light). The world is otherwise untouched.

**SonicThames:** presented honestly as a study: a STATUS/STACK meta grid in
the hero (scaffold grammar in the world's own voice), no dead buttons and no
manufactured density. The fluorescent `#28f0ff` literal is replaced by the
theme-aware channel token (readable cyan in dark, deep cyan in light); the
phantom `Inter` stack (never shipped, rendered as system fallback) is
replaced by the real heading face; prose capped at 70ch; Poetic Drift is a
channel-ruled pull-quote instead of a full-width italic block.

**Cross-world test, judged on renders:** entering either page from Marco's
chrome reads as opening one of his projects (wordmark and nav persist,
retinted inside Carcinisation), while the two worlds remain radically
different from each other. Verified: axe 13/13, Lighthouse assertions green,
project and CV snapshots deliberately rebased.

- **Shared scaffold.** What: generalise Carcinisation's meta grid
  (designation eyebrow, title, JAM/PLATFORM/STATUS/ENGINE-style grid, primary
  links row, figure-captioned media). Why: page-to-page coherence without
  flattening worlds. Depends: Tranche 2. Acceptance: both project pages share
  structure; Carcinisation's interior world is unchanged outside the
  scaffold.
- **Carcinisation media.** What: capture at least three gameplay screenshots
  and one short loop from the itch.io web build (Playwright, reproducible);
  delete the three placeholder boxes; cut slots without real captures. Why:
  audit finding 3: the flagship game shows zero pixels of the game; no
  captures exist anywhere including itch. Depends: scaffold; the build is
  playable in browser. Acceptance: zero labelled placeholders; page weight
  within Lighthouse budget; captions follow the figure grammar.
- **SonicThames evidence.** What: primary actions (demo and/or repo if Marco
  can publish them; otherwise designation `STATUS: STUDY` and no dead
  buttons); at least one map/fog-of-war capture; prose capped at 70ch; the
  Poetic Drift block becomes a styled pull-quote. Why: audit finding 7: the
  page proves nothing and links to nothing. Depends: owner decision on
  demo/repo. Acceptance: at least one image; a working external action or an
  explicit status; no paragraph over 75ch.

### Tranche 7: contact and conversion (P1) — implemented 3 September 2026

**Decision: email-first, no third-party dependency.** A Formspree-class
endpoint requires an account only Marco can create, and the review had
already established there is no reason to take a dependency merely to
preserve the old form design. The mailto-trampoline form is deleted
(component, styles, dictionary block); the contact page is now the address
itself: a display-scale phosphor `mailto:` link with a locale-appropriate
subject prefill, the address visible and copyable as text (the completion
path for webmail users), and an ELSEWHERE row (LinkedIn, GitHub) in a
hairline grid-band panel. The CV-to-contact acceptance is satisfied by the
Tranche 4 header (`CONTACT` is one click from everywhere). Upgrade path
recorded, not blocking: if Marco later creates a form-service account, a
designed form can return in front of the email, which stays regardless.
Verified: axe 13/13, Lighthouse assertions green, contact snapshots
deliberately rebased.

### Tranche 7.5: layout primitives refactor (P2, added on review)

Order locked: 7, then this, then 9; the page-specific remainder of Tranche 8
(CV mobile ordering, per-page responsive checks) folds into whichever surface
is already being touched rather than reopening 8 as its own tranche.

- **What:** `@vanilla-extract/sprinkles` configured from the existing
  `themeVars` contract (spacing, colours, the 480/768/1080 conditions), plus
  a hand-rolled typed `Box`, `Stack`, `Inline`, `Grid` — and nothing more
  (no Center/Cluster/Container/Bleed until repeated patterns prove they
  exist). No Panda, no dessert-box: the theme contract stays the single
  source of truth and the primitives are typed projections of it.
- **Why:** roughly half the current `.css.ts` code is generic layout
  plumbing; primitives delete it and stop new tranches from adding more.
- **Binding rule: primitives encode recurring layout mechanics; semantic
  styles encode brand meaning.** Padding, gap, display, alignment, width,
  responsive columns: primitives. `titleBlock`, bench panels, connectors,
  `mediaMount`, the Carcinisation frame, the trace: named styles/components,
  never prop soup. A cleanup must not erase the vocabulary the redesign
  established.
- **Migration is opportunistic, not purity-driven:** where a semantic
  component mixes three generic declarations with five identity-specific
  ones, the generic three move to primitives and the rest stays named; no
  file is forced to zero.
- Depends: Tranche 7 (observed the last generic patterns from the completed
  site). Acceptance: no visual change (snapshots byte-stable or one
  deliberate rebase), `pnpm check` green, net deletion of style code.

- **Working contact path.** What: replace the mailto trampoline with a
  static-compatible endpoint (Formspree-class service or a small worker with
  spam protection), required sender-email field, success and failure states,
  and the email address visible on the page regardless. Why: audit finding
  4: "Get in Touch" silently fails for webmail users and never collects a
  reply address. Depends: Tranche 2 tokens; service choice is Marco's.
  Acceptance: e2e test submits against a mocked endpoint and asserts the
  success state; a machine with no mail client completes contact end to end;
  failure state exposes the address.
- **CV conversion.** What: contact CTA near the CV top; decide whether a PDF
  ships. Why: the CV is the recruiter's landing page and currently a dead
  end. Depends: Tranche 4 header partly covers it. Acceptance: contact
  reachable in one click from the CV at every viewport.

### Tranche 8: responsive and light-theme polish (P2) — parent-system portion
implemented 3 September 2026

The parent light environment is **locked**; the palette is not revisited
after this point. Implemented and judged against the strict criteria from
review: paper `#fbfaf7` reads as paper, not beige; ink `#1a1b1a` is
neutral-black with an imperceptible green bias so it cannot drift brown on
the warm ground; the light neutral ramp (surfaces, borders, muted text,
hairline) is re-derived on that cast, all pairs 5.1:1 or better. The grid is
confined to structural bands only (title block, footer cells) via a shared
`gridSurface` token; the page ground is uninterrupted paper, so prose can
never sit on ruling. The accent in light is printing-ink green, not
fluorescent; channels stay subordinate by scope. Container rhythm is
24/48/64 by breakpoint, which most improves 768. One defect surfaced and
fixed: the collapsed media mount stretched its frame past the image
(`fit-content` now). Inspected: dark and light read as the same identity in
two environments, powered bench and notebook; the Carcinisation light
interior (loud backdrop texture) and the SonicThames light interior
(fluorescent cyan on paper) are project-interior work, recorded for Tranche
6 and the page-specific remainder of this tranche, not silently absorbed
here. Remaining in this tranche: CV mobile ordering, Carcinisation texture
taming, per-page responsive checks.

- **Container spacing scale.** What: margins step 24/48/64px by breakpoint
  instead of collapsing to 16px at tablet. Why: audit finding 14. Depends:
  Tranche 2. Acceptance: no horizontal scroll at 320px+; content never
  closer than 24px to an edge; snapshots at three viewports.
- **CV mobile order.** What: Experience before sidebar metadata on one
  column. Why: audit finding 15: hobbies before jobs, two and a half screens
  of scroll. Depends: nothing. Acceptance: first Experience entry starts
  within 1.5 viewports at 390px.
- **Graph-paper light theme.** What: light tokens from Tranche 2 applied:
  warm paper, ink text, deep mint; grid at most 2.5% and confined to the page
  ground and structural bands, with long-form reading surfaces on solid paper
  (design lock 7); Carcinisation card texture contrast tamed; visible panel
  borders. Why: audit finding 16; in this direction light is a brand asset,
  not a liability. Depends: Tranches 2 to 5. Acceptance: light passes the
  same review checklist as dark; no grid under CV or project prose columns;
  grid invisible at arm's length on a phone (no moiré), present on desktop.

### Tranche 9: motion and final details (P2)

- **The trace.** What: scroll-linked energised segment on the spine;
  hover/focus energise per panel; static spine under
  `prefers-reduced-motion`. Why: the one memorable behaviour, earned from
  `SIGNAL LOST`/SonicThames vocabulary. Depends: Tranches 3, 5. Acceptance:
  transform/opacity only; 60fps on a mid-range phone or it ships static; no
  animation over 200ms except the trace; reduced motion yields identical
  layout.
- **Interaction states.** What: unified hover/focus (border energise, arrow
  slide) replacing underline-everything. Why: audit finding 12. Depends:
  Tranche 2. Acceptance: focus-visible at least as prominent as hover
  everywhere.
- **404 in parent chrome.** What: restyle with parent tokens; keep `SIGNAL
  LOST` and pixel numerals; the trace flatlines above them. Why: the joke is
  brand-true; the current page wears Carcinisation's palette. Depends:
  Tranche 2, trace optional. Acceptance: 404 uses parent tokens; the pixel
  numerals remain.
- **Icons and share surfaces.** What: favicon/app icons from the final
  identity; per-project OG cards if cheap (generator already parameterises).
  Why: tab, share card and page should agree. Depends: Tranche 2. Acceptance:
  favicon, OG and hero share vocabulary at a glance.

## Preserved strengths

Kept throughout, per the audit: Space Grotesk / IBM Plex Sans / IBM Plex Mono
(mono finally becomes real); the monospace eyebrow vocabulary (promoted into
the designation system); the Carcinisation cartridge treatment (untouched
inside its page); project-specific visual worlds (scoped as channel colours at
parent level, full strength inside); `SIGNAL LOST` (kept, reframed by the
trace); restraint and technical cleanliness (encoded as the binding "what not
to do" list and per-item acceptance criteria).
