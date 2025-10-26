import { globalStyle } from "@vanilla-extract/css"

import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  space,
} from "./theme"
import { themeVars } from "./theme.css"

globalStyle("body", {
  backgroundColor: themeVars.color.background,
  color: themeVars.color.textPrimary,
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  lineHeight: lineHeights.body,
  letterSpacing: letterSpacing.body,
  fontWeight: fontWeights.body.regular,
  margin: 0,
})

globalStyle("h1, h2, h3, h4, h5, h6, .heading", {
  fontFamily: fontFamilies.heading,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h2,
  lineHeight: lineHeights.h2,
  marginBlock: space.small,
})

globalStyle("h1, .heading-hero", {
  fontSize: fontSizes.h1,
  fontWeight: fontWeights.heading.bold,
  letterSpacing: letterSpacing.h1,
  lineHeight: lineHeights.h1,
  marginBlock: space.default,
})

globalStyle("h2, .heading-lg", {
  fontSize: fontSizes.h2,
  fontWeight: fontWeights.heading.regular,
  letterSpacing: letterSpacing.h2,
  lineHeight: lineHeights.h2,
  marginBlock: `${space.default} ${space.small}`,
})

globalStyle("h3, h4, h5, h6, .heading-md", {
  fontSize: fontSizes.h3,
  lineHeight: lineHeights.h3,
  letterSpacing: letterSpacing.h3,
})

globalStyle("p, ul, ol, dl", {
  marginBlock: `${space.small} ${space.default}`,
})

globalStyle("p, ul, ol, li, dd, dt", {
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.body,
  lineHeight: lineHeights.body,
  letterSpacing: letterSpacing.body,
})

globalStyle("small", {
  fontSize: fontSizes.bodySm,
  lineHeight: lineHeights.bodySm,
  letterSpacing: letterSpacing.bodySm,
})

globalStyle("button, input, select, textarea", {
  fontFamily: fontFamilies.body,
  fontSize: fontSizes.ui,
  fontWeight: fontWeights.ui.medium,
  letterSpacing: "0.01em",
})

globalStyle("a", {
  color: themeVars.color.accent,
  textDecoration: "none",
})

globalStyle("a:hover", {
  textDecoration: "underline",
})

globalStyle("a:visited", {
  color: themeVars.color.accent,
})

globalStyle("code, pre, kbd, samp", {
  fontFamily: fontFamilies.mono,
})
