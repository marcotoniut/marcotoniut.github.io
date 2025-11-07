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

export const main = style({
  width: "100%",
  flex: "0 1 auto",
  maxWidth: "720px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: space.xl,
  textAlign: "center",
  minHeight: "auto",
  marginBlock: "auto",
})

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
  textShadow: "0 20px 60px rgba(10, 12, 18, 0.45)",
})

export const description = style({
  margin: 0,
  lineHeight: lineHeights.body,
  fontSize: "1.25rem",
  maxWidth: "42rem",
  color: colors.textMuted,
})

export const grid = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: space.large,
  justifyItems: "center",
  alignItems: "center",
})

const cardBase = style({
  padding: space.large,
  textAlign: "center",
  color: "inherit",
  border: `1px solid ${colors.borderMuted}`,
  transition:
    "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  width: "min(100%, 320px)",
  background: colors.surfaceElevated,
  boxShadow: shadows.subtle,
  display: "flex",
  flexDirection: "column",
  gap: space.small,
  alignItems: "center",
})

export const cardInteractive = style([
  cardBase,
  {
    textDecoration: "none",
    cursor: "pointer",
    selectors: {
      "&:hover, &:focus, &:active": {
        color: colors.accent,
        borderColor: colors.accent,
        boxShadow: shadows.soft,
        transform: "translateY(-4px)",
      },
    },
  },
])

export const card = cardBase

export const cardLabel = style({
  fontSize: "1.25rem",
  letterSpacing: "0.04em",
  margin: 0,
  textTransform: "uppercase",
})

export const cardHint = style({
  color: colors.textMuted,
  fontSize: fontSizes.body,
  margin: 0,
})

export const cardHeading = style({
  alignItems: "center",
  display: "inline-flex",
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.xl,
  fontWeight: fontWeights.heading.regular,
  gap: space.small,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  margin: 0,
})

export const projectHeading = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.xl,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  margin: 0,
  whiteSpace: "nowrap",
})

export const actionRow = style({
  display: "flex",
  gap: space.small,
  alignItems: "center",
  justifyContent: "center",
})

export const footerLink = style({
  color: "inherit",
  textDecoration: "none",
})
