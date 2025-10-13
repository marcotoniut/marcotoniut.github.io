# Contributing to marcotoniut.github.io

This document describes how to land changes safely.

## Local Setup

1. Install [pnpm](https://pnpm.io/) (use the version recorded in `package.json`).
2. Install dependencies: `pnpm install`.
3. Start development: `pnpm dev`. This launches Next.js alongside the translation watcher so locale files stay up to date during edits.

## Pre-PR Checklist

Run each step from the repository root and ensure it succeeds. If a step is skipped or fails, state why in the pull request and link any follow-up issue.

1. `pnpm format && pnpm lint && pnpm typecheck`
2. `pnpm build`
3. `pnpm generate` after adding or editing translation keys.
4. `pnpm print-cv` whenever CV content, layout, or print styles change (requires Chrome—see the README instructions).
5. Update docs or inline comments when behaviour changes.

## Automation & Agent Notes

- Execute the commands above exactly; avoid shell tricks that hide non-zero exits.
- Summarise the commands you ran and their results in the PR description or review comment.
- Call out any sandbox or permission blockers rather than omitting required checks.

## Useful Scripts

```bash
pnpm dev          # Next.js dev server with translation watcher
pnpm build        # Production build for GitHub Pages
pnpm format       # Biome formatter
pnpm lint         # Biome linting
pnpm typecheck    # TypeScript project-wide type checking
pnpm generate     # Regenerate typesafe-i18n definitions
pnpm print-cv     # Export the printable CV PDF (requires Chrome)
```

Automated tests are not yet in place. When you touch non-trivial logic, describe the manual or scripted verification you performed.

## Git Workflow

1. Branch from `main` (e.g. `git checkout -b feature/update-cv`).
2. Keep commits focused; squash noisy WIP commits before opening the PR.
3. Provide a concise PR summary, mention visual impact, and attach screenshots for UI changes.

## Commit Style

- **Title**: ≤50 characters, imperative mood, no trailing punctuation.
- **Body**: Capture the intent and outcome—the diff already shows implementation details.

```
✅ update hero cards copy
✅ fix pdf export locale detection
❌ update some stuff and tidy up
```

```
✅ ensure translations build before dev

Prevents missing locale types on fresh installs by regenerating before starting Next.js.
```

## Review Notes

- Use functional React components and colocate Vanilla Extract styles in the matching `*.css.ts`.
- Add translation keys to the base language first, run `pnpm generate`, then update the other locales.
- When editing public-facing content or CV data, verify both English and Spanish variants.
- Leave short inline comments for non-obvious layout or print-specific decisions to aid future reviewers.

### Logging

- `console.debug` for verbose development-only details (disabled in production builds).
- `console.info` for major lifecycle events (loading assets, navigation transitions).
- `console.warn` for recoverable anomalies.
- `console.error` for failures that need follow-up or bug reports.

## Questions?

Open an issue or start a discussion before large refactors or architectural changes. Collaboration is welcome.
