import { globalStyle, style } from "@vanilla-extract/css"
import { colors, shadows, space } from "@/styles/theme"

const circleSize = "2.25rem"

export const base = style({
  position: "relative",
  display: "inline-grid",
  gridAutoFlow: "column",
  gridTemplateColumns: `${circleSize} 0fr`,
  alignItems: "center",
  columnGap: 0,
  padding: 0,
  height: circleSize,
  borderRadius: "50%",
  overflow: "hidden",
  textDecoration: "none",
  fontFamily: "'Cookie', cursive",
  fontWeight: 600,
  lineHeight: 1.1,
  letterSpacing: "0.01em",
  transition:
    "grid-template-columns 320ms ease, border-radius 320ms ease, padding 320ms ease",

  color: colors.buyMeACoffeeText,
  WebkitTextFillColor: colors.buyMeACoffeeText,

  boxShadow: `${shadows.soft}, ${shadows.subtle}`,
  backgroundColor: colors.buyMeACoffeeBackground,

  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background: colors.buyMeACoffeeAccent,

      WebkitMaskImage:
        "conic-gradient(from 180deg at 50% 50%, rgba(0,0,0,0) 0 0.5turn, rgba(0,0,0,1) 0.5turn 1turn)",
      maskImage:
        "conic-gradient(from 180deg at 50% 50%, rgba(0,0,0,0) 0 0.5turn, rgba(0,0,0,1) 0.5turn 1turn)",
      WebkitMaskSize: "200% 200%",
      maskSize: "200% 200%",
      WebkitMaskPosition: "0% 50%",
      maskPosition: "0% 50%",
      transition:
        "mask-image 780ms ease-out, -webkit-mask-image 780ms ease-out, mask-position 1s ease, -webkit-mask-position 1s ease",
      zIndex: 0,
    },

    "&:hover": {
      gridTemplateColumns: `${circleSize} 1fr`,
      columnGap: space.xs,
      paddingInlineStart: "0.5rem",
      paddingInlineEnd: "1rem",
      borderRadius: "999px",
    },

    "&:focus-visible": {
      outline: `2px solid ${colors.focusRing}`,
      outlineOffset: "4px",
      gridTemplateColumns: `${circleSize} 1fr`,
      columnGap: space.xs,
      paddingInlineStart: "0.5rem",
      paddingInlineEnd: "1rem",
      borderRadius: "999px",
    },

    "&:hover::before, &:focus-visible::before": {
      WebkitMaskImage:
        "conic-gradient(from 210deg at 50% 50%, rgba(0,0,0,0) 0 0.5turn, rgba(0,0,0,1) 0.5turn 1turn)",
      maskImage:
        "conic-gradient(from 210deg at 50% 50%, rgba(0,0,0,0) 0 0.5turn, rgba(0,0,0,1) 0.5turn 1turn)",
      WebkitMaskPosition: "75% 50%",
      maskPosition: "75% 50%",
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
  zIndex: 1,
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "contain",
  transition: "transform 320ms ease",
  selectors: {
    [`${base}:hover &`]: {
      transform: "translateX(-0.1rem)",
    },
    [`${base}:focus-visible &`]: {
      transform: "translateX(-0.1rem)",
    },
  },
})

export const label = style({
  position: "relative",
  zIndex: 1,
  fontSize: "1.1em", // 🔹 slightly larger relative font size
  fontWeight: 600,
  whiteSpace: "nowrap",
  overflow: "hidden",
  opacity: 0,
  transform: "translateX(-0.5rem)",
  transition: "opacity 240ms ease 120ms, transform 320ms ease",
  selectors: {
    [`${base}:hover &`]: {
      opacity: 1,
      transform: "translateX(0)",
    },
    [`${base}:focus-visible &`]: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
})
