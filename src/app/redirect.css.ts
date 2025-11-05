import { style } from "@vanilla-extract/css"
import { centredContainer } from "@/styles/layouts.css"
import { fontFamily } from "@/styles/theme"

export const redirectWrapper = style([
  centredContainer,
  {
    fontFamily,
  },
])
