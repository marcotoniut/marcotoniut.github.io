"use client"

import { sendGAEvent } from "@next/third-parties/google"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { env } from "@/env"

const measurementId = env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const Analytics = () => {
  const pathname = usePathname()
  const previousPath = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!measurementId) {
      return
    }

    if (previousPath.current === pathname) {
      return
    }

    // Track page view
    sendGAEvent("event", "page_view", {
      page_path: pathname,
      page_title: document.title,
    })

    previousPath.current = pathname
  }, [pathname])

  return null
}
