import { globalStyle } from "@vanilla-extract/css"

import { themeVars } from "./theme.css"

globalStyle("body", {
  backgroundColor: themeVars.color.background,
  color: themeVars.color.textPrimary,
})

globalStyle("main", {
  minHeight: "100vh",
})
