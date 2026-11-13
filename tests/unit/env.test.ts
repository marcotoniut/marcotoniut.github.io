import { describe, expect, it } from "vitest"
import { envSchema } from "@/env"

describe("env schema", () => {
  it("accepts empty env (all optional)", () => {
    const result = envSchema.safeParse({})
    expect(result.success).toBe(true)
  })

  it("transforms PDF_PRINTING 'true' to boolean true", () => {
    const result = envSchema.parse({
      PUBLIC_ENV__PDF_PRINTING: "true",
    })
    expect(result.PUBLIC_ENV__PDF_PRINTING).toBe(true)
  })

  it("transforms PDF_PRINTING 'false' to boolean false", () => {
    const result = envSchema.parse({
      PUBLIC_ENV__PDF_PRINTING: "false",
    })
    expect(result.PUBLIC_ENV__PDF_PRINTING).toBe(false)
  })

  it("transforms missing PDF_PRINTING to false", () => {
    const result = envSchema.parse({})
    expect(result.PUBLIC_ENV__PDF_PRINTING).toBe(false)
  })

  it("rejects invalid PDF_PRINTING values", () => {
    const result = envSchema.safeParse({
      PUBLIC_ENV__PDF_PRINTING: "yes",
    })
    expect(result.success).toBe(false)
  })

  it("accepts GA measurement ID", () => {
    const result = envSchema.parse({
      PUBLIC_ENV__GA_MEASUREMENT_ID: "G-XXXXXXXXXX",
    })
    expect(result.PUBLIC_ENV__GA_MEASUREMENT_ID).toBe("G-XXXXXXXXXX")
  })
})
