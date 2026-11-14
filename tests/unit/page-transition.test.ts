import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { runInNewContext } from "node:vm"
import { describe, expect, it } from "vitest"
import { gbPalette } from "@/styles/gb-palette"
import { GB_FADE_TYPE, PAGE_TRANSITION_SCRIPT } from "@/utils/page-transition"

const ORIGIN = "https://marcotoniut.com"
const GB_PAGE = "/en/projects/carcinisation/"

type Navigation = {
  to: string
  from?: string
  referrer?: string
  navigationApi?: boolean
}

function runPagereveal({
  to,
  from,
  referrer = "",
  navigationApi = true,
}: Navigation) {
  let onReveal: ((event: unknown) => void) | undefined
  const page: Record<string, unknown> = {
    URL,
    addEventListener: (type: string, listener: (event: unknown) => void) => {
      if (type === "pagereveal") onReveal = listener
    },
    document: { referrer },
    location: { href: `${ORIGIN}${to}` },
  }
  if (navigationApi) {
    page["navigation"] = {
      activation: {
        from: from === undefined ? null : { url: `${ORIGIN}${from}` },
      },
    }
  }
  page["window"] = page
  runInNewContext(PAGE_TRANSITION_SCRIPT, page)

  const transition = {
    skipped: false,
    types: new Set<string>(),
    skipTransition() {
      transition.skipped = true
    },
  }
  onReveal?.({ viewTransition: transition })
  return transition
}

describe("PAGE_TRANSITION_SCRIPT", () => {
  it("fades on the way into the Carcinisation page", () => {
    const transition = runPagereveal({ to: GB_PAGE, from: "/en/" })
    expect([...transition.types]).toEqual([GB_FADE_TYPE])
    expect(transition.skipped).toBe(false)
  })

  it("fades on the way out of it", () => {
    const transition = runPagereveal({ to: "/en/cv/", from: GB_PAGE })
    expect([...transition.types]).toEqual([GB_FADE_TYPE])
  })

  it("skips navigations between other pages", () => {
    const transition = runPagereveal({ to: "/en/cv/", from: "/en/" })
    expect(transition.skipped).toBe(true)
    expect(transition.types.size).toBe(0)
  })

  it("skips a language switch on the Carcinisation page", () => {
    const transition = runPagereveal({
      to: "/es/projects/carcinisation/",
      from: GB_PAGE,
    })
    expect(transition.skipped).toBe(true)
  })

  it("falls back to the referrer without the Navigation API", () => {
    const transition = runPagereveal({
      to: GB_PAGE,
      referrer: `${ORIGIN}/en/`,
      navigationApi: false,
    })
    expect([...transition.types]).toEqual([GB_FADE_TYPE])
  })

  it("skips when the previous page is unknown", () => {
    const transition = runPagereveal({ to: GB_PAGE, navigationApi: false })
    expect(transition.skipped).toBe(true)
  })

  it("ignores a reveal without a view transition", () => {
    let onReveal: ((event: unknown) => void) | undefined
    runInNewContext(PAGE_TRANSITION_SCRIPT, {
      addEventListener: (_type: string, listener: (event: unknown) => void) => {
        onReveal = listener
      },
    })
    expect(() => onReveal?.({ viewTransition: null })).not.toThrow()
  })
})

describe("page-transition.css", () => {
  const css = readFileSync(
    resolve(import.meta.dirname, "../../src/styles/page-transition.css"),
    "utf-8",
  )

  it("animates the type the head script adds", () => {
    expect(css).toContain(`:active-view-transition-type(${GB_FADE_TYPE})`)
  })

  it("fades through the game's darkest colour", () => {
    expect(css).toContain(gbPalette.dark)
  })
})
