import { style } from "@vanilla-extract/css"
import { themeVars } from "@/styles/theme"

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  maxWidth: "600px",
  width: "100%",
})

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const label = style({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: themeVars.color.textPrimary,
})

export const required = style({
  color: themeVars.color.accent,
})

export const input = style({
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  border: `1px solid ${themeVars.color.border}`,
  backgroundColor: themeVars.color.background,
  color: themeVars.color.textPrimary,
  transition: "border-color 0.2s, box-shadow 0.2s",

  ":focus": {
    outline: "none",
    borderColor: themeVars.color.accent,
    boxShadow: `0 0 0 3px ${themeVars.color.accent}33`,
  },

  "::placeholder": {
    color: themeVars.color.textMuted,
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "120px",
    fontFamily: "inherit",
  },
])

export const button = style({
  alignSelf: "flex-start",
  backgroundColor: themeVars.color.accent,
  border: "none",
  color: themeVars.color.background,
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 600,
  padding: "0.875rem 2rem",
  transition: "transform 0.2s, opacity 0.2s",

  ":hover": {
    transform: "translateY(-2px)",
  },

  ":active": {
    transform: "translateY(0)",
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    transform: "none",
  },
})
