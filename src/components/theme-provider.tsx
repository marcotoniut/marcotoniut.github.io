import type { ReactNode } from "react"
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import {
  darkThemeClass,
  lightThemeClass,
  themeClassByMode,
} from "@/styles/theme"
import type { ThemeMode } from "@/styles/theme-mode"
import {
  DEFAULT_THEME_MODE,
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

const subscribeToNothing = () => () => {}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Hydration renders the server snapshots; the client pass that follows
  // resolves the mode the blocking head script already applied to <html>.
  const resolvedTheme = useSyncExternalStore(
    subscribeToNothing,
    resolveThemeMode,
    () => DEFAULT_THEME_MODE,
  )
  const mounted = useSyncExternalStore<boolean>(
    subscribeToNothing,
    () => true,
    () => false,
  )
  const [chosenTheme, setTheme] = useState<ThemeMode | null>(null)
  const theme = chosenTheme ?? resolvedTheme
  const transitionTimeoutRef = useRef<number | undefined>(undefined)

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
    setTheme(theme === "dark" ? "light" : "dark")
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
