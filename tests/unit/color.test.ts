import { describe, expect, it } from "vitest"
import { withAlpha } from "@/utils/color"

describe("withAlpha", () => {
  it("produces a color-mix expression with correct percentage", () => {
    expect(withAlpha("#ff0000", 0.5)).toBe(
      "color-mix(in srgb, #ff0000 50%, transparent)",
    )
  })

  it("rounds fractional percentages", () => {
    expect(withAlpha("red", 0.333)).toBe(
      "color-mix(in srgb, red 33%, transparent)",
    )
  })

  it("handles 0 alpha", () => {
    expect(withAlpha("black", 0)).toBe(
      "color-mix(in srgb, black 0%, transparent)",
    )
  })

  it("handles 1.0 alpha (fully opaque)", () => {
    expect(withAlpha("white", 1)).toBe(
      "color-mix(in srgb, white 100%, transparent)",
    )
  })

  it("works with CSS custom properties", () => {
    expect(withAlpha("var(--color-accent)", 0.2)).toBe(
      "color-mix(in srgb, var(--color-accent) 20%, transparent)",
    )
  })
})
