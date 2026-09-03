import { style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontFamilies,
  fontSizes,
  space,
} from "@/styles/theme"

export const page = style({
  alignItems: "center",
  background: colors.background,
  boxSizing: "border-box",
  color: colors.text,
  display: "flex",
  flexDirection: "column",
  gap: space.lg,
  justifyContent: "center",
  minHeight: "100svh",
  padding: space.xl,
  position: "relative",
  textAlign: "center",
  selectors: {
    // The spine arrives from above and terminates short of the content:
    // the one grammar bend the failure state is allowed.
    "&::before": {
      content: "",
      position: "absolute",
      top: 0,
      left: "50%",
      width: "1px",
      height: "calc(50% - 160px)",
      background: colors.hairline,
    },
    "&::after": {
      content: "",
      position: "absolute",
      top: "calc(50% - 160px)",
      left: "50%",
      width: "1px",
      height: "20px",
      background: colors.accent,
    },
  },
})

export const kicker = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.mono,
  fontSize: fontSizes.bodySm,
  letterSpacing: "0.3em",
  margin: 0,
  position: "relative",
  textTransform: "uppercase",
})

export const code = style({
  color: colors.text,
  fontSize: "clamp(3rem, 8vw, 6rem)",
  lineHeight: 1,
  margin: 0,
  position: "relative",
})

export const subtitle = style({
  color: colors.textMuted,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  margin: 0,
  position: "relative",
})

export const homeLink = style({
  color: colors.accent,
  fontFamily: fontFamilies.mono,
  fontSize: "0.875rem",
  letterSpacing: "0.06em",
  marginTop: space.sm,
  position: "relative",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: `color ${durations.normal}`,
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
})
