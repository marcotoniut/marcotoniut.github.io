import { style } from "@vanilla-extract/css"
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  space,
} from "@/styles/theme"

export const main = style({
  width: "100%",
  flex: "0 1 auto",
  maxWidth: "1080px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: space.xl,
  minHeight: "auto",
  marginBlock: "auto",
})

export const title = style({
  margin: 0,
  lineHeight: 1.15,
  fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
  textShadow: "0 20px 60px rgba(10, 12, 18, 0.45)",
})

export const kicker = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: fontSizes.bodySm,
  letterSpacing: "0.08em",
  lineHeight: lineHeights.bodySm,
  margin: 0,
  textTransform: "uppercase",
})

export const primaryNav = style({
  alignItems: "baseline",
  display: "flex",
  flexWrap: "wrap",
  gap: space.lg,
})

export const navLink = style({
  color: colors.text,
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.h3,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  textDecoration: "none",
  transition: "color 0.2s, transform 0.2s",
  ":hover": {
    color: colors.accent,
  },
})

export const navSeparator = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.h3,
  userSelect: "none",
})

export const projects = style({
  display: "flex",
  flexDirection: "column",
  gap: space.lg,
  width: "100%",
})

const projectCardBase = style({
  color: "inherit",
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
  padding: space.xl,
  textDecoration: "none",
  transition: "border-color 0.2s, filter 0.2s",
  width: "100%",
  boxSizing: "border-box",
})

export const projectCardGb = style([
  projectCardBase,
  {
    background: "#34102f18",
    border: "1px solid #74301550",
    position: "relative",
    overflow: "hidden",
    selectors: {
      "&::before": {
        content: "",
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(#74301518 1px, transparent 1px),
          linear-gradient(90deg, #74301518 1px, transparent 1px)
        `,
        backgroundSize: "12px 12px",
        pointerEvents: "none",
      },
      "&:hover": {
        borderColor: "#c69052",
        background: "#34102f33",
      },
    },
  },
])

export const projectCardSonic = style([
  projectCardBase,
  {
    border: "1px solid #28f0ff40",
    selectors: {
      "&:hover": {
        borderColor: "#28f0ff",
        background: "rgba(40, 240, 255, 0.04)",
      },
    },
  },
])

export const projectTitle = style({
  fontFamily: fontFamilies.heading,
  fontSize: fontSizes.bodyLg,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h3,
  lineHeight: lineHeights.h3,
  margin: 0,
  position: "relative",
})

export const projectKicker = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  margin: 0,
  position: "relative",
  textTransform: "uppercase",
})

export const projectHint = style({
  color: colors.textMuted,
  fontSize: fontSizes.bodySm,
  margin: 0,
  position: "relative",
})
