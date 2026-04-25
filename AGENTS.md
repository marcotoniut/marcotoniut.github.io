# Agent Guidelines

Keep this file thin. Code and docs are source of truth.

## Preflight

Read only what task needs:

- `DEVELOPMENT.md` before build, lint, or dev workflow questions.
- `README.md` for project context.

Skip preflight for simple Q&A, one-off shell asks, or doc/review work.

## Communication

- Default to `caveman`.
- Use normal style when brevity risks misunderstanding.
- Progress updates: 1-2 sentences.
- Do not repeat plans after execution starts.
- Final summary: files changed, checks run + status, residual risks / next actions.

## Collaboration

- Two agents: **Codex** (execution-focused) and **Claude** (concept-driven). Either can lead; the other reviews.
- **Maintainers** make final calls. Flag uncertainties early.
- Single-driver: one agent edits at a time.
- Escalate if change spans architecture or conflicts with `DEVELOPMENT.md`.

```md
## Handoff

- Scope touched:
- Files changed:
- Validation run:
- Validation not run (reason):
- Risks / edge cases:
- Next owner:
```

```md
## Review

- Must fix:
- Should fix:
- Nice to have:
- Approval: Approved | Not approved
```

## Validation

Before completion, run required checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

- On failure, fix reported failures; rerun same command until green.
- Do not jump to broader checks before failing command passes.
- If skipping a required check, say why and what remains.
- Python scripts: format via `pnpm format:py` when modified.

## Web Testing

**Ports**: Dev (human) 8825 | Agents 8830

**Workflow**:
1. `Bash({ command: "pnpm dev:agents", run_in_background: true })`
2. Wait ~10s for readiness.
3. Test with `mcp__playwright__*` tools (headless).
4. Kill shell after testing.

Headless by default. No manual browser windows.

## Constraints

- Prefer explicit failure over silent fallback.
- Ask questions only when ambiguity changes behavior, architecture, or scope.
- Keep docs/comments terse. Repo is self-documenting where possible.
- Use `git mv` for tracked renames.
- Do not add `Co-Authored-By` lines to commit messages.
- Stop dev servers/watchers before handoff unless user asks otherwise.
- Do not rename/add/delete `.env` or config variables without explicit approval.
