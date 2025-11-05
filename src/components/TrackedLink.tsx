"use client"

import Link from "next/link"
import type { ComponentPropsWithoutRef } from "react"
import type { Locales } from "@/i18n/i18n-types"
import type { ExternalLinkParams, ProjectLinkParams } from "@/utils/analytics"
import {
  trackContactNavigation,
  trackCVNavigation,
  trackExternalLinkClick,
  trackProjectLinkClick,
} from "@/utils/analytics"

type TrackedLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  locale: Locales
  trackingType: "cv_navigation" | "contact_navigation"
  fromPage: string
}

type TrackedAnchorProps = ComponentPropsWithoutRef<"a"> & {
  locale: Locales
} & (
    | {
        trackingType: "external_link"
        trackingParams: Omit<ExternalLinkParams, "locale">
      }
    | {
        trackingType: "project_link"
        trackingParams: Omit<ProjectLinkParams, "locale">
      }
  )

/**
 * Tracked internal Link (Next.js Link component)
 */
export function TrackedLink({
  locale,
  trackingType,
  fromPage,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (trackingType === "cv_navigation") {
      trackCVNavigation({ locale, from_page: fromPage })
    } else if (trackingType === "contact_navigation") {
      trackContactNavigation({ locale, from_page: fromPage })
    }
    onClick?.(e)
  }

  return <Link {...props} onClick={handleClick} />
}

/**
 * Tracked external anchor (regular <a> tag)
 */
export function TrackedAnchor({
  locale,
  trackingType,
  trackingParams,
  onClick,
  ...props
}: TrackedAnchorProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (trackingType === "external_link") {
      trackExternalLinkClick({ ...trackingParams, locale })
    } else if (trackingType === "project_link") {
      trackProjectLinkClick({ ...trackingParams, locale })
    }
    onClick?.(e)
  }

  // biome-ignore lint/a11y/useValidAnchor: Anchor has valid href, onClick is for analytics tracking
  // biome-ignore lint/a11y/noStaticElementInteractions: This is a navigation anchor with tracking
  return <a {...props} onClick={handleClick} />
}
