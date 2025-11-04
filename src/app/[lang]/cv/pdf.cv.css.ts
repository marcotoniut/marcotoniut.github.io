import { globalStyle } from "@vanilla-extract/css"

import { env } from "@/env"
import { colors, space } from "@/styles/theme"
import { asideCn, baseLineHeight, docCn, highlightsCn } from "./cv.css"

const dataSizeA4 = '[data-size="A4"]'

const printScale = env.NEXT_PUBLIC_PRINT_SCALE ?? "75%"
const printColumnGap = "1.35rem"
const printPaddingInline = "1.5rem"
const printPaddingBlock = "4rem"
const printListSpacing = "0.12rem"
const printListIndent = "0.72rem"
const printDivider = `0.0625rem solid ${colors.borderMuted}`

if (env.NEXT_PUBLIC_PDF_PRINTING) {
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
    textTransform: "none",
    marginTop: "2rem",
    borderBottom: printDivider,
  })

  globalStyle(highlightsCn, {
    listStylePosition: "outside",
    paddingInlineStart: printListIndent,
  })

  globalStyle(`${highlightsCn} li + li`, {
    marginTop: printListSpacing,
  })

  globalStyle(asideCn, {
    backgroundColor: "transparent",
    borderRadius: 0,
    boxShadow: "none",
    padding: "1.8rem",
  })
}

export const pdfStylesApplied = true
