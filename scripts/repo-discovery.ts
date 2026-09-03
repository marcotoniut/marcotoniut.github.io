#!/usr/bin/env tsx

/**
 * Prints repository discovery metadata for agents as minified JSON on stdout.
 *
 * Derived from source on every run, never cached: ports come from the actual
 * package.json scripts and Playwright config, routes from the same registry
 * the sitemap uses. Restating these in docs is how AGENTS.md ended up naming
 * ports no script listened on.
 */

import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { LOCALIZED_ROUTES, UNLOCALIZED_ROUTES } from "../src/config/routes"
import { siteConfig } from "../src/config/site"
import { baseLocale, locales } from "../src/i18n/i18n-util"

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
)

type PackageJson = {
  name?: string
  scripts?: Partial<Record<string, string>>
}

const toRoutePath = (...segments: string[]) => {
  const joined = segments.filter(Boolean).join("/")
  return `/${joined ? `${joined}/` : ""}`
}

const collectPorts = (scripts: Partial<Record<string, string>>) => {
  const ports: Record<string, number> = {}
  for (const [name, command] of Object.entries(scripts)) {
    const match = command?.match(/-p (\d+)/)
    if (match?.[1]) {
      ports[name] = Number.parseInt(match[1], 10)
    }
  }

  const playwrightConfig = readFileSync(
    path.resolve(repoRoot, "tests/e2e/playwright.config.ts"),
    "utf8",
  )
  const playwrightPort = playwrightConfig.match(
    /PLAYWRIGHT_PORT"\] \?\? "(\d+)"/,
  )
  if (playwrightPort?.[1]) {
    ports["test:e2e"] = Number.parseInt(playwrightPort[1], 10)
  }

  return ports
}

export const buildDiscovery = () => {
  const pkg = JSON.parse(
    readFileSync(path.resolve(repoRoot, "package.json"), "utf8"),
  ) as PackageJson
  const scripts = pkg.scripts ?? {}

  return {
    version: 1,
    repo: {
      name: pkg.name ?? "unknown",
      baseUrl: siteConfig.baseUrl,
      description: siteConfig.description,
      deploy: "merge to `release`; GitHub Pages serves the static export",
    },
    locales: { all: [...locales], base: baseLocale },
    routes: [
      ...UNLOCALIZED_ROUTES.map((route) => toRoutePath(route.path)),
      ...locales.flatMap((locale) =>
        LOCALIZED_ROUTES.map((route) => toRoutePath(locale, route.path)),
      ),
    ],
    ports: collectPorts(scripts),
    gates: {
      full: "pnpm check",
      chain:
        scripts["check"]
          ?.split(" && ")
          .map((step) => step.replace(/^pnpm /, ""))
          .filter(Boolean) ?? [],
      e2e: ["test:a11y", "test:visual"].filter((name) => scripts[name]),
    },
    scopes: {
      "app routes": "src/app/",
      components: "src/components/",
      i18n: "src/i18n/ (sources; i18n-* files are generated)",
      styles: "src/styles/",
      config: "src/config/",
      utils: "src/utils/",
      "unit tests": "tests/unit/",
      "e2e tests": "tests/e2e/",
      ci: ".github/workflows/",
      scripts: "scripts/",
    },
    facts: [
      "e2e suites serve out/, so run `pnpm build` before test:a11y or test:visual",
      "`pnpm generate` produces src/i18n/i18n-*; a fresh clone fails checks without it",
      "`next dev` re-adds a managed block to AGENTS.md when an agent is detected",
      "the sitemap regenerates on build and must be committed when routes change",
    ],
  }
}

const HELP = `Prints repository discovery metadata as minified JSON: routes,
ports, gates, scopes, and facts agents trip on. Derived from source on every
run; pipe through \`jq\` to pretty it.

Use: pnpm discover
`

const main = () => {
  const args = process.argv.slice(2)
  if (args.length > 0) {
    if (args[0] === "--help" || args[0] === "-h") {
      process.stdout.write(HELP)
      return
    }
    process.stderr.write("Use: pnpm discover\n")
    process.exitCode = 1
    return
  }
  process.stdout.write(`${JSON.stringify(buildDiscovery())}\n`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}
