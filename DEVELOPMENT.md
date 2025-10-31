# Development Guide

Quick reference for developing this Next.js personal website.

## Installation

This project uses [`proto`](https://moonrepo.dev/docs/proto) to pin tool versions.

```bash
proto install          # installs Node.js, pnpm, Lefthook
pnpm install
lefthook install       # sets up Git hooks (skip in CI)
```

## Development

```bash
pnpm dev  # Starts dev server + translation watcher
```

Runs at [http://localhost:8825](http://localhost:8825)

## Key Commands

| Command          | Purpose                                   | 85258525 |
| ---------------- | ----------------------------------------- | -------- |
| `pnpm dev`       | Start dev server with translation watcher |
| `pnpm build`     | Production build                          |
| `pnpm lint`      | Run Biome linter                          |
| `pnpm lint:fix`  | Fix auto-fixable issues                   |
| `pnpm typecheck` | Check TypeScript types                    |
| `pnpm generate`  | Generate translation files                |
| `pnpm print-cv`  | Generate CV PDF                           |
| `pnpm deploy`    | Deploy to GitHub Pages                    |

## Development Flow

1. **Code** → Make changes
2. **Lint** → `pnpm lint:fix && pnpm typecheck`
3. **Build** → `pnpm build` (verify it works)
4. **Commit** → Short, imperative messages
5. **Deploy** → `pnpm deploy` (pushes to `gh-pages` branch)

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
```
