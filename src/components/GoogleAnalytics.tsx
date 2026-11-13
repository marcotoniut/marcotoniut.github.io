import { useEffect, useSyncExternalStore } from "react"
import { AnalyticsConsentBanner } from "@/components/AnalyticsConsentBanner"
import { env } from "@/env"
import {
  getAnalyticsConsent,
  subscribeToAnalyticsConsent,
} from "@/utils/analytics-consent"
import { gtagScriptUrl } from "@/utils/gtag"

const measurementId = env.PUBLIC_ENV__GA_MEASUREMENT_ID

const whenIdle = (onReady: () => void) => {
  // Safari has no requestIdleCallback.
  if (window.requestIdleCallback) {
    const idleId = window.requestIdleCallback(onReady)
    return () => window.cancelIdleCallback(idleId)
  }

  const timeoutId = window.setTimeout(onReady, 1500)
  return () => window.clearTimeout(timeoutId)
}

/**
 * Requests consent, then loads gtag.js once the page is idle; `SiteHead` sets up its queue.
 */
export function GoogleAnalytics() {
  // Undefined during hydration, so the prerendered page omits the banner.
  const consent = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    getAnalyticsConsent,
    () => undefined,
  )

  useEffect(() => {
    if (measurementId === undefined || consent !== "granted") {
      return
    }

    const src = gtagScriptUrl(measurementId)
    return whenIdle(() => {
      if (document.querySelector(`script[src="${src}"]`) !== null) {
        return
      }
      const script = document.createElement("script")
      script.async = true
      script.src = src
      document.head.append(script)
    })
  }, [consent])

  return measurementId !== undefined &&
    !env.PUBLIC_ENV__PDF_PRINTING &&
    consent === "undecided" ? (
    <AnalyticsConsentBanner />
  ) : null
}
