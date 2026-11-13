import { style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontFamilies,
  fontSizes,
  fontWeights,
  space,
} from "@/styles/theme"

export const headerContainer = style({
  borderBottom: `1px solid ${colors.hairline}`,
  margin: "0 auto",
  maxWidth: "1080px",
  paddingBottom: space.md,
  width: "100%",
})

export const header = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: `${space.sm} ${space.lg}`,
  justifyContent: "space-between",
  width: "100%",
})

export const wordmark = style({
  color: colors.text,
  fontFamily: fontFamilies.mono,
  fontSize: "0.8125rem",
  fontWeight: "500",
  letterSpacing: "0.1em",
  textDecoration: "none",
  transition: `color ${durations.normal}`,
  ":hover": {
    color: colors.accent,
  },
})

export const nav = style({
  display: "flex",
  gap: `clamp(${space.md}, 2.5vw, ${space.xl})`,
  marginLeft: "auto",
})

export const navLink = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.8125rem",
  letterSpacing: "0.08em",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: `color ${durations.normal}`,
  ":hover": {
    color: colors.accent,
  },
})

export const controlBar = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: space.md,
  justifyContent: "flex-end",
})

export const languageSwitch = style({
  alignItems: "center",
  display: "inline-flex",
  gap: space.xs,
})

export const languageLink = style({
  borderBottom: "1px solid transparent",
  color: colors.textMuted,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.ui,
  fontWeight: fontWeights.ui.medium,
  letterSpacing: "0.08em",
  paddingBlock: space.xs,
  paddingInline: space.xs,
  textDecoration: "none",
  transition: `color ${durations.normal} ease, border-color ${durations.normal} ease`,
  ":hover": {
    color: colors.accent,
  },
  selectors: {
    '&[aria-current="page"]': {
      borderBottomColor: colors.accent,
      color: colors.text,
    },
  },
})
