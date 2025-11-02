import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_PDF_PRINTING: z
    .union([z.literal("true"), z.literal("false")])
    .optional(),
  NEXT_PUBLIC_PRINT_SCALE: z.string().optional(),
})

type RawEnv = z.infer<typeof envSchema>

type Env = {
  NEXT_PUBLIC_GA_MEASUREMENT_ID: string | undefined
  NEXT_PUBLIC_PDF_PRINTING: boolean
  NEXT_PUBLIC_PRINT_SCALE: string | undefined
}

const parseEnv = (): Env => {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error(
      "Invalid environment configuration",
      parsed.error.flatten().fieldErrors,
    )
    throw new Error("Invalid environment variables")
  }

  const data = parsed.data as RawEnv

  const pdfPrinting = data.NEXT_PUBLIC_PDF_PRINTING === "true"

  return {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: data.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_PDF_PRINTING: pdfPrinting,
    NEXT_PUBLIC_PRINT_SCALE: data.NEXT_PUBLIC_PRINT_SCALE,
  }
}

export const env = parseEnv()
