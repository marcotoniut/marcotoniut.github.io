import { globalStyle, style } from "@vanilla-extract/css"
import { colors, shadows, space } from "@/styles/theme"

const whiteSegmentWidth = "2.75rem"

export const base = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: space.xs,
  paddingInlineStart: whiteSegmentWidth,
  paddingInlineEnd: "1rem",
  paddingBlock: "0.5rem",
  borderRadius: "1rem",
  textDecoration: "none",
  fontFamily: "'Cookie', cursive",
  fontWeight: 600,
  lineHeight: 1.1,
  letterSpacing: "0.01em",

  color: colors.buyMeACoffeeText,
  WebkitTextFillColor: colors.buyMeACoffeeText,

  boxShadow: `${shadows.soft}, ${shadows.subtle}`,
  backgroundColor: colors.buyMeACoffeeBackground,

  ":focus-visible": {
    outline: `2px solid ${colors.focusRing}`,
    outlineOffset: "4px",
  },

  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background: colors.buyMeACoffeeAccent,
      WebkitMaskImage:
        "conic-gradient(from 210deg at 50% 50%, rgba(0,0,0,0) 0 0.5turn, rgba(0,0,0,1) 0.5turn 1turn)",
      maskImage:
        "conic-gradient(from 210deg at 50% 50%, rgba(0,0,0,0) 0 0.5turn, rgba(0,0,0,1) 0.5turn 1turn)",
      WebkitMaskSize: "220% 220%",
      maskSize: "220% 220%",
      WebkitMaskPosition: "73% 50%",
      maskPosition: "73% 50%",
      transition:
        "mask-position 2s ease-out, -webkit-mask-position 2s ease-out",
      zIndex: 0,
    },

    "&:hover::before": {
      WebkitMaskPosition: "20% 50%",
      maskPosition: "20% 50%",
    },

    // 🔹 ensure no underline or decoration on hover
    "&:hover": {
      textDecoration: "none",
    },
  },
})

// 🔹 Ensure no underline in any link state
globalStyle(`${base}:link, ${base}:visited, ${base}:hover, ${base}:active`, {
  color: colors.buyMeACoffeeText,
  WebkitTextFillColor: colors.buyMeACoffeeText,
  textDecoration: "none",
})

export const icon = style({
  position: "absolute",
  left: "0.25rem",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  width: "2.25rem",
  height: "auto",
  pointerEvents: "none",
})

export const label = style({
  position: "relative",
  zIndex: 1,
  fontSize: "1.1em", // 🔹 slightly larger relative font size
  fontWeight: 600,
})
