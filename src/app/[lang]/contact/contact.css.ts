import { style } from "@vanilla-extract/css"
import { pageContainer, pageHeader } from "@/styles/layouts.css"
import { themeVars } from "@/styles/theme"

export { pageContainer as container, pageHeader }

export const main = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "800px",
  width: "100%",
  margin: "0 auto",
  padding: "2rem 0",
  gap: "2rem",
})

export const contentHeader = style({
  textAlign: "center",
  width: "100%",
})

export const title = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: themeVars.color.textPrimary,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

export const description = style({
  fontSize: "1.125rem",
  color: themeVars.color.textMuted,
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.6,
})

export const backLink = style({
  fontSize: "0.875rem",
  color: themeVars.color.accent,
  textDecoration: "none",
  transition: "color 0.2s",

  ":hover": {
    color: themeVars.color.textPrimary,
  },
})

export const footer = style({
  marginTop: "auto",
  width: "100%",
})
