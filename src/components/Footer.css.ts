import { globalStyle, style } from "@vanilla-extract/css"
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
  borderTop: `1px solid ${colors.borderMuted}`,
  color: colors.textMuted,
  display: "flex",
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.bodySm,
  fontWeight: fontWeights.body.medium,
  justifyContent: "center",
  paddingBlock: space.sm,
  width: "100%",
})

export const content = style({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: space.sm,
  lineHeight: "1.5",
  textAlign: "center",
})

export const copyright = style({
  margin: 0,
  fontSize: fontSizes.bodySm,
})

export const iconRow = style({
  display: "flex",
  alignItems: "center",
  gap: space.md,
})

export const iconLink = style({
  color: colors.textMuted,
  display: "inline-flex",
  transition: "color 0.2s",
  ":hover": {
    color: themeVars.color.accent,
  },
})

globalStyle(`${iconLink} > svg`, {
  width: "16px",
  height: "16px",
})

export const aiPolicy = style({
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
