import { style } from "@vanilla-extract/css"
import {
  colors,
  durations,
  fontFamilies,
  fontSizes,
  fontWeights,
  space,
} from "@/styles/theme"
import { withAlpha } from "@/utils/color"

const gb = colors.gb

export const page = style({
  alignItems: "center",
  background: gb.dark,
  boxSizing: "border-box",
  color: gb.pale,
  display: "flex",
  flexDirection: "column",
  gap: space.lg,
  justifyContent: "center",
  minHeight: "100svh",
  padding: space.xl,
  position: "relative",
  textAlign: "center",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      inset: 0,
      backgroundImage: `
        linear-gradient(${withAlpha(gb.mid, 0.15)} 1px, transparent 1px),
        linear-gradient(90deg, ${withAlpha(gb.mid, 0.15)} 1px, transparent 1px)
      `,
      backgroundSize: "12px 12px",
      pointerEvents: "none",
    },
  },
})

export const kicker = style({
  color: gb.lite,
  fontFamily: fontFamilies.mono,
  fontSize: fontSizes.bodySm,
  letterSpacing: "0.3em",
  margin: 0,
  position: "relative",
  textTransform: "uppercase",
})

export const code = style({
  fontSize: "clamp(3rem, 8vw, 6rem)",
  lineHeight: 1,
  margin: 0,
  position: "relative",
})

export const subtitle = style({
  color: gb.lite,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  fontWeight: fontWeights.body.regular,
  margin: 0,
  position: "relative",
})

export const homeLink = style({
  background: withAlpha(gb.lite, 0.2),
  border: `1px solid ${gb.lite}`,
  borderRadius: "999px",
  boxShadow: `0 4px 0 0 ${gb.mid}`,
  color: gb.pale,
  display: "inline-block",
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.bodySm,
  fontWeight: fontWeights.body.medium,
  letterSpacing: "0.04em",
  marginTop: space.sm,
  padding: `${space.sm} ${space.xl}`,
  position: "relative",
  textDecoration: "none",
  transition: `transform ${durations.fast}, box-shadow ${durations.fast}`,
  ":hover": {
    transform: "translateY(2px)",
    boxShadow: `0 2px 0 0 ${gb.mid}`,
  },
  ":active": {
    transform: "translateY(4px)",
    boxShadow: "none",
  },
})
