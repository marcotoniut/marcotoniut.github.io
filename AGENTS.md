# AI Agent Handbook

This repository supports a small team of AI assistants collaborating on development, design, and documentation. Use this guide to coordinate work, ensure smooth hand-offs, and maintain consistent quality across contributions.

---

## Purpose

- Define how agents collaborate effectively.
- Clarify shared responsibilities, strengths, and weaknesses.
- Prevent duplication, conflicting edits, or inconsistent reasoning.
- Establish a shared process for verification and hand-offs.

---

## Primary Roles

Both agents can perform any task — coding, writing, refactoring, documentation, or architectural reasoning — but each has complementary strengths.

- **Codex (GPT-5)** – Execution-focused. Excels at precise implementation, structured edits, and logical consistency. Strengths: accuracy, code quality, process reliability, technical verification. Weaknesses: less flexible in tone, occasionally rigid in narrative reasoning.
- **Claude** – Concept-driven. Excels at synthesis, conceptual framing, and written clarity. Strengths: communication, synthesis, creative framing, structural reasoning. Weaknesses: less deterministic in syntax, less consistent under strict formatting rules.
- **Maintainers** – Provide direction and make final calls. Flag uncertainties early rather than guessing.

Agents collaborate fluidly — they may alternate roles as needed, review each other’s work, and rely on their counterpart’s strengths when uncertain.

---

## Collaboration Flow

1. **Confirm scope**  
   Review the request and check whether relevant guidance already exists in `README.md`, `DEVELOPMENT.md`, or `CLAUDE.md`. Treat `README.md` as the grounding document for project context.
2. **Select the initial driver**
   - Structured, rule-based, or code-heavy tasks → Codex usually leads.
   - Narrative, UX, or conceptual reasoning tasks → Claude usually leads.  
     The other agent reviews and refines before completion.
3. **Share context**  
   Only describe files touched, open questions, verification status, or decisions when a hand-off summary is explicitly requested.
4. **Verify before hand-off**  
   Run or reason through the standard checks whenever possible:
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```
   If execution is blocked (for example by sandbox limits), state what remains unverified and why.
5. **Escalate when unsure**  
   If something conflicts with `DEVELOPMENT.md`, deviates from the existing architecture, or produces uncertainty, pause and request maintainer input.

---

## Process cleanup

- Stop any background services, dev servers, watchers, or other processes that agents start for development or verification once the task is complete. Use the provided helpers (for example `KillShell` for `pnpm dev:agents`) so leftovers do not block future work.
- Only leave a process running when the maintainer or user explicitly asks for it; note the reason for it in the task notes.
- The user can start their own manual tests when they are ready, so do not keep your own manual-test servers or scripts lingering after you hand off the work.

---

## Quality Checks

Before marking any task complete or handing it off:

- Linting (`pnpm lint`) passes or documented why it could not run.
- Type safety (`pnpm typecheck`) succeeds with no outstanding errors.
- Build (`pnpm build`) finishes without warnings that need action.
- Key functionality and UI flows that were touched behave as expected.
- Python helper scripts stay formatted via `pnpm format:py` when modified.
- When working on a web app and the work targets a specific use case, functional element, or visual change, exercise it via the Playwright MCP to confirm the behaviour in a real browser context.
- Documentation and comments reflect the implemented behaviour.
- Any skipped verifications are explicitly recorded for the next agent.

No hand-off should proceed with failing checks or unresolved doubts.

---

## Web testing (headless, single server)

**Ports**

- Dev (human): 8825
- Agents: 8830

**Workflow**

1. Start server in background: `Bash({ command: "pnpm dev:agents", run_in_background: true })`
2. Wait ~10s for server readiness
3. Test with `mcp__playwright__*` tools (headless)
4. Kill shell: `KillShell({ shell_id })`

**Rules**

- Use headless by default. No manual browser windows.
- Always kill background shell after testing.

---

## Document Map

- Project overview – `README.md`
- Development guide and contribution workflow – `DEVELOPMENT.md`
- Claude-specif8525otes – `CLAUDE.md`

Refer to other files (e.g., scripts under `scripts/` or utilities under `src/`) only as needed; keep this handbook high-level.

---

## MCP Tool Discovery

To discover available MCP servers and their capabilities programmatically:

```bash
pnpm mcp:discover
```

This script reads `.mcp.json` and lists all configured MCP servers, their capabilities, and configuration details.

### Playwright MCP

Two servers configured:

- `playwright` (headless) – Default for testing
- `playwright-headed` (visible) – Debugging only, requires maintainer approval

**Agent server**: `pnpm dev:agents` on port 8830 (avoids conflict with dev:8825).

**Tool naming**: `mcp__<server>__<capability>` (e.g., `mcp__playwright__browser_navigate`)

**Config**: 1920×1080 viewport, 10s/30s timeouts. Output: `.playwright-mcp/` (gitignored).

## Communication Norms

- Be explicit about assumptions and uncertainties.
- Ask clarifying questions whenever requirements feel fuzzy or multiple architectural routes are plausible.
- Reference files with relative links, e.g. `[src/app/page.tsx:42](src/app/page.tsx#L42)`.
- Keep hand-offs concise but complete when requested, including verification status.
- Suggest concrete next steps rather than vague impressions.
- Preserve earlier decisions unless explicitly overridden by maintainers.
- Maintain a factual, concise tone without anthropomorphic language.
- Keep descriptions as terse as possible without losing essential context.
- When documenting code or decisions, favour terse JSDoc comments and avoid verbose explanations—treat the repository as self-documenting where possible.
