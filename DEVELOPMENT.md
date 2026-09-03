# Development Guide

Quick reference for developing this Next.js personal website.

## Installation

This project uses [`proto`](https://moonrepo.dev/docs/proto) to pin tool versions.

```bash
proto install          # installs Node.js, pnpm, Lefthook, actionlint
pnpm install
lefthook install       # sets up Git hooks (skip in CI)
```

## Development

```bash
pnpm dev  # Starts dev server + translation watcher
```

Runs at [http://localhost:8525](http://localhost:8525)

## Key Commands

| Command          | Purpose                                   |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Start dev server with translation watcher |
| `pnpm discover`  | Repo metadata as JSON: routes, ports, gates, scopes |
| `pnpm build`     | Production build                          |
| `pnpm lint`      | Run Biome linter                          |
| `pnpm lint:fix`  | Fix auto-fixable issues                   |
| `pnpm typecheck` | Check TypeScript types                    |
| `pnpm generate`  | Generate translation files                |
| `pnpm print-cv`  | Generate CV PDF                           |
| `pnpm check`     | Run all quality gates (generate, lint, typecheck, spellcheck, test, build) |
| `pnpm test`      | Run unit tests (vitest)                   |
| `pnpm test:coverage` | Unit tests with coverage thresholds   |
| `pnpm test:e2e`  | Build, then run a11y + visual suites       |
| `pnpm audit`     | Dependency audit (all deps, high and above) |
| `pnpm lighthouse` | Lighthouse via `dlx`; needs `pnpm build` first |
| `pnpm deploy`    | Reminder: deployments run on `release`    |

## Development Flow

1. **Code** → Make changes
2. **Verify** → `pnpm check` (runs all gates)
3. **Commit** → Conventional Commits with scope (see below)
4. **Deploy** → merge to `release` (deployment workflow runs automatically)

### Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/) with scope:

```
feat(cv): add PDF download button
fix(i18n): correct Spanish translation for contact page
refactor(styles): extract shared font constants
chore(ci): add dependency audit step
docs(dev): update development flow
perf(analytics): reduce GA loader timeout
```

Scopes: `cv`, `i18n`, `styles`, `ci`, `components`, `analytics`, `a11y`, `seo`, `deps`, `dev`

## Key Concepts

### Translations

- Source files: `src/i18n/`
- Auto-generated during `pnpm dev`
- Manual regeneration: `pnpm generate`
- Uses `typesafe-i18n` for type safety

### CV PDF Generation

- Route: `/cv` (print-optimized page)
- Script: `scripts/print-cv.ts`
- Output: `local/Marco Toniut (CV).pdf`
- Requires Chrome: `npx puppeteer browsers install chrome`

### Styling

- Uses Vanilla Extract (`.css.ts` files)
- Colocated with components
- Type-safe CSS-in-JS

### Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React Compiler)
- **Language:** TypeScript (British English conventions)
- **Styling:** Vanilla Extract
- **UI:** Radix UI primitives
- **Translations:** typesafe-i18n
- **Deployment:** GitHub Pages

## Project Structure

```
src/
├── app/          # Next.js routes & layouts
├── components/   # UI components + styles
├── i18n/         # Translation source files
└── styles/       # Global styles

scripts/          # Utility scripts
```

## Quality Checks

Before committing:

```bash
pnpm check
```

### End-to-end suites

`test:a11y` and `test:visual` serve `out/` via `tests/e2e/static-server.ts`,
which mimics GitHub Pages (directory indexes, `404.html` fallback). Since they
test the shipping artifact, a build is required first:

```bash
pnpm build && pnpm test:visual
```

`pnpm test:e2e` handles the build for you. The server exits with an explicit
error if `out/` is missing rather than silently starting a dev server.

Snapshots are platform-sensitive: macOS and Linux rasterise the same woff2
differently, so CI allows a looser pixel diff than local runs
(`maxDiffPixelRatio` in `tests/e2e/playwright.config.ts`). Update snapshots with
`pnpm test:visual:update` and review the diff before committing.

### Lighthouse

CI runs it through `treosh/lighthouse-ci-action`, which bundles its own lhci, so
there is no Lighthouse dependency in the lockfile. Locally:

```bash
pnpm build && pnpm lighthouse
```

Assertions in `lighthouserc.cjs` are `error`, set just below the observed scores.
They are a ratchet: raise them as scores improve, do not lower them to make a
build pass.

### Fonts

Self-hosted, woff2 only, and declared without `local()` so every machine renders
the same file. Adding a font means adding the woff2 to `public/fonts/`, an
`@font-face` in `src/app/globals.css`, and a preload in `src/app/layout.tsx` only
if it is needed above the fold.

## SEO & Anti-AI Scraping

This site implements comprehensive SEO optimization with anti-AI training protection.

### Implementation

- **[robots.txt](public/robots.txt)** — Blocks AI crawlers (OpenAI, Anthropic, Google Extended, CCBot, etc.)
- **[sitemap.xml](public/sitemap.xml)** — Generated by `pnpm generate:sitemap`. Output is a pure function of the route list (no `lastmod`), so it only changes when routes do.
- Pre-push hook reruns `pnpm generate:sitemap` **only when pushing the `release` branch** and blocks the push if `public/sitemap.xml` changes. A diff there means a route was added or removed without committing the sitemap. A matching GitHub workflow enforces the same rule on PRs targeting `release`.
- **Schema.org JSON-LD** — `generatePersonStructuredData()` in [src/utils/metadata.ts](src/utils/metadata.ts), rendered by [src/app/layout.tsx](src/app/layout.tsx) and escaped through `serializeJsonLd`
- **OpenGraph & Twitter Cards** — Social media metadata via [src/utils/metadata.ts](src/utils/metadata.ts)
- **Anti-AI Meta Tags** — one `<meta name="robots">` built from `ROBOTS_DIRECTIVES`, plus an `ai-policy` tag. Setting Next's `robots` field as well would emit a second, contradictory tag.
- **Footer Legal Notice** — [src/components/Footer.tsx](src/components/Footer.tsx)

### Verification

Test robots.txt and sitemap are accessible:

```bash
curl https://marcotoniut.github.io/robots.txt
curl https://marcotoniut.github.io/sitemap.xml
```

### Limitations

- **GitHub Pages doesn't support HTTP headers** — so [next.config.mts](next.config.mts) declares no `headers()`; with `output: "export"` Next would silently drop them anyway
- Controls with a meta equivalent (robots directives, `Referrer-Policy`) are set in [src/app/layout.tsx](src/app/layout.tsx); header-only ones (`X-Content-Type-Options`, `Permissions-Policy`, `Content-Signal`) are unavailable on this host
- Cannot block non-compliant bots that ignore `robots.txt`; anything rendered into the HTML, including CV contact details, is readable by any scraper

### Blocked Crawlers

GPTBot, ChatGPT-User, Google-Extended, ClaudeBot, CCBot, PerplexityBot, FacebookBot, Bytespider, cohere-ai, Diffbot, omgili

## Deployment

Deploy to GitHub Pages:

```bash
# Push or merge to the release branch
git push origin release
```

The GitHub Actions workflow (`Deploy Next.js site to Pages`) runs automatically on the `release` branch, building the static export and publishing it to Pages with the environment-provided analytics credentials.

The site is available at [https://marcotoniut.github.io](https://marcotoniut.github.io)
