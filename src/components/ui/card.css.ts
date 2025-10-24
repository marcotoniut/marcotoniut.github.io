import { style } from "@vanilla-extract/css"

import {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from "@/styles/theme"

export const card = style({
  background: colors.surfaceElevated,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.lg,
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
  fontFamily,
  fontSize: fontSizes.xxl,
  fontWeight: fontWeights.semibold,
  letterSpacing: "0.03em",
  lineHeight: 1.1,
  margin: 0,
  color: colors.text,
})

export const cardSubtitle = style({
  color: colors.textMuted,
  fontFamily,
  fontSize: fontSizes.large,
  letterSpacing: "0.02em",
  margin: 0,
})

export const cardContent = style({
  color: colors.textMuted,
  fontFamily,
  fontSize: fontSizes.large,
  lineHeight: 1.6,
})
