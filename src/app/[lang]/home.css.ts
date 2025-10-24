import { style } from "@vanilla-extract/css"

import { colors, fontSizes, radii, shadows, space } from "@/styles/theme"

export const container = style({
  minHeight: "100svh",
  width: "100%",
  padding: `${space.xl} ${space.xxl}`,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: space.xl,
  background: `radial-gradient(circle at top left, rgba(86, 243, 201, 0.08), transparent 55%), ${colors.background}`,
  color: colors.text,
})

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

export const footer = style({
  width: "min(100%, 960px)",
  alignSelf: "stretch",
  marginInline: "auto",
  display: "flex",
  paddingBlock: space.small,
  borderTop: `1px solid ${colors.border}`,
  justifyContent: "center",
  alignItems: "center",
  color: colors.textMuted,
  fontSize: fontSizes.small,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
})

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "clamp(3rem, 8vw, 4.5rem)",
  textShadow: "0 20px 60px rgba(10, 12, 18, 0.45)",
})

export const description = style({
  margin: 0,
  lineHeight: 1.6,
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
  padding: space.xl,
  textAlign: "center",
  color: "inherit",
  border: `1px solid ${colors.borderMuted}`,
  borderRadius: radii.lg,
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
  margin: 0,
  fontSize: "1.25rem",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
})

export const cardHint = style({
  margin: 0,
  fontSize: fontSizes.large,
  color: colors.textMuted,
})

export const cardHeading = style({
  margin: 0,
  fontSize: "1.5rem",
  display: "inline-flex",
  alignItems: "center",
  gap: space.small,
})

export const cardHeadingArrow = style({
  transition: "transform 0.2s ease",
  selectors: {
    [`${cardInteractive}:hover &`]: {
      transform: "translateX(4px)",
    },
  },
})

export const projectHeading = style({
  margin: 0,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
})

export const actionRow = style({
  display: "flex",
  gap: space.small,
  alignItems: "center",
  justifyContent: "center",
})

export const iconLink = style({
  padding: space.default,
  color: colors.text,
  border: `1px solid ${colors.borderMuted}`,
  borderRadius: radii.lg,
  background: colors.surfaceElevated,
  boxShadow: shadows.subtle,
  transition:
    "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "48px",
  minHeight: "48px",
  selectors: {
    "&:hover, &:focus, &:active": {
      color: colors.accent,
      borderColor: colors.accent,
      boxShadow: shadows.soft,
      transform: "translateY(-4px)",
    },
  },
})

export const projectRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: space.default,
  textAlign: "center",
  flexWrap: "nowrap",
  "@media": {
    "(max-width: 480px)": {
      flexWrap: "wrap",
    },
  },
})

export const footerLink = style({
  color: "inherit",
  textDecoration: "none",
})
