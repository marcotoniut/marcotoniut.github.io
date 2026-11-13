import { afterEach, describe, expect, it, vi } from "vitest"
import { envSchema } from "@/env"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

describe("env", () => {
  it("fails at startup on an invalid variable", async () => {
    vi.stubEnv("PUBLIC_ENV__GA_MEASUREMENT_ID", "UA-12345-1")
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})
    vi.resetModules()
    await expect(import("@/env")).rejects.toThrow(
      "Invalid environment variables",
    )
    expect(consoleError).toHaveBeenCalledOnce()
  })
})

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

  it("treats the blank values from .env.template as unset", () => {
    const result = envSchema.parse({
      PUBLIC_ENV__GA_MEASUREMENT_ID: "",
      PUBLIC_ENV__PDF_PRINTING: "",
      PUBLIC_ENV__PRINT_SCALE: "",
    })
    expect(result).toEqual({
      PUBLIC_ENV__GA_MEASUREMENT_ID: undefined,
      PUBLIC_ENV__PDF_PRINTING: false,
      PUBLIC_ENV__PRINT_SCALE: undefined,
    })
  })

  it("rejects a GA measurement ID of the wrong shape", () => {
    const result = envSchema.safeParse({
      PUBLIC_ENV__GA_MEASUREMENT_ID: "UA-12345-1",
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
