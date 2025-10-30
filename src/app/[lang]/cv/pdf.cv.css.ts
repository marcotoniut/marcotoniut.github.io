import { globalStyle } from "@vanilla-extract/css"
import { colors, space } from "@/styles/theme"
import { isPDFPrinting } from "../../../env"
import {
  asideCn,
  baseLineHeight,
  docCn,
  highlightsCn,
  linkCn,
  sectionCn,
  skillsListCn,
  socialLinksCn,
} from "./cv.css"

const dataSizeA4 = '[data-size="A4"]'
const printScale = process.env.NEXT_PUBLIC_PRINT_SCALE ?? "75%"
const printColumnGap = "1.35rem"
const printPaddingInline = "1.5rem"
const printPaddingBlock = "4rem"
const printSectionSpacing = "1rem"
const printListSpacing = "0.12rem"
const printListIndent = "0.72rem"
const printDivider = `0.0625rem solid ${colors.borderMuted}`

if (isPDFPrinting()) {
  const docDataSizeCn = `${docCn}${dataSizeA4}`
  globalStyle(docDataSizeCn, {
    maxWidth: "210mm",
  })

  globalStyle(`${docDataSizeCn} aside`, {
    maxWidth: "75mm",
    minWidth: "60mm",
  })

  const PAGE_COUNT = 3

  globalStyle("html", { fontSize: printScale })

  globalStyle(`body`, {
    height: `${PAGE_COUNT * 100}vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  })

  globalStyle(`${docCn}${dataSizeA4}`, {
    height: `${PAGE_COUNT * 100}vh`,
    paddingBlock: space.none,
  })

  globalStyle(docCn, {
    gap: printColumnGap,
    paddingBlock: printPaddingBlock,
    paddingInline: printPaddingInline,
  })

  globalStyle(`${docCn} p:last-child`, {
    marginBottom: 0,
  })

  globalStyle(`${docCn} ul`, {
    paddingInlineStart: printListIndent,
  })

  globalStyle(`${docCn} li`, {
    lineHeight: baseLineHeight,
    breakInside: "avoid",
  })

  globalStyle(`${docCn} ul li + li`, {
    marginTop: printListSpacing,
  })

  globalStyle(`${docCn} h2`, {
    color: colors.action,
    letterSpacing: "-0.004em",
    textTransform: "none",
    marginTop: "1rem",
    marginBottom: "0.35rem",
    paddingBottom: "0.18rem",
    borderBottom: printDivider,
  })

  globalStyle(`${docCn} h3`, {
    letterSpacing: "-0.002em",
    lineHeight: 1.25,
    marginBottom: "0.2rem",
    marginTop: "0.2rem",
  })

  globalStyle(`${docCn} hr`, {
    display: "none",
  })

  globalStyle(sectionCn, {
    marginTop: printSectionSpacing,
    marginBottom: 0,
  })

  globalStyle(`${docCn} main article section`, {
    marginBottom: "0.65rem",
  })

  globalStyle(`${docCn} main article section:last-of-type`, {
    marginBottom: 0,
  })

  globalStyle(`${docCn} ${skillsListCn}`, {
    columnCount: 1,
    columnGap: "1.25rem",
    listStylePosition: "outside",
    paddingInlineStart: printListIndent,
    marginInlineStart: 0,
  })

  globalStyle(`${skillsListCn} li`, {
    lineHeight: baseLineHeight,
  })

  globalStyle(`${skillsListCn} li + li`, {
    marginTop: printListSpacing,
  })

  globalStyle(highlightsCn, {
    listStylePosition: "outside",
    paddingInlineStart: printListIndent,
  })

  globalStyle(`${highlightsCn} li + li`, {
    marginTop: printListSpacing,
  })

  globalStyle(linkCn, {
    textDecorationThickness: "0.05rem",
  })

  globalStyle(socialLinksCn, {
    marginTop: "0.25rem",
  })

  globalStyle(asideCn, {
    backgroundColor: "transparent",
    borderRadius: 0,
    boxShadow: "none",
    padding: "1.8rem",
  })
}

export const pdfStylesApplied = true
