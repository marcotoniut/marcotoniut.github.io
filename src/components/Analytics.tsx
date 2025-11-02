"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

import { env } from "@/env"

const measurementId = env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const Analytics = () => {
  const pathname = usePathname()
  const previousPath = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!measurementId || typeof window === "undefined" || !window.gtag) {
      return
    }

    if (previousPath.current === pathname) {
      return
    }

    window.gtag("config", measurementId, {
      page_path: pathname,
    })

    previousPath.current = pathname
  }, [pathname])

  return null
}
