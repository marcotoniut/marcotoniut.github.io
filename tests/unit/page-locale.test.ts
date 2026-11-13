import { describe, expect, it } from "vitest"
import { localeOf, localizedPath } from "@/i18n/page-locale"
import onBeforeRender from "@/pages/+onBeforeRender"
import { localizedUrls } from "@/utils/locale"

describe("localeOf", () => {
  it("uses the base locale for unprefixed pages", () => {
    expect(localeOf({ routeParams: {} })).toBe("en")
  })

  it("reads the @lang route segment", () => {
    expect(localeOf({ routeParams: { lang: "es" } })).toBe("es")
  })

  it("rejects a page context that lost its route params", () => {
    expect(() => localeOf({})).toThrow(
      "The page context reached the browser without routeParams",
    )
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

describe("onBeforeRender", () => {
  it("gives every page its route path for the head and language links", () => {
    expect(
      onBeforeRender({
        routeParams: { lang: "es" },
        urlPathname: "/es/projects/carcinisation/",
      }),
    ).toEqual({ pageContext: { routePath: "projects/carcinisation" } })
  })
})
