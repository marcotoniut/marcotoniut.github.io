import { keyframes, style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontFamilies,
  fontSizes,
  fontWeights,
  shadows,
  space,
} from "@/styles/theme"

const selectFont = {
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.ui,
  fontWeight: fontWeights.ui.medium,
} as const

export const headerContainer = style({
  margin: "0 auto",
  maxWidth: "1080px",
  width: "100%",
})

export const header = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
})

export const backLink = style({
  color: colors.accent,
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: `color ${durations.normal}`,

  ":hover": {
    color: colors.accentSoft,
  },
})

export const controlBar = style({
  alignItems: "center",
  display: "flex",
  flex: "1",
  flexWrap: "wrap",
  gap: space.md,
  justifyContent: "flex-end",
})

export const selectTrigger = style({
  alignItems: "center",
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  boxShadow: shadows.subtle,
  color: colors.text,
  cursor: "pointer",
  display: "inline-flex",
  ...selectFont,
  gap: space.xs,
  height: "36px",
  justifyContent: "space-between",
  minWidth: "96px",
  paddingInline: space.md,
  transition: `background-color ${durations.normal} ease, border-color ${durations.normal} ease, box-shadow ${durations.normal} ease`,
  ":hover": {
    borderColor: colors.accent,
    boxShadow: `${shadows.subtle}, ${shadows.glow}`,
  },
  ":focus-visible": {
    outline: "none",
    boxShadow: `${shadows.subtle}, ${shadows.glow}`,
    borderColor: colors.accent,
  },
  selectors: {
    '&[data-state="open"]': {
      borderColor: colors.accent,
      boxShadow: `${shadows.soft}, ${shadows.glow}`,
    },
  },
})

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(-4px)" },
  to: { opacity: 1, transform: "translateY(0)" },
})

export const selectContent = style({
  animation: `${fadeIn} 120ms ease`,
  backgroundColor: colors.surfaceElevated,
  border: `1px solid ${colors.border}`,
  boxShadow: shadows.soft,
  minWidth: "var(--radix-select-trigger-width)",
  overflow: "hidden",
  zIndex: 2000,
})

export const selectViewport = style({
  padding: space.xs,
})

export const selectItem = style({
  alignItems: "center",
  color: colors.text,
  cursor: "pointer",
  display: "flex",
  ...selectFont,
  gap: space.sm,
  lineHeight: 1,
  paddingBlock: space.sm,
  paddingInline: space.md,
  position: "relative",
  selectors: {
    "&[data-highlighted]": {
      backgroundColor: colors.surface,
      color: colors.accent,
    },
    '&[data-state="checked"]': {
      backgroundColor: colors.surface,
      color: colors.accent,
      boxShadow: `${shadows.glow} inset`,
    },
  },
})

export const selectItemIndicator = style({
  color: colors.accent,
  marginLeft: "auto",
})

export const selectIcon = style({
  color: colors.textMuted,
  display: "inline-flex",
})
