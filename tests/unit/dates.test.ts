import { describe, expect, it } from "vitest"
import { formatMonthYear } from "@/i18n/dates"

describe("formatMonthYear", () => {
  it("abbreviates the month in the page's language", () => {
    expect(formatMonthYear(new Date(2023, 9), "en")).toBe("Oct 2023")
    expect(formatMonthYear(new Date(2023, 9), "es")).toBe("oct 2023")
    expect(formatMonthYear(new Date(2016, 8), "es")).toBe("sept 2016")
  })

  it("rejects an invalid date instead of printing NaN", () => {
    expect(() => formatMonthYear(new Date("2023-13"), "en")).toThrow(
      "Cannot format an invalid date: Invalid Date",
    )
  })
})
