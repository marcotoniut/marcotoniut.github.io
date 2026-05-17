import { describe, expect, it } from "vitest"
import { buildLocalizedHref } from "@/utils/locale"

describe("buildLocalizedHref", () => {
  it("builds a locale-only path", () => {
    expect(buildLocalizedHref("en")).toBe("/en/")
  })

  it("appends a path suffix", () => {
    expect(buildLocalizedHref("en", "cv")).toBe("/en/cv/")
  })

  it("strips leading slashes from suffix", () => {
    expect(buildLocalizedHref("es", "/contact")).toBe("/es/contact/")
  })

  it("strips trailing slashes from suffix", () => {
    expect(buildLocalizedHref("en", "cv/")).toBe("/en/cv/")
  })

  it("strips both leading and trailing slashes", () => {
    expect(buildLocalizedHref("en", "/projects/carcinisation/")).toBe(
      "/en/projects/carcinisation/",
    )
  })

  it("handles empty suffix same as no suffix", () => {
    expect(buildLocalizedHref("en", "")).toBe("/en/")
  })
})
