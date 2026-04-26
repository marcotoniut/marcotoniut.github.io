import { keyframes, style } from "@vanilla-extract/css"
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  shadows,
  space,
} from "@/styles/theme"

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
  transition: "color 0.2s",

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
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.ui,
  fontWeight: fontWeights.ui.medium,
  gap: space.xs,
  height: "36px",
  justifyContent: "space-between",
  minWidth: "96px",
  paddingInline: space.md,
  transition:
    "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  ":hover": {
    borderColor: colors.accent,
    boxShadow: `${shadows.subtle}, ${shadows.glow}`,
  },
  ":focus-visible": {
    outline: "none",
    boxShadow: `${shadows.glow}, ${shadows.subtle}`,
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
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.ui,
  fontWeight: fontWeights.ui.medium,
  gap: space.sm,
  lineHeight: 1,
  paddingBlock: "8px",
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
