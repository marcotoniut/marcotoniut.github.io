// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from "vitest"
import {
  buildThemeBootstrapScript,
  isThemeMode,
  resolveThemeMode,
  THEME_STORAGE_KEY,
} from "@/styles/theme-mode"

const CLASSES = { dark: "theme-dark-abc", light: "theme-light-xyz" }

const stubPrefersLight = (prefersLight: boolean) => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: query.includes("prefers-color-scheme: light") && prefersLight,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  )
}

afterEach(() => {
  localStorage.clear()
  document.documentElement.className = ""
  document.documentElement.removeAttribute("data-theme")
  vi.unstubAllGlobals()
})

describe("isThemeMode", () => {
  it("accepts only the two supported modes", () => {
    expect(isThemeMode("dark")).toBe(true)
    expect(isThemeMode("light")).toBe(true)
    expect(isThemeMode("gameboy")).toBe(false)
    expect(isThemeMode(null)).toBe(false)
  })
})

describe("resolveThemeMode", () => {
  it("uses the default outside the browser", () => {
    vi.stubGlobal("window", undefined)
    expect(resolveThemeMode()).toBe("dark")
  })

  it("prefers the stored choice over the OS preference", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "light")
    stubPrefersLight(false)
    expect(resolveThemeMode()).toBe("light")
  })

  it("falls back to the OS preference when nothing is stored", () => {
    stubPrefersLight(true)
    expect(resolveThemeMode()).toBe("light")
  })

  it("defaults to dark when neither is set", () => {
    stubPrefersLight(false)
    expect(resolveThemeMode()).toBe("dark")
  })

  it("ignores a stored value that is not a theme mode", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "sepia")
    stubPrefersLight(false)
    expect(resolveThemeMode()).toBe("dark")
  })
})

describe("buildThemeBootstrapScript", () => {
  const run = () => {
    // Executes the real emitted script, so any drift from resolveThemeMode's
    // precedence fails here rather than shipping as a theme flash.
    new Function(buildThemeBootstrapScript(CLASSES)).call(undefined)
    return {
      mode: document.documentElement.dataset["theme"],
      classes: document.documentElement.className,
    }
  }

  it("applies the stored choice ahead of the OS preference", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "light")
    stubPrefersLight(false)
    expect(run()).toEqual({ mode: "light", classes: CLASSES.light })
  })

  it("applies the OS preference when nothing is stored", () => {
    stubPrefersLight(true)
    expect(run()).toEqual({ mode: "light", classes: CLASSES.light })
  })

  it("defaults to dark", () => {
    stubPrefersLight(false)
    expect(run()).toEqual({ mode: "dark", classes: CLASSES.dark })
  })

  it("agrees with resolveThemeMode across every input", () => {
    for (const stored of [null, "light", "dark", "sepia"]) {
      for (const prefersLight of [true, false]) {
        localStorage.clear()
        if (stored) {
          localStorage.setItem(THEME_STORAGE_KEY, stored)
        }
        stubPrefersLight(prefersLight)
        document.documentElement.className = ""

        expect(
          run().mode,
          `stored=${stored} prefersLight=${prefersLight}`,
        ).toBe(resolveThemeMode())
      }
    }
  })
})
