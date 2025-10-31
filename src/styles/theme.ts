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
  buyMeACoffeeBackground: themeVars.color.buyMeACoffeeBackground,
  buyMeACoffeeText: themeVars.color.buyMeACoffeeText,
  buyMeACoffeeAccent: themeVars.color.buyMeACoffeeAccent,
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
  h1: themeVars.font.size.h1,
  h2: themeVars.font.size.h2,
  h3: themeVars.font.size.h3,
  body: themeVars.font.size.body,
  bodySm: themeVars.font.size.bodySm,
  ui: themeVars.font.size.ui,
  small: themeVars.font.size.bodySm,
  default: themeVars.font.size.body,
  large: themeVars.font.size.ui,
  xl: themeVars.font.size.h3,
  xxl: themeVars.font.size.h1,
} as const

export const lineHeights = {
  h1: themeVars.font.lineHeight.h1,
  h2: themeVars.font.lineHeight.h2,
  h3: themeVars.font.lineHeight.h3,
  body: themeVars.font.lineHeight.body,
  bodySm: themeVars.font.lineHeight.bodySm,
  ui: themeVars.font.lineHeight.ui,
} as const

export const letterSpacing = {
  h1: themeVars.font.letterSpacing.h1,
  h2: themeVars.font.letterSpacing.h2,
  h3: themeVars.font.letterSpacing.h3,
  body: themeVars.font.letterSpacing.body,
  bodySm: themeVars.font.letterSpacing.bodySm,
} as const

export const fontFamilies = {
  heading: themeVars.font.family.heading,
  body: themeVars.font.family.body,
  mono: themeVars.font.family.mono,
} as const

export const fontFamily = fontFamilies.body

export const fontWeights = {
  heading: {
    regular: themeVars.font.weight.heading.regular,
    bold: themeVars.font.weight.heading.bold,
  },
  body: {
    regular: themeVars.font.weight.body.regular,
    medium: themeVars.font.weight.body.medium,
    bold: themeVars.font.weight.body.bold,
  },
  ui: {
    medium: themeVars.font.weight.ui.medium,
  },
  regular: themeVars.font.weight.body.regular,
  medium: themeVars.font.weight.body.medium,
  semibold: themeVars.font.weight.heading.regular,
  bold: themeVars.font.weight.heading.bold,
} as const
