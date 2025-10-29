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
   During hand-offs, summarize clearly: files touched or created, outstanding questions or verification steps, and any key decisions or trade-offs.
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

## Quality Checks

Before marking any task complete or handing it off:

- Linting (`pnpm lint`) passes or documented why it could not run.
- Type safety (`pnpm typecheck`) succeeds with no outstanding errors.
- Build (`pnpm build`) finishes without warnings that need action.
- Key functionality and UI flows that were touched behave as expected.
- Documentation and comments reflect the implemented behavior.
- Any skipped verifications are explicitly recorded for the next agent.

No hand-off should proceed with failing checks or unresolved doubts.

---

## Document Map

- Project overview – `README.md`
- Development guide and contribution workflow – `DEVELOPMENT.md`
- Claude-specific notes – `CLAUDE.md`

Refer to other files (e.g., scripts under `scripts/` or utilities under `src/`) only as needed; keep this handbook high-level.

---

## MCP Tool Discovery

To discover available MCP servers and their capabilities programmatically:

```bash
pnpm mcp:discover
```

This script reads `.mcp.json` and lists all configured MCP servers, their capabilities, and configuration details.

### Playwright MCP

Two Playwright MCP servers are configured:
- `playwright` (headless) – Default for automated testing, no visible browser
- `playwright-headed` (visible) – For debugging when you need to see browser interactions

**Test server**: Run `pnpm dev:test` to start the application on port 4747 for testing.

**Tool naming**: In Claude Code, tools are prefixed as `mcp__<server>__<capability>`. For example: `mcp__playwright__browser_navigate` or `mcp__playwright-headed__browser_snapshot`.

**Configuration**: Both servers use 1920×1080 viewport with 10s/30s action/navigation timeouts. Screenshots and traces save to `.playwright-mcp/` (gitignored).

For full server options, run `pnpm exec mcp-server-playwright --help`.

## Communication Norms

- Be explicit about assumptions and uncertainties.
- Reference files with relative links, e.g. `[src/app/page.tsx:42](src/app/page.tsx#L42)`.
- Keep hand-offs concise but complete, including verification status.
- Suggest concrete next steps rather than vague impressions.
- Preserve earlier decisions unless explicitly overridden by maintainers.
- Maintain a factual, concise tone without anthropomorphic language.
