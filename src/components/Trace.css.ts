import { style } from "@vanilla-extract/css"
import { colors } from "@/styles/theme"

export const segment = style({
  background: colors.accent,
  height: "56px",
  left: "-1px",
  opacity: 0.9,
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  width: "1px",
  willChange: "transform",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      display: "none",
    },
  },
})
