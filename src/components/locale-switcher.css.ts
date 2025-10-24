import { keyframes, style } from "@vanilla-extract/css"

import {
  colors,
  fontFamily,
  fontSizes,
  radii,
  shadows,
  space,
} from "@/styles/theme"

export const controlBar = style({
  position: "fixed",
  top: space.xl,
  right: space.xl,
  display: "flex",
  alignItems: "center",
  gap: space.small,
  zIndex: 1000,
})

export const selectTrigger = style({
  alignItems: "center",
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.md,
  boxShadow: shadows.subtle,
  color: colors.text,
  cursor: "pointer",
  display: "inline-flex",
  fontFamily,
  fontSize: fontSizes.large,
  fontWeight: 500,
  gap: space.xs,
  height: "36px",
  justifyContent: "space-between",
  minWidth: "96px",
  paddingInline: space.default,
  transition:
    "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  ":hover": {
    borderColor: colors.action,
    boxShadow: `${shadows.subtle}, ${shadows.glow}`,
  },
  ":focus-visible": {
    outline: "none",
    boxShadow: `${shadows.glow}, ${shadows.subtle}`,
    borderColor: colors.action,
  },
  selectors: {
    '&[data-state="open"]': {
      borderColor: colors.action,
      boxShadow: `${shadows.soft}, ${shadows.glow}`,
    },
  },
})

const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(-4px)" },
  to: { opacity: 1, transform: "translateY(0)" },
})

export const selectContent = style({
  backgroundColor: colors.surfaceElevated,
  border: `1px solid ${colors.border}`,
  borderRadius: radii.lg,
  boxShadow: shadows.soft,
  minWidth: "var(--radix-select-trigger-width)",
  overflow: "hidden",
  zIndex: 2000,
  animation: `${fadeIn} 120ms ease`,
})

export const selectViewport = style({
  padding: space.xs,
})

export const selectItem = style({
  alignItems: "center",
  borderRadius: radii.sm,
  color: colors.text,
  cursor: "pointer",
  display: "flex",
  fontFamily,
  fontSize: fontSizes.large,
  gap: space.small,
  lineHeight: 1,
  paddingInline: space.default,
  paddingBlock: "8px",
  position: "relative",
  selectors: {
    "&[data-highlighted]": {
      backgroundColor: colors.surface,
      color: colors.action,
    },
    '&[data-state="checked"]': {
      backgroundColor: colors.surface,
      color: colors.action,
      boxShadow: `${shadows.glow} inset`,
    },
  },
})

export const selectItemIndicator = style({
  marginLeft: "auto",
  color: colors.action,
})

export const selectIcon = style({
  color: colors.textMuted,
  display: "inline-flex",
})
