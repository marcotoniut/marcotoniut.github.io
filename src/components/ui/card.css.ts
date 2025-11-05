import { style } from "@vanilla-extract/css"

import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  shadows,
  space,
} from "@/styles/theme"

export const card = style({
  background: colors.surfaceElevated,
  border: `1px solid ${colors.border}`,
  boxShadow: shadows.soft,
  color: colors.text,
  display: "flex",
  flexDirection: "column",
  gap: space.default,
  padding: space.xl,
  position: "relative",
})

export const cardHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xs,
})

export const cardTitle = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.h2,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h2,
  lineHeight: lineHeights.h2,
  margin: 0,
  color: colors.text,
})

export const cardSubtitle = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  letterSpacing: "0.02em",
  margin: 0,
})

export const cardContent = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  lineHeight: lineHeights.body,
})
