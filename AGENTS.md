# Agent Guidelines

Code defines reality; this document sets policy.

## Discovery

- `pnpm discover` outputs routes, ports, gates, scopes, and repo facts as JSON, derived from source on every run.
- Check `DEVELOPMENT.md` for workflow, commands, and conventions. Skip both for simple Q&A.

## Communication

- Default to terse: no preamble or hedging, full sentences, code and error strings verbatim. Expand where brevity risks misunderstanding.
- Progress updates: 1-2 sentences. Final summary: files changed, checks run with status, residual risks.

## Validation

- Run `pnpm check` before completion. On failure, fix only the reported failures and rerun the same command until green.
- E2E suites need `pnpm build` first. Headless only; no manual browser windows.
- If skipping a required check, say why and what remains.

## Collaboration

- Single driver: one agent edits at a time. Maintainers make final calls; flag uncertainty early.

## Constraints

- Prefer explicit failure over silent fallback.
- Ask questions only when ambiguity changes behaviour, architecture, or scope.
- Use `git mv` for tracked renames. Conventional Commits with scope (see `DEVELOPMENT.md`). No `Co-Authored-By` lines.
- Do not rename, add, or delete `.env` or config variables without explicit approval.
- Stop dev servers and watchers before handoff unless asked otherwise.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
