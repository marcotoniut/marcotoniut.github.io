import { darkThemeClass, lightThemeClass, themeVars } from "./theme.css"

export { themeVars, darkThemeClass, lightThemeClass }

export const themeClass = darkThemeClass

export type ThemeMode = "dark" | "light"

export const themeClassByMode: Record<ThemeMode, string> = {
  dark: darkThemeClass,
  light: lightThemeClass,
}

export const colors = {
  accent: themeVars.color.accentSoft,
  accentContrast: themeVars.color.accentContrast,
  action: themeVars.color.accent,
  background: themeVars.color.background,
  border: themeVars.color.border,
  borderMuted: themeVars.color.borderMuted,
  buyMeACoffeeAccent: themeVars.color.buyMeACoffeeAccent,
  buyMeACoffeeBackground: themeVars.color.buyMeACoffeeBackground,
  buyMeACoffeeText: themeVars.color.buyMeACoffeeText,
  focusRing: themeVars.color.focusRing,
  main: themeVars.color.accent,
  sidebarBg: themeVars.color.surface,
  surface: themeVars.color.surface,
  surfaceElevated: themeVars.color.surfaceElevated,
  text: themeVars.color.textPrimary,
  textMuted: themeVars.color.textMuted,
} as const

export const space = {
  default: themeVars.space.md,
  large: themeVars.space.lg,
  none: themeVars.space.none,
  small: themeVars.space.sm,
  xl: themeVars.space.xl,
  xs: themeVars.space.xs,
  xxl: themeVars.space.xxl,
  xxs: themeVars.space.xxs,
  xxxl: `calc(${themeVars.space.xxl} + ${themeVars.space.lg})`,
} as const

export const radii = {
  lg: themeVars.radius.lg,
  md: themeVars.radius.md,
  pill: themeVars.radius.pill,
  sm: themeVars.radius.sm,
} as const

export const shadows = {
  glow: themeVars.shadow.glow,
  soft: themeVars.shadow.soft,
  subtle: themeVars.shadow.subtle,
} as const

export const fontSizes = {
  body: themeVars.font.size.body,
  bodySm: themeVars.font.size.bodySm,
  default: themeVars.font.size.body,
  h1: themeVars.font.size.h1,
  h2: themeVars.font.size.h2,
  h3: themeVars.font.size.h3,
  large: themeVars.font.size.ui,
  small: themeVars.font.size.bodySm,
  ui: themeVars.font.size.ui,
  xl: themeVars.font.size.bodyLg,
  xs: themeVars.font.size.bodySmaller,
  xxl: themeVars.font.size.h1,
} as const

export const lineHeights = {
  body: themeVars.font.lineHeight.body,
  bodySm: themeVars.font.lineHeight.bodySm,
  h1: themeVars.font.lineHeight.h1,
  h2: themeVars.font.lineHeight.h2,
  h3: themeVars.font.lineHeight.h3,
  ui: themeVars.font.lineHeight.ui,
} as const

export const letterSpacing = {
  body: themeVars.font.letterSpacing.body,
  bodySm: themeVars.font.letterSpacing.bodySm,
  h1: themeVars.font.letterSpacing.h1,
  h2: themeVars.font.letterSpacing.h2,
  h3: themeVars.font.letterSpacing.h3,
} as const

export const fontFamilies = {
  body: themeVars.font.family.body,
  heading: themeVars.font.family.heading,
  mono: themeVars.font.family.mono,
} as const

export const fontFamily = fontFamilies.body

export const fontWeights = {
  heading: {
    bold: themeVars.font.weight.heading.bold,
    regular: themeVars.font.weight.heading.regular,
  },
  body: {
    bold: themeVars.font.weight.body.bold,
    medium: themeVars.font.weight.body.medium,
    regular: themeVars.font.weight.body.regular,
  },
  ui: {
    medium: themeVars.font.weight.ui.medium,
  },
  bold: themeVars.font.weight.heading.bold,
  medium: themeVars.font.weight.body.medium,
  regular: themeVars.font.weight.body.regular,
  semibold: themeVars.font.weight.heading.regular,
} as const
