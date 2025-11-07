import { sendGAEvent } from "@next/third-parties/google"
import { z } from "zod"
import type { Locales } from "@/i18n/i18n-types"

/**
 * Event parameter schemas
 */
const LinkClickParamsSchema = z.object({
  link_url: z.string().url(),
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
  locale: z.string(),
})

const BuyMeCoffeeParamsSchema = LinkClickParamsSchema.extend({
  link_location: z.enum(["header", "home_page"]),
})

const ExternalLinkParamsSchema = LinkClickParamsSchema.extend({
  link_type: z.enum(["github", "linkedin", "itch_io", "other"]),
})

const CVViewParamsSchema = z.object({
  locale: z.string(),
  referrer: z.string().optional(),
})

const ProjectLinkParamsSchema = LinkClickParamsSchema.extend({
  project_name: z.string(),
  link_type: z.enum(["github", "itch_io", "jam"]),
})

// Type exports
export type LinkClickParams = z.infer<typeof LinkClickParamsSchema>
export type BuyMeCoffeeParams = z.infer<typeof BuyMeCoffeeParamsSchema>
export type ExternalLinkParams = z.infer<typeof ExternalLinkParamsSchema>
export type CVViewParams = z.infer<typeof CVViewParamsSchema>
export type ProjectLinkParams = z.infer<typeof ProjectLinkParamsSchema>

/**
 * Track Buy Me a Coffee button clicks
 */
export function trackBuyMeCoffeeClick(
  params: Omit<BuyMeCoffeeParams, "link_url">,
) {
  const validated = BuyMeCoffeeParamsSchema.parse({
    ...params,
    link_url: "https://buymeacoffee.com/marcotoniut",
  })

  sendGAEvent("event", "buy_me_coffee_click", {
    event_category: "engagement",
    event_label: "buy_me_coffee",
    ...validated,
  })
}

/**
 * Track external link clicks (GitHub, LinkedIn, itch.io)
 */
export function trackExternalLinkClick(params: ExternalLinkParams) {
  const validated = ExternalLinkParamsSchema.parse(params)

  sendGAEvent("event", "external_link_click", {
    event_category: "engagement",
    event_label: validated.link_type,
    ...validated,
  })
}

/**
 * Track CV page views
 */
export function trackCVView(locale: Locales) {
  const validated = CVViewParamsSchema.parse({
    locale,
    referrer:
      typeof window !== "undefined"
        ? document.referrer || undefined
        : undefined,
  })

  sendGAEvent("event", "cv_view", {
    event_category: "engagement",
    event_label: "cv_page_view",
    ...validated,
  })
}

/**
 * Track project link clicks (Carcinisation, etc.)
 */
export function trackProjectLinkClick(params: ProjectLinkParams) {
  const validated = ProjectLinkParamsSchema.parse(params)

  sendGAEvent("event", "project_link_click", {
    event_category: "engagement",
    event_label: `${validated.project_name}_${validated.link_type}`,
    ...validated,
  })
}

/**
 * Track internal navigation to CV
 */
export function trackCVNavigation(params: {
  locale: Locales
  from_page: string
}) {
  sendGAEvent("event", "cv_navigation", {
    event_category: "navigation",
    event_label: "internal_cv_link",
    locale: params.locale,
    from_page: params.from_page,
  })
}

/**
 * Track internal navigation to Contact page
 */
export function trackContactNavigation(params: {
  locale: Locales
  from_page: string
}) {
  sendGAEvent("event", "contact_navigation", {
    event_category: "navigation",
    event_label: "internal_contact_link",
    locale: params.locale,
    from_page: params.from_page,
  })
}
