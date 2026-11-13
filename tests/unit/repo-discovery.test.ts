import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { z } from "zod"
import { buildDiscovery } from "../../scripts/repo-discovery"

const discovery = buildDiscovery()

describe("repo discovery", () => {
  it("lists exactly the routes the sitemap publishes", () => {
    const sitemap = readFileSync(
      resolve(import.meta.dirname, "../../public/sitemap.xml"),
      "utf-8",
    )
    const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map(([, loc = ""]) => loc.replace(discovery.repo.baseUrl, ""))
      .sort((a, b) => a.localeCompare(b))

    expect([...discovery.routes].sort((a, b) => a.localeCompare(b))).toEqual(
      sitemapPaths,
    )
  })

  it("derives every dev port from package.json scripts", () => {
    const pkg = z
      .object({ scripts: z.record(z.string(), z.string()) })
      .parse(
        JSON.parse(
          readFileSync(
            resolve(import.meta.dirname, "../../package.json"),
            "utf-8",
          ),
        ),
      )

    for (const [name, command] of Object.entries(pkg.scripts)) {
      const match = command.match(/-p (\d+)/)
      if (match?.[1]) {
        expect(discovery.ports[name], name).toBe(Number.parseInt(match[1], 10))
      }
    }
    expect(discovery.ports["test:e2e"]).toBeGreaterThan(0)
  })

  it("reports the full gate chain", () => {
    expect(discovery.gates.chain).toEqual([
      "generate",
      "lint",
      "typecheck",
      "spellcheck",
      "test",
      "build",
    ])
  })

  it("expands routes for every locale", () => {
    for (const locale of discovery.locales.all) {
      expect(discovery.routes).toContain(`/${locale}/`)
      expect(discovery.routes).toContain(`/${locale}/cv/`)
    }
  })
})
