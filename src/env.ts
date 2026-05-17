import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_PDF_PRINTING: z
    .enum(["true", "false"])
    .optional()
    .transform((v) => v === "true"),
  NEXT_PUBLIC_PRINT_SCALE: z.string().optional(),
})

const parseEnv = () => {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error(
      "Invalid environment configuration",
      parsed.error.flatten().fieldErrors,
    )
    throw new Error("Invalid environment variables")
  }

  return parsed.data
}

export const env = parseEnv()
