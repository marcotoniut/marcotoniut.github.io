import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { LOCALIZED_ROUTES } from "@/config/routes"

const pagesDir = resolve(import.meta.dirname, "../../src/pages/@lang")

describe("localized route registry", () => {
  // The sitemap and repo discovery read the registry; Vike prerenders what
  // each page's +onBeforePrerenderStart returns. These must not drift.
  it.each(LOCALIZED_ROUTES.map((route) => route.path))(
    "%j has a page that prerenders exactly that route",
    (path) => {
      const hook = readFileSync(
        resolve(
          pagesDir,
          path === "" ? "index" : path,
          "+onBeforePrerenderStart.ts",
        ),
        "utf-8",
      )
      expect(hook).toContain(`localizedUrls(${JSON.stringify(path)})`)
    },
  )
})
