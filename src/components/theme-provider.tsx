"use client"

import type { ReactNode } from "react"
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import {
  darkThemeClass,
  lightThemeClass,
  themeClassByMode,
} from "@/styles/theme"
import type { ThemeMode } from "@/styles/theme-mode"
import {
  REDUCED_MOTION_QUERY,
  resolveThemeMode,
  THEME_STORAGE_KEY,
  THEME_TRANSITION_CLASS,
  THEME_TRANSITION_DURATION_MS,
} from "@/styles/theme-mode"

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark")
  const [mounted, setMounted] = useState(false)
  const transitionTimeoutRef = useRef<number | undefined>(undefined)

  // The blocking head script already applied the class, so the first client
  // pass only syncs React's state to what is on <html>.
  useEffect(() => {
    setTheme(resolveThemeMode())
    setMounted(true)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!mounted) {
      return
    }

    const root = document.documentElement
    root.classList.remove(darkThemeClass, lightThemeClass)
    root.classList.add(themeClassByMode[theme])
    root.dataset["theme"] = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Private mode: the theme still applies for this session.
    }

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      return
    }

    window.clearTimeout(transitionTimeoutRef.current)
    root.classList.add(THEME_TRANSITION_CLASS)
    transitionTimeoutRef.current = window.setTimeout(() => {
      root.classList.remove(THEME_TRANSITION_CLASS)
      transitionTimeoutRef.current = undefined
    }, THEME_TRANSITION_DURATION_MS)

    return () => {
      window.clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = undefined
      root.classList.remove(THEME_TRANSITION_CLASS)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
