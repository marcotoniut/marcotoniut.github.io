import { z } from "zod/mini"
import { LocaleSchema } from "@/i18n/schemas"

export const LinkClickParamsSchema = z.object({
  link_url: z.url(),
  link_text: z.optional(z.string()),
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

export const BuyMeCoffeeParamsSchema = z.extend(LinkClickParamsSchema, {
  link_location: z.enum(["header", "home_page", "footer"]),
})

export const ExternalLinkParamsSchema = z.extend(LinkClickParamsSchema, {
  link_type: z.enum(["github", "linkedin", "itch_io", "other"]),
})

export const CVViewParamsSchema = z.object({
  locale: LocaleSchema,
  referrer: z.optional(z.string()),
})

export const ProjectLinkParamsSchema = z.extend(LinkClickParamsSchema, {
  project_name: z.string(),
  link_type: z.enum(["github", "itch_io", "jam"]),
})

export type BuyMeCoffeeParams = z.infer<typeof BuyMeCoffeeParamsSchema>
export type ExternalLinkParams = z.infer<typeof ExternalLinkParamsSchema>
export type ProjectLinkParams = z.infer<typeof ProjectLinkParamsSchema>
