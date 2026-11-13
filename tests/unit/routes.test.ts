import { describe, expect, it } from "vitest"
import { LOCALIZED_ROUTES } from "@/config/routes"
import { locales } from "@/i18n/i18n-util"
import { buildLocalizedHref } from "@/utils/locale"

// The sitemap and repo discovery read the registry; Vike prerenders what
// each page's +onBeforePrerenderStart returns. These must not drift.
const prerenderHooks = import.meta.glob<{ default: () => string[] }>(
  "/src/pages/@lang/**/+onBeforePrerenderStart.ts",
  { eager: true },
)

function routeOf(file: string): string {
  const dir = file
    .replace("/src/pages/@lang/", "")
    .replace("/+onBeforePrerenderStart.ts", "")
  return dir === "index" ? "" : dir
}

describe("localized route registry", () => {
  it("has exactly one prerendering page per route", () => {
    const byPath = (a: string, b: string) => a.localeCompare(b)
    expect(Object.keys(prerenderHooks).map(routeOf).toSorted(byPath)).toEqual(
      LOCALIZED_ROUTES.map((route) => route.path).toSorted(byPath),
    )
  })

  it.each(Object.entries(prerenderHooks))(
    "%s prerenders its route in every locale",
    (file, hook) => {
      expect(hook.default()).toEqual(
        locales.map((locale) => buildLocalizedHref(locale, routeOf(file))),
      )
    },
  )
})
