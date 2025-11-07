# Development Guide

Quick reference for developing this Next.js personal website.

## Installation

This project uses [`proto`](https://moonrepo.dev/docs/proto) to pin tool versions.

```bash
proto install          # installs Node.js, pnpm, Lefthook, Ruff
pnpm install
lefthook install       # sets up Git hooks (skip in CI)
```

## Development

```bash
pnpm dev  # Starts dev server + translation watcher
```

Runs at [http://localhost:8825](http://localhost:8825)

## Key Commands

| Command          | Purpose                                   |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Start dev server with translation watcher |
| `pnpm build`     | Production build                          |
| `pnpm lint`      | Run Biome linter                          |
| `pnpm lint:fix`  | Fix auto-fixable issues                   |
| `pnpm typecheck` | Check TypeScript types                    |
| `pnpm generate`  | Generate translation files                |
| `pnpm print-cv`  | Generate CV PDF                           |
| `pnpm format:py` | Format Python CI helpers with Ruff        |
| `pnpm format:py:check` | Check Python formatting (CI parity) |
| `pnpm deploy`    | Reminder: deployments run on `release`    |

## Development Flow

1. **Code** → Make changes
2. **Lint** → `pnpm lint:fix && pnpm typecheck`
3. **Build** → `pnpm build` (verify it works)
4. **Commit** → Short, imperative messages
5. **Deploy** → merge to `release` (deployment workflow runs automatically)

## Key Concepts

### Translations

- Source files: `src/i18n/`
- Auto-generated during `pnpm dev`
- Manual regeneration: `pnpm generate`
- Uses `typesafe-i18n` for type safety

### CV PDF Generation

- Route: `/cv` (print-optimized page)
- Script: `scripts/print-cv.js`
- Output: `local/Marco Toniut (CV).pdf`
- Requires Chrome: `npx puppeteer browsers install chrome`

### Styling

- Uses Vanilla Extract (`.css.ts` files)
- Colocated with components
- Type-safe CSS-in-JS

### Tech Stack

- **Framework:** Next.js 16 (App Router)
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
pnpm lint:fix && pnpm typecheck && pnpm build
pnpm format:py
```

Run `pnpm format:py:check` (or rely on CI) whenever Python helper scripts change; Ruff is installed via `proto` for consistent local/CI formatting.

## SEO & Anti-AI Scraping

This site implements comprehensive SEO optimization with anti-AI training protection.

### Implementation

- **[robots.txt](public/robots.txt)** — Blocks AI crawlers (OpenAI, Anthropic, Google Extended, CCBot, etc.)
- **[sitemap.xml](public/sitemap.xml)** — Auto-generated on build via `pnpm generate:sitemap`
- **Schema.org JSON-LD** — Structured data in [src/app/layout.tsx](src/app/layout.tsx#L70-L94)
- **OpenGraph & Twitter Cards** — Social media metadata via [src/utils/metadata.ts](src/utils/metadata.ts)
- **Anti-AI Meta Tags** — `noai`, `noimageai`, `nocontentai` in page metadata
- **Footer Legal Notice** — [src/components/Footer.tsx](src/components/Footer.tsx)

### Verification

Test robots.txt and sitemap are accessible:

```bash
curl https://marcotoniut.github.io/robots.txt
curl https://marcotoniut.github.io/sitemap.xml
```

### Limitations

- **GitHub Pages doesn't support HTTP headers** — Headers configured in [next.config.js](next.config.js) are ignored on static hosting
- Meta tags provide equivalent protection for compliant crawlers
- Cannot block non-compliant bots that ignore `robots.txt`

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
