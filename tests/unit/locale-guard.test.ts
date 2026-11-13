import { render } from "vike/abort"
import { describe, expect, it } from "vitest"
import guard from "@/pages/@lang/+guard"

describe("locale route guard", () => {
  it("lets supported locales through", () => {
    expect(() => guard({ routeParams: { lang: "es" } })).not.toThrow()
  })

  it("renders the 404 page for any other segment", () => {
    let thrown: unknown
    try {
      guard({ routeParams: { lang: "fr" } })
    } catch (error) {
      thrown = error
    }
    expect(thrown).toEqual(render(404))
    expect(thrown).not.toEqual(render(500))
  })
})
