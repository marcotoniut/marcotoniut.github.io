import { darkThemeClass, lightThemeClass, themeVars } from "./theme.css"

export { themeVars, darkThemeClass, lightThemeClass }

export const themeClass = darkThemeClass

export type ThemeMode = "dark" | "light"

export const themeClassByMode: Record<ThemeMode, string> = {
  dark: darkThemeClass,
  light: lightThemeClass,
}

export const colors = {
  text: themeVars.color.textPrimary,
  textMuted: themeVars.color.textMuted,
  action: themeVars.color.accent,
  accent: themeVars.color.accentSoft,
  accentContrast: themeVars.color.accentContrast,
  background: themeVars.color.background,
  surface: themeVars.color.surface,
  surfaceElevated: themeVars.color.surfaceElevated,
  border: themeVars.color.border,
  borderMuted: themeVars.color.borderMuted,
  sidebarBg: themeVars.color.surface,
  main: themeVars.color.accent,
  focusRing: themeVars.color.focusRing,
} as const

export const space = {
  none: themeVars.space.none,
  xxs: themeVars.space.xxs,
  xs: themeVars.space.xs,
  small: themeVars.space.sm,
  default: themeVars.space.md,
  large: themeVars.space.lg,
  xl: themeVars.space.xl,
  xxl: themeVars.space.xxl,
  xxxl: `calc(${themeVars.space.xxl} + ${themeVars.space.lg})`,
} as const

export const radii = {
  sm: themeVars.radius.sm,
  md: themeVars.radius.md,
  lg: themeVars.radius.lg,
  pill: themeVars.radius.pill,
} as const

export const shadows = {
  subtle: themeVars.shadow.subtle,
  soft: themeVars.shadow.soft,
  glow: themeVars.shadow.glow,
} as const

export const fontSizes = {
  small: themeVars.font.size.xs,
  default: themeVars.font.size.sm,
  large: themeVars.font.size.md,
  xl: themeVars.font.size.lg,
  xxl: themeVars.font.size.xl,
} as const

export const fontFamily = themeVars.font.family
export const fontWeights = themeVars.font.weight
