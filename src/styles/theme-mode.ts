/**
 * Theme resolution, kept free of any `.css.ts` import so it stays unit
 * testable. The generated class names and the pre-hydration script live in
 * `theme.ts`, which binds these constants to the vanilla-extract output.
 */

export type ThemeMode = "dark" | "light"

export const THEME_STORAGE_KEY = "marcotoniut-theme"

export const LIGHT_SCHEME_QUERY = "(prefers-color-scheme: light)"

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

/** Applied to `<html>` when the mode changes, so the swap can be animated. */
export const THEME_TRANSITION_CLASS = "theme-transition"

export const THEME_TRANSITION_DURATION_MS = 450

export const DEFAULT_THEME_MODE: ThemeMode = "dark"

export function isThemeMode(value: unknown): value is ThemeMode {
  return value === "dark" || value === "light"
}

/**
 * Resolve the mode to render: stored choice first, then the OS preference,
 * defaulting to dark. Safe to call on the server, where it returns the default.
 */
export function resolveThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return DEFAULT_THEME_MODE
  }

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (isThemeMode(stored)) {
      return stored
    }
  } catch {
    // Storage can throw in private mode; fall through to the OS preference.
  }

  return window.matchMedia?.(LIGHT_SCHEME_QUERY).matches
    ? "light"
    : DEFAULT_THEME_MODE
}

/**
 * Generate the blocking `<head>` script that applies the theme class before first paint to prevent a flash of the wrong theme.
 *
 * It must be a self-contained string because it runs before any bundle loads.
 * Build it from the constants above, not by hand, and keep its precedence
 * identical to `resolveThemeMode`.
 */
export function buildThemeBootstrapScript(classes: {
  dark: string
  light: string
}): string {
  return `(function(){try{
var s=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
var t=s==="light"||s==="dark"?s:matchMedia(${JSON.stringify(LIGHT_SCHEME_QUERY)}).matches?"light":${JSON.stringify(DEFAULT_THEME_MODE)};
document.documentElement.classList.add(t==="light"?${JSON.stringify(classes.light)}:${JSON.stringify(classes.dark)});
document.documentElement.dataset.theme=t;
}catch(e){document.documentElement.classList.add(${JSON.stringify(classes.dark)})}})()`
}
