import { style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontFamilies,
  gridSurface,
  media,
  space,
} from "@/styles/theme"

export const footer = style({
  alignSelf: "stretch",
  color: colors.textMuted,
  margin: "0 auto",
  maxWidth: "1080px",
  width: "100%",
})

export const cells = style({
  ...gridSurface,
  border: `1px solid ${colors.hairline}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  "@media": {
    [media.md]: {
      gridTemplateColumns: "1fr",
    },
  },
})

export const cell = style({
  borderRight: `1px solid ${colors.hairline}`,
  display: "flex",
  flexDirection: "column",
  gap: space.xs,
  padding: `${space.md} ${space.lg}`,
  selectors: {
    "&:last-child": {
      borderRight: "none",
    },
  },
  "@media": {
    [media.md]: {
      borderRight: "none",
      selectors: {
        "&:not(:last-child)": {
          borderBottom: `1px solid ${colors.hairline}`,
        },
      },
    },
  },
})

export const cellLabel = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.6875rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
})

export const emailLink = style({
  color: colors.accent,
  fontFamily: fontFamilies.mono,
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: `color ${durations.normal}`,
  width: "fit-content",
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
})

export const linkRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: `${space.xs} ${space.lg}`,
})

export const cellLink = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.8125rem",
  textDecoration: "none",
  transition: `color ${durations.normal}`,
  ":hover": {
    color: colors.accent,
  },
})

export const colophonLine = style({
  fontFamily: fontFamilies.mono,
  fontSize: "0.8125rem",
  margin: 0,
})

export const aiPolicy = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clipPath: "inset(100%)",
  whiteSpace: "nowrap",
  border: 0,
})

export const link = style({
  color: colors.accent,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
})
