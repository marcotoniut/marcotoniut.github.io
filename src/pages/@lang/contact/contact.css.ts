import { style } from "@vanilla-extract/css"
import { pageContainer } from "@/styles/layouts.css"
import {
  durations,
  fontFamilies,
  gridSurface,
  media,
  space,
  themeVars,
} from "@/styles/theme"

export { pageContainer as container }

export const main = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "800px",
  width: "100%",
  margin: "0 auto",
  padding: "2rem 0",
  gap: "2rem",
})

export const title = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: themeVars.color.textPrimary,

  "@media": {
    [media.md]: {
      fontSize: "2rem",
    },
  },
})

export const description = style({
  fontSize: "1.125rem",
  color: themeVars.color.textMuted,
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.6,
})

export const emailPanel = style({
  ...gridSurface,
  border: `1px solid ${themeVars.color.hairline}`,
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
  padding: `clamp(${space.xl}, 4vw, 48px)`,
  width: "100%",
})

export const panelLabel = style({
  color: themeVars.color.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.6875rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  selectors: {
    "&:not(:first-child)": {
      marginTop: space.xl,
    },
  },
})

export const emailLink = style({
  color: themeVars.color.accent,
  fontFamily: fontFamilies.mono,
  fontSize: "clamp(1.125rem, 3vw, 1.75rem)",
  overflowWrap: "anywhere",
  textDecoration: "none",
  transition: `color ${durations.normal}`,
  width: "fit-content",
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "6px",
  },
})

export const elsewhereRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: `${space.sm} ${space.xxl}`,
})

export const elsewhereLink = style({
  color: themeVars.color.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: `color ${durations.normal}`,
  ":hover": {
    color: themeVars.color.accent,
  },
})
