import { style } from "@vanilla-extract/css"

import { fontFamily } from "@/styles/theme"

export const redirectWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100svh",
  fontFamily,
})
