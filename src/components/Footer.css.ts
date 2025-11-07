import { style } from "@vanilla-extract/css"
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  space,
  themeVars,
} from "@/styles/theme"

export const footer = style({
  alignItems: "center",
  alignSelf: "stretch",
  borderTop: `1px solid ${colors.border}`,
  color: colors.textMuted,
  display: "flex",
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.small,
  fontWeight: fontWeights.body.medium,
  justifyContent: "center",
  marginInline: "auto",
  paddingBlock: space.small,
  textTransform: "uppercase",
  width: "min(100%, 960px)",
})

export const content = style({
  maxWidth: "48rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  lineHeight: "1.5",
  textAlign: "center",
})

export const copyright = style({
  margin: 0,
  fontWeight: 500,
  fontSize: fontSizes.small,
})

export const aiPolicy = style({
  // Visually hidden but accessible to screen readers and crawlers
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
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
