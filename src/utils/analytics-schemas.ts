import { z } from "zod"
import { LocaleSchema } from "@/i18n/schemas"

/**
 * Kept apart from `analytics.ts` so tests can exercise the schemas without
 * pulling in `@next/third-parties`, which needs a Next.js runtime.
 */
export const LinkClickParamsSchema = z.object({
  link_url: z.url(),
  link_text: z.string().optional(),
  link_location: z.enum([
    "header",
    "home_page",
    "cv_page",
    "footer",
    "profile",
    "carcinisation_project_page",
    "carcinisation_project_page_meta",
    "carcinisation_project_page_external_links",
  ]),
  locale: LocaleSchema,
})

export const BuyMeCoffeeParamsSchema = LinkClickParamsSchema.extend({
  link_location: z.enum(["header", "home_page"]),
})

export const ExternalLinkParamsSchema = LinkClickParamsSchema.extend({
  link_type: z.enum(["github", "linkedin", "itch_io", "other"]),
})

export const CVViewParamsSchema = z.object({
  locale: LocaleSchema,
  referrer: z.string().optional(),
})

export const ProjectLinkParamsSchema = LinkClickParamsSchema.extend({
  project_name: z.string(),
  link_type: z.enum(["github", "itch_io", "jam"]),
})

export type LinkClickParams = z.infer<typeof LinkClickParamsSchema>
export type BuyMeCoffeeParams = z.infer<typeof BuyMeCoffeeParamsSchema>
export type ExternalLinkParams = z.infer<typeof ExternalLinkParamsSchema>
export type CVViewParams = z.infer<typeof CVViewParamsSchema>
export type ProjectLinkParams = z.infer<typeof ProjectLinkParamsSchema>
