import { describe, expect, it } from "vitest"
import { createLocaleCopy } from "@/i18n/helpers"

describe("createLocaleCopy", () => {
  const copies = { en: { greeting: "Hello" }, es: { greeting: "Hola" } }
  const getCopy = createLocaleCopy(copies)

  it("returns the correct copy for a known locale", () => {
    expect(getCopy("en")).toEqual({ greeting: "Hello" })
    expect(getCopy("es")).toEqual({ greeting: "Hola" })
  })

  it("falls back to base locale for unknown locale", () => {
    // Force an unknown locale through the type system
    const result = getCopy("fr" as "en")
    expect(result).toEqual({ greeting: "Hello" })
  })

  it("returns the same reference for same locale", () => {
    expect(getCopy("en")).toBe(copies.en)
  })
})
