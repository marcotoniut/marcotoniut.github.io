"use client"

import { GoogleAnalytics } from "@next/third-parties/google"
import { useEffect, useState } from "react"
import { env } from "@/env"

const measurementId = env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const scheduleIdle = (onReady: () => void) => {
  if (typeof window === "undefined") {
    return () => {}
  }

  if (window.requestIdleCallback) {
    const idleId = window.requestIdleCallback(onReady)
    return () => window.cancelIdleCallback?.(idleId)
  }

  const timeoutId = window.setTimeout(onReady, 4000)
  return () => window.clearTimeout(timeoutId)
}

export const GoogleAnalyticsLoader = () => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!measurementId) {
      return
    }

    const cancel = scheduleIdle(() => setShouldLoad(true))
    return cancel
  }, [])

  if (!measurementId || !shouldLoad) {
    return null
  }

  return <GoogleAnalytics gaId={measurementId} />
}
