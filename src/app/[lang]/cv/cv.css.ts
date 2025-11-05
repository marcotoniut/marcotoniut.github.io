import { globalStyle, style } from "@vanilla-extract/css"
import { colors, fontFamilies, fontWeights, space } from "../../../styles/theme"

const maxWidth = 1120
const cvBodyFamily =
  '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
const printHeadingFamily =
  '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

const baseFontSize = "1rem"
const baseColumnGap = "1.75rem"
const baseSectionSpacing = "1.5rem"
const baseListSpacing = "0.35rem"
const headingFontSize = "1.2rem"
const subheadingFontSize = "1.05rem"
const nameFontSize = "1.8rem"
const professionFontSize = "0.95rem"
const labelFontSize = "0.8rem"
const listIndent = "1.15rem"

export const baseLineHeight = 1.46

export const headerWrapperCn = style({
  padding: space.large,
})

export const cvCn = style({
  fontFamily: fontFamilies.heading,
  fontSize: labelFontSize,
  fontWeight: fontWeights.heading.bold,
  textTransform: "none",
})

export const docCn = style({
  color: colors.text,
  display: "flex",
  flex: 1,
  fontFamily: cvBodyFamily,
  fontSize: baseFontSize,
  lineHeight: baseLineHeight,
  gap: baseColumnGap,
  margin: "0 auto",
  maxWidth,
  paddingBlock: space.large,
  paddingInline: space.large,
})

export const nameCn = style({
  marginTop: 0,
  marginBottom: space.none,
  color: colors.action, // highlight your name
  fontFamily: fontFamilies.heading,
  fontSize: nameFontSize,
  fontWeight: fontWeights.heading.bold,
  lineHeight: 1.1,
  textTransform: "none",
})

export const professionCn = style({
  marginTop: "0.45rem",
  marginBottom: space.none,
  fontFamily: cvBodyFamily,
  fontSize: professionFontSize,
  fontWeight: fontWeights.body.medium,
})

export const pictureCn = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "50%",
  height: "180px",
})

export const paragraphCn = style({})
globalStyle(`${paragraphCn} > *`, { marginTop: space.small })

export const highlightsCn = style({
  listStyle: "disc inside",
  padding: 0,
  lineHeight: 1.5,
})
globalStyle(`${highlightsCn} li + li`, { marginTop: "0.25rem" })

export const linkCn = style({
  color: colors.action,
  display: "inline-flex",
  gap: space.small,
  fontFamily: cvBodyFamily,
  fontWeight: fontWeights.body.medium,
})

export const socialLinksCn = style({
  display: "flex",
  gap: space.small,
  alignItems: "center",
})

export const profileCn = style({
  alignItems: "center",
  gap: space.xs,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontFamily: cvBodyFamily,
})

export const sectionCn = style({
  breakInside: "avoid",
  pageBreakInside: "avoid",
  marginTop: baseSectionSpacing,
  orphans: 3,
})

export const skillsListCn = style({
  listStyle: "none",
  padding: 0,
})
globalStyle(`${skillsListCn} > li:not(:first-child)`, {
  marginTop: space.small,
})

export const institutionCn = style({
  alignItems: "center",
  display: "flex",
  fontFamily: cvBodyFamily,
  fontSize: subheadingFontSize,
  fontWeight: fontWeights.body.medium,
  gap: space.small,
  marginTop: space.small,
})

// Sidebar accent
export const asideCn = style({
  padding: 0,
  maxWidth: "23rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "transparent",
})

export const link2Cn = style({
  color: colors.action,
  fontFamily: cvBodyFamily,
  fontWeight: fontWeights.body.medium,
})

export const learningHighlightsCn = style({
  listStyle: "inside",
  padding: 0,
  listStyleType: "circle",
})

export const footerCn = style({
  fontFamily: cvBodyFamily,
  fontSize: labelFontSize,
  lineHeight: 1.45,
  margin: "0 auto",
  maxWidth,
  paddingBlock: "1.5rem",
})

export const pdfIsPrintingCn = style({
  fontFamily: cvBodyFamily,
  fontSize: baseFontSize,
})

globalStyle(`${docCn} h2`, {
  color: colors.action,
  fontFamily: printHeadingFamily,
  fontSize: headingFontSize,
  fontWeight: 600,
  textTransform: "none",
  marginTop: "1.1rem",
  marginBottom: "0.5rem",
  paddingBottom: "0.25rem",
  borderBottom: `1px solid ${colors.borderMuted}`,
})

globalStyle(`${docCn} h3`, {
  fontFamily: printHeadingFamily,
  fontSize: subheadingFontSize,
  fontWeight: 600,
})

globalStyle(`${docCn} p`, {
  marginTop: 0,
  marginBottom: "0.55rem",
})

globalStyle(`${docCn} ul`, {
  marginBlock: 0,
  paddingInlineStart: listIndent,
  listStylePosition: "outside",
})

globalStyle(`${docCn} ${skillsListCn}`, {
  paddingInlineStart: 0,
  marginInlineStart: 0,
})

globalStyle(`${docCn} li`, {
  marginBlock: 0,
  lineHeight: baseLineHeight,
})

globalStyle(`${docCn} ul li + li`, {
  marginTop: baseListSpacing,
})

globalStyle(highlightsCn, {
  listStylePosition: "outside",
  paddingInlineStart: listIndent,
})

globalStyle(`${highlightsCn} li + li`, {
  marginTop: baseListSpacing,
})

globalStyle(linkCn, {
  color: colors.action,
  textDecoration: "underline",
  fontWeight: fontWeights.body.medium,
})

globalStyle(link2Cn, {
  color: colors.action,
  textDecoration: "underline",
  fontWeight: fontWeights.body.medium,
})

globalStyle(`${docCn} a:hover`, {
  color: colors.accent,
})

globalStyle("html", {
  fontSize: "100%",
})

globalStyle("body", {
  WebkitPrintColorAdjust: "exact",
  "@media": {
    print: {
      WebkitPrintColorAdjust: "exact",
    },
  },
})

const docMediaCn = `${docCn} @media screen and (max-width: 768px)` as const
globalStyle(docMediaCn, {
  fontSize: "0.85rem",
  display: "block",
})

globalStyle(`${docMediaCn} aside`, {
  marginTop: space.xxxl,
})
