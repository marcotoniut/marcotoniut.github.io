import { globalStyle, style } from "@vanilla-extract/css"
import { isPDFPrinting } from "../../../env"
import {
  colors,
  fontFamilies,
  fontWeights,
  letterSpacing,
  space,
} from "../../../styles/theme"

const dataSizeA4 = '[data-size="A4"]'
const maxWidth = 1200
const cvBodyFamily =
  '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
const printHeadingFamily =
  '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

export const headerCn = style({
  display: "flex",
  gap: space.xxl,
  margin: "0 auto",
  alignItems: "baseline",
  maxWidth,
  paddingBottom: space.small,
  paddingInline: space.xxl,
  paddingTop: space.default,
})

export const cvCn = style({
  fontFamily: fontFamilies.heading,
  fontSize: "1rem",
  fontWeight: fontWeights.heading.bold,
  letterSpacing: letterSpacing.h3,
})

export const docCn = style({
  color: colors.text,
  display: "flex",
  flex: 1,
  fontFamily: cvBodyFamily,
  fontSize: "0.9rem",
  lineHeight: 1.5,
  letterSpacing: "0em",
  gap: space.xxxl,
  margin: "0 auto",
  maxWidth,
  paddingBlock: space.small,
  paddingInline: space.xxl,
})

export const nameCn = style({
  marginTop: space.default,
  marginBottom: space.none,
  color: colors.action, // highlight your name
  fontFamily: fontFamilies.heading,
  fontSize: "clamp(1.85rem, 3vw, 2.3rem)",
  fontWeight: fontWeights.heading.bold,
  letterSpacing: "-0.008em",
  lineHeight: 1.05,
})

export const professionCn = style({
  marginTop: space.xs,
  marginBottom: space.none,
  fontFamily: cvBodyFamily,
  fontSize: "0.95rem",
  fontWeight: fontWeights.body.medium,
  letterSpacing: "0.01em",
})

export const pictureCn = style({
  display: "inline-flex",
  overflow: "hidden",
  borderRadius: "50%",
})

export const paragraphCn = style({})
globalStyle(`${paragraphCn} > *`, { marginTop: space.small })

export const highlightsCn = style({
  listStyle: "disc inside",
  padding: 0,
  lineHeight: 1.5,
})
globalStyle(`${highlightsCn} li + li`, { marginTop: "4px" })

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
  marginTop: space.xl,
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
  fontSize: "0.98rem",
  fontWeight: fontWeights.body.medium,
  gap: space.small,
  marginBottom: space.small,
  marginTop: space.small,
})

// Sidebar accent
export const asideCn = style({
  padding: space.default,
  maxWidth: 350,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: colors.sidebarBg,
  borderRadius: space.small,
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
  fontSize: "0.85rem",
  lineHeight: 1.4,
  margin: "0 auto",
  maxWidth,
  paddingBlock: space.small,
})

export const pdfIsPrintingCn = style({
  fontFamily: cvBodyFamily,
  fontSize: "0.95rem",
})

// PDF layout adjustments
if (isPDFPrinting()) {
  const PAGE_COUNT = 3

  globalStyle(`body`, {
    height: `${PAGE_COUNT * 100}vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  })

  globalStyle(`${docCn}${dataSizeA4}`, {
    height: `${PAGE_COUNT * 100}vh`,
    paddingBlock: space.none,
  })

  globalStyle(docCn, {
    fontFamily: cvBodyFamily,
    fontSize: "9.7pt",
    lineHeight: 1.18,
    letterSpacing: "0em",
    gap: "1.2cm",
    paddingInline: 0,
  })

  globalStyle(
    `${docCn} p, ${docCn} ul, ${docCn} ol, ${docCn} li, ${docCn} dd, ${docCn} dt`,
    {
      fontFamily: cvBodyFamily,
      fontSize: "9.7pt",
      lineHeight: 1.18,
      letterSpacing: "0em",
      marginBlock: 0,
    },
  )

  globalStyle(`${docCn} ul`, {
    marginBlock: 0,
    paddingInlineStart: "14pt",
    listStylePosition: "outside",
  })

  globalStyle(`${docCn} li`, {
    marginBlock: 0,
    lineHeight: 1.18,
    breakInside: "avoid",
  })

  globalStyle(`${docCn} h2`, {
    color: colors.text,
    fontFamily: printHeadingFamily,
    fontSize: "12.8pt",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
    textTransform: "uppercase",
    marginTop: "6pt",
    marginBottom: "2pt",
    paddingBottom: "2pt",
    borderBottom: "0.3pt solid rgba(24, 26, 35, 0.28)",
  })

  globalStyle(`${docCn} h3`, {
    fontFamily: printHeadingFamily,
    fontSize: "10.8pt",
    fontWeight: 600,
    letterSpacing: "-0.005em",
    lineHeight: 1.25,
    marginBottom: "2pt",
    textTransform: "none",
  })

  globalStyle(`${docCn} em`, {
    fontFamily: cvBodyFamily,
    fontSize: "9.6pt",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "-0.008em",
    color: "rgba(24, 26, 35, 0.85)",
  })

  globalStyle(`${docCn} hr`, {
    display: "block",
    height: 0,
    border: "none",
    borderBottom: "0.3pt solid rgba(24, 26, 35, 0.28)",
    margin: "2pt 0 6pt",
  })

  globalStyle(nameCn, {
    fontFamily: printHeadingFamily,
    fontSize: "16.8pt",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    lineHeight: 1.12,
    textTransform: "uppercase",
  })

  globalStyle(professionCn, {
    fontFamily: cvBodyFamily,
    fontSize: "9.8pt",
    fontWeight: 500,
    letterSpacing: "-0.002em",
    lineHeight: 1.2,
  })

  globalStyle(cvCn, {
    fontFamily: printHeadingFamily,
    fontSize: "9pt",
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
  })

  globalStyle(sectionCn, {
    marginTop: "12pt",
    marginBottom: 0,
  })

  globalStyle(`${docCn} main article section`, {
    marginBottom: "6pt",
  })

  globalStyle(`${docCn} main article section:last-of-type`, {
    marginBottom: 0,
  })

  globalStyle(skillsListCn, {
    columnCount: 2,
    columnGap: "12pt",
    listStylePosition: "outside",
    paddingInlineStart: "14pt",
  })

  globalStyle(`${skillsListCn} li`, {
    marginBlock: 0,
    lineHeight: 1.18,
  })

  globalStyle(highlightsCn, {
    listStylePosition: "outside",
    paddingInlineStart: "14pt",
    lineHeight: 1.18,
    marginBlock: 0,
  })

  globalStyle(institutionCn, {
    fontFamily: cvBodyFamily,
    fontSize: "10.5pt",
    fontWeight: 500,
    letterSpacing: "-0.004em",
    lineHeight: 1.25,
    marginBottom: "2pt",
  })

  globalStyle(linkCn, {
    color: "#2563EB",
    textDecoration: "underline",
    fontWeight: 500,
  })

  globalStyle(link2Cn, {
    color: "#2563EB",
    textDecoration: "underline",
    fontWeight: 500,
  })

  globalStyle(`${docCn} a`, {
    color: "#2563EB",
    textDecoration: "underline",
  })

  globalStyle(`${docCn} a:hover`, {
    color: "#1d4ed8",
  })

  globalStyle(socialLinksCn, {
    marginTop: "4pt",
  })

  globalStyle(footerCn, {
    fontFamily: cvBodyFamily,
    fontSize: "9pt",
    letterSpacing: "-0.004em",
  })
}

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

const docDataSizeCn = `${docCn}${dataSizeA4}`
globalStyle(docDataSizeCn, {
  fontSize: "9pt",
  maxWidth: "210mm",
})

globalStyle(`${docDataSizeCn} aside`, {
  maxWidth: "75mm",
  minWidth: "60mm",
})
