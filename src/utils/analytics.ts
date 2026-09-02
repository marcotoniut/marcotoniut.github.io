import { sendGAEvent } from "@next/third-parties/google"
import type { Locales } from "@/i18n/i18n-types"
import type {
  BuyMeCoffeeParams,
  ExternalLinkParams,
  ProjectLinkParams,
} from "./analytics-schemas"
import {
  BuyMeCoffeeParamsSchema,
  CVViewParamsSchema,
  ExternalLinkParamsSchema,
  ProjectLinkParamsSchema,
} from "./analytics-schemas"

export type * from "./analytics-schemas"

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
