"use client"

import { useEffect, useRef } from "react"
import { segment } from "./Trace.css"

const SEGMENT_HEIGHT = 56

/**
 * The one energised segment on the bench spine: its position follows scroll
 * progress through the parent section. Transform-only, rAF-throttled, and
 * hidden entirely under prefers-reduced-motion (the spine stays a static
 * rule). One segment is the budget; it must be felt before it is noticed.
 */
export function Trace() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (el === null) return
    const parent = el.parentElement
    if (parent === null) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = parent.getBoundingClientRect()
      const travel = Math.max(0, rect.height - SEGMENT_HEIGHT)
      const span = rect.height + window.innerHeight * 0.5
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.7 - rect.top) / span),
      )
      el.style.transform = `translate3d(0, ${Math.round(progress * travel)}px, 0)`
    }
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule, { passive: true })
    return () => {
      if (frame !== 0) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [])

  return <span aria-hidden className={segment} ref={ref} />
}
