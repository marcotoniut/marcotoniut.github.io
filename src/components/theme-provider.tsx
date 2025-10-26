"use client"

import type { ReactNode } from "react"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import type { ThemeMode } from "@/styles/theme"
import {
  darkThemeClass,
  lightThemeClass,
  themeClassByMode,
} from "@/styles/theme"

const STORAGE_KEY = "marcotoniut-theme"

type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark"
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "dark" || stored === "light") {
    return stored
  }

  const prefersLight = window.matchMedia?.(
    "(prefers-color-scheme: light)",
  ).matches

  return prefersLight ? "light" : "dark"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark")
  const [mounted, setMounted] = useState(false)
  const hasHydrated = useRef(false)

  useIsomorphicLayoutEffect(() => {
    if (typeof document === "undefined") return

    if (!hasHydrated.current) {
      hasHydrated.current = true
      setThemeState(getInitialTheme())
      setMounted(true)
      return
    }

    const root = document.documentElement
    root.classList.remove(darkThemeClass, lightThemeClass)
    root.classList.add(themeClassByMode[theme])
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      mounted,
    }),
    [setTheme, theme, toggleTheme, mounted],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
