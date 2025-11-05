import { style } from "@vanilla-extract/css"
import { themeVars } from "@/styles/theme"

export const footer = style({
  padding: "2rem 1rem",
  marginTop: "auto",
  borderTop: `1px solid ${themeVars.color.border}`,
  backgroundColor: themeVars.color.background,
  color: themeVars.color.textPrimary,
})

export const content = style({
  maxWidth: "48rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  textAlign: "center",
})

export const copyright = style({
  margin: 0,
  fontWeight: 500,
})

export const aiPolicy = style({
  margin: 0,
  color: themeVars.color.textMuted,
  fontSize: "0.8125rem",
})

export const link = style({
  color: themeVars.color.accent,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  transition: "color 0.2s",

  ":hover": {
    color: themeVars.color.textPrimary,
  },
})
