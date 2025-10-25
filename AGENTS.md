# AI Agent Handbook

This repository supports a small team of AI assistants. Use this guide to keep hand-offs smooth and to make sure every agent leans on the right source of truth.

## Purpose

- Clarify who owns which type of task.
- Point every agent to the right canonical document.
- Reduce duplicate effort between Codex, Claude, and the human maintainers.

## Primary Roles

- **Codex (GPT-5)** – Implements code changes, runs local tooling, and keeps the workspace tidy. Codex should default to `README.md` for project orientation and `CONTRIBUTING.md` for guardrails and command references.
- **Claude** – Provides design feedback, documentation polish, architectural review, and product framing. Claude leans on this document plus `CLAUDE.md` for agent-specific instructions.
- **Maintainers** – Set direction and make final calls. Agents flag uncertainties early rather than guessing.

## Collaboration Flow

1. **Confirm scope** – Re-read the user request and check whether the answer already exists in `README.md` or `DEVELOPMENT.md`.
2. **Select the driver** – Coding or build tasks default to Codex. Narrative, planning, or cross-file documentation tasks default to Claude unless the user explicitly assigns them.
3. **Share context** – Leave concise notes for the next agent (files touched, open questions, test status).
4. **Verify before hand-off** – Run the relevant commands (`pnpm lint`, `pnpm typecheck`, `pnpm build`) when the sandbox allows it. Document any gaps when verification is impossible.
5. **Escalate quickly** – If a request conflicts with project guardrails in `DEVELOPMENT.md`, ask the maintainers before proceeding.

## Document Map

- **Project overview** – `README.md`
- **Development guide** – `DEVELOPMENT.md`
- **Claude-specific notes** – `CLAUDE.md`

Keep this file short; place detailed agent behaviours in the dedicated agent documents.

## Communication Norms

- Be candid about uncertainties and assumptions.
- Reference files with relative paths and line numbers using markdown link syntax like `[src/app/page.tsx:42](src/app/page.tsx#L42)`.
- Prefer actionable suggestions over vague observations.
- Preserve prior agent decisions unless the maintainer explicitly overrides them.
