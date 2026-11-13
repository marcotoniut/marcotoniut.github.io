import { useEffect } from "react"
import { env } from "@/env"
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

/** Loads gtag.js once the page is idle; `SiteHead` sets up its queue. */
export function GoogleAnalytics() {
  useEffect(() => {
    if (measurementId === undefined) {
      return
    }

    return whenIdle(() => {
      const script = document.createElement("script")
      script.async = true
      script.src = gtagScriptUrl(measurementId)
      document.head.append(script)
    })
  }, [])

  return null
}
