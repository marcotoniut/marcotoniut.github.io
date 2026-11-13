import { z } from "zod"

// `.env.template` lists every variable with an empty value.
const unsetWhenBlank = <T extends z.ZodType>(schema: T) =>
  z.preprocess((value) => (value === "" ? undefined : value), schema)

export const envSchema = z.object({
  // Inlined into a <script> in <head>, so only the documented id shape passes.
  PUBLIC_ENV__GA_MEASUREMENT_ID: unsetWhenBlank(
    z
      .string()
      .regex(/^G-[A-Z0-9]+$/)
      .optional(),
  ),
  PUBLIC_ENV__PDF_PRINTING: unsetWhenBlank(
    z
      .enum(["true", "false"])
      .optional()
      .transform((v) => v === "true"),
  ),
  PUBLIC_ENV__PRINT_SCALE: unsetWhenBlank(z.string().optional()),
})

export type Env = z.infer<typeof envSchema>

const parseEnv = (): Env => {
  // Read by name, one access per line: the bundler only inlines
  // `import.meta.env.NAME`, so passing the whole env object leaves the browser
  // and prerender without values.
  const gaMeasurementId = import.meta.env.PUBLIC_ENV__GA_MEASUREMENT_ID
  const pdfPrinting = import.meta.env.PUBLIC_ENV__PDF_PRINTING
  const printScale = import.meta.env.PUBLIC_ENV__PRINT_SCALE

  const parsed = envSchema.safeParse({
    PUBLIC_ENV__GA_MEASUREMENT_ID: gaMeasurementId,
    PUBLIC_ENV__PDF_PRINTING: pdfPrinting,
    PUBLIC_ENV__PRINT_SCALE: printScale,
  })

  if (!parsed.success) {
    console.error(
      `Invalid environment configuration\n${z.prettifyError(parsed.error)}`,
    )
    throw new Error("Invalid environment variables")
  }

  return parsed.data
}

export const env = parseEnv()
