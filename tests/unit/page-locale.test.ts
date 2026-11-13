import { describe, expect, it } from "vitest"
import { localeOf, localizedPath } from "@/i18n/page-locale"
import { localizedUrls } from "@/utils/locale"

describe("localeOf", () => {
  it("uses the base locale for unprefixed pages", () => {
    expect(localeOf({ routeParams: {} })).toBe("en")
  })

  it("reads the @lang route segment", () => {
    expect(localeOf({ routeParams: { lang: "es" } })).toBe("es")
  })

  it("rejects a segment the guard should have turned away", () => {
    expect(() => localeOf({ routeParams: { lang: "fr" } })).toThrow(
      "Unsupported locale route segment: fr",
    )
  })
})

describe("localizedPath", () => {
  it("drops the locale prefix", () => {
    expect(
      localizedPath({
        routeParams: { lang: "es" },
        urlPathname: "/es/projects/sonicthames/",
      }),
    ).toBe("projects/sonicthames")
  })

  it("keeps unprefixed paths whole", () => {
    expect(localizedPath({ routeParams: {}, urlPathname: "/cv/" })).toBe("cv")
    expect(localizedPath({ routeParams: {}, urlPathname: "/" })).toBe("")
  })
})

describe("localizedUrls", () => {
  it("lists a route once per locale with a trailing slash", () => {
    expect(localizedUrls("cv")).toEqual(["/en/cv/", "/es/cv/"])
    expect(localizedUrls("")).toEqual(["/en/", "/es/"])
  })
})
