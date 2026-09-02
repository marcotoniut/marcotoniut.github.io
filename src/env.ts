import { z } from "zod"

export const envSchema = z.object({
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_PDF_PRINTING: z
    .enum(["true", "false"])
    .optional()
    .transform((v) => v === "true"),
  NEXT_PUBLIC_PRINT_SCALE: z.string().optional(),
})

export type Env = z.infer<typeof envSchema>

const parseEnv = (): Env => {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error(
      `Invalid environment configuration\n${z.prettifyError(parsed.error)}`,
    )
    throw new Error("Invalid environment variables")
  }

  return parsed.data
}

export const env = parseEnv()
