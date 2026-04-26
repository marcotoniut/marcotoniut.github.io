import {
  darkThemeClass,
  gameboyThemeClass,
  lightThemeClass,
  themeVars,
} from "./theme.css"

export { darkThemeClass, gameboyThemeClass, lightThemeClass, themeVars }

export type ThemeMode = "dark" | "light"

export const themeClassByMode: Record<ThemeMode, string> = {
  dark: darkThemeClass,
  light: lightThemeClass,
}

export const colors = {
  accent: themeVars.color.accent,
  accentContrast: themeVars.color.accentContrast,
  accentSoft: themeVars.color.accentSoft,
  background: themeVars.color.background,
  border: themeVars.color.border,
  borderMuted: themeVars.color.borderMuted,
  buyMeACoffeeAccent: themeVars.color.buyMeACoffeeAccent,
  buyMeACoffeeBackground: themeVars.color.buyMeACoffeeBackground,
  buyMeACoffeeText: themeVars.color.buyMeACoffeeText,
  focusRing: themeVars.color.focusRing,
  surface: themeVars.color.surface,
  surfaceElevated: themeVars.color.surfaceElevated,
  text: themeVars.color.textPrimary,
  textMuted: themeVars.color.textMuted,
  gb: themeVars.color.gb,
} as const

export const space = {
  none: themeVars.space.none,
  xxs: themeVars.space.xxs,
  xs: themeVars.space.xs,
  sm: themeVars.space.sm,
  md: themeVars.space.md,
  lg: themeVars.space.lg,
  xl: themeVars.space.xl,
  xxl: themeVars.space.xxl,
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
  bodyLg: themeVars.font.size.bodyLg,
  bodySm: themeVars.font.size.bodySm,
  h1: themeVars.font.size.h1,
  h2: themeVars.font.size.h2,
  h3: themeVars.font.size.h3,
  ui: themeVars.font.size.ui,
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
} as const
