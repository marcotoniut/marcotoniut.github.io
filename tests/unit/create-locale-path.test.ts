import { describe, expect, it } from "vitest"
import { createLocalePath } from "@/utils/locale"

describe("createLocalePath", () => {
  it("replaces locale segment in a simple path", () => {
    expect(createLocalePath("/en/cv", "es")).toBe("/es/cv")
  })

  it("replaces locale in a nested path", () => {
    expect(createLocalePath("/en/projects/carcinisation", "es")).toBe(
      "/es/projects/carcinisation",
    )
  })

  it("returns /{newLocale} when no locale segment found", () => {
    expect(createLocalePath("/unknown/path", "en")).toBe("/en")
  })

  it("returns /{newLocale} for root path", () => {
    expect(createLocalePath("/", "es")).toBe("/es")
  })

  it("returns /{newLocale} for empty path", () => {
    expect(createLocalePath("", "en")).toBe("/en")
  })

  it("preserves deeper path segments", () => {
    expect(createLocalePath("/es/projects/sonicthames", "en")).toBe(
      "/en/projects/sonicthames",
    )
  })
})
