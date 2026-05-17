import { style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontSizes,
  fontWeights,
  space,
  themeVars,
} from "@/styles/theme"
import { withAlpha } from "@/utils/color"

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: space.xl,
  maxWidth: "600px",
  width: "100%",
})

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
})

export const label = style({
  fontSize: fontSizes.bodySm,
  fontWeight: fontWeights.body.medium,
  color: colors.text,
})

export const required = style({
  color: themeVars.color.accent,
})

export const input = style({
  padding: `${space.md} ${space.lg}`,
  fontSize: fontSizes.body,
  border: `1px solid ${colors.border}`,
  backgroundColor: colors.background,
  color: colors.text,
  transition: `border-color ${durations.normal}, box-shadow ${durations.normal}`,

  ":focus": {
    outline: "none",
    borderColor: colors.accent,
    boxShadow: `0 0 0 3px ${withAlpha(colors.accent, 0.2)}`,
  },

  "::placeholder": {
    color: colors.textMuted,
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "120px",
    fontFamily: "inherit",
  },
])

export const button = style({
  alignSelf: "flex-start",
  backgroundColor: colors.accent,
  border: "none",
  color: colors.background,
  cursor: "pointer",
  fontSize: fontSizes.body,
  fontWeight: fontWeights.body.bold,
  padding: `${space.md} ${space.xxl}`,
  transition: `transform ${durations.normal}, opacity ${durations.normal}`,

  ":hover": {
    transform: "translateY(-2px)",
  },

  ":active": {
    transform: "translateY(0)",
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    transform: "none",
  },
})
