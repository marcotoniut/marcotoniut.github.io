import { style } from "@vanilla-extract/css"

import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  radii,
  shadows,
  space,
} from "@/styles/theme"

export const page = style({
  background: `linear-gradient(135deg, ${colors.background} 0%, #0f1729 100%)`,
  color: colors.text,
  display: "flex",
  flexDirection: "column",
  gap: space.xxl,
  minHeight: "100vh",
  padding: space.xxl,
})

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: space.default,
  maxWidth: "960px",
  width: "100%",
})

export const heading = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.h1,
  fontWeight: fontWeights.heading.bold,
  letterSpacing: letterSpacing.h1,
  lineHeight: lineHeights.h1,
  margin: 0,
  textTransform: "uppercase",
})

export const lead = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  lineHeight: lineHeights.body,
  margin: 0,
  maxWidth: "640px",
})

export const buttonGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: space.small,
})

export const cardShowcase = style({
  display: "grid",
  gap: space.default,
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
})

export const surface = style({
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.lg,
  boxShadow: shadows.subtle,
  padding: space.xl,
  display: "flex",
  flexDirection: "column",
  gap: space.small,
})
