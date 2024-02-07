import { style, globalStyle } from "@vanilla-extract/css";
import { colors, fontSizes, space } from "../../../styles/theme";
import { isPDFPrinting } from "../../../env";

const dataSizeA4 = '[data-size="A4"]';

if (isPDFPrinting()) {
  const PAGE_COUNT = 3;

  globalStyle(`body`, {
    height: `${PAGE_COUNT * 100}vh`,
  });
}

export const docCn = style({
  color: colors.text,
  display: "flex",
  flex: 1,
  fontSize: "16px",
  margin: "0 auto",
  maxWidth: "1200px",
  paddingInline: space.xxl,
});
globalStyle(`${docCn}${dataSizeA4}`, {
  height: "100%",
});

globalStyle(`${docCn} h1`, {
  alignItems: "baseline",
  display: "flex",
  justifyContent: "space-between",
  marginRight: space.xxxl,
});

globalStyle(`${docCn} article`, {
  marginRight: space.xxxl,
});

globalStyle(`${docCn} hr`, {
  border: 0,
  borderColor: "rgba(0, 0, 0, 0)",
  height: "1px",
  width: "100%",
  marginBottom: space.xs,
  marginTop: space.xs,
  backgroundColor: colors.text,
});

const doc_mediaCn = `${docCn} @media screen and (max-width: 768px)`;
globalStyle(doc_mediaCn, {
  fontSize: "14px",
  display: "block",
});

globalStyle(`${doc_mediaCn} aside`, {
  marginTop: space.xxxl,
});

const doc_dataSizeCn = `${docCn}${dataSizeA4}`;
globalStyle(doc_dataSizeCn, {
  fontSize: "9pt",
  padding: space.none,
  paddingLeft: space.xl,
  maxWidth: "210mm",
});

globalStyle(`${doc_dataSizeCn} aside`, {
  maxWidth: "80mm",
  minWidth: "60mm",
});

export const paragraphCn = style({});

globalStyle(`${paragraphCn} > *`, { marginTop: space.small });

export const highlightsCn = style({ listStyle: "inside", padding: 0 });

export const linkCn = style({
  alignItems: "center",
  color: colors.action,
  display: "inline-flex",
  gap: space.small,
});

export const sectionCn = style({
  breakInside: "avoid",
  pageBreakInside: "avoid",
  marginTop: space.xl,
  orphans: 3,
});

export const skillsListCn = style({
  listStyle: "none",
  padding: 0,
});

globalStyle(`${skillsListCn} > li:not(:first-child)`, {
  marginTop: space.small,
});

export const institutionCn = style({
  alignItems: "center",
  display: "flex",
  fontSize: space.large,
  gap: space.small,
  marginBottom: space.small,
  marginTop: space.small,
});

export const asideCn = style({
  backgroundColor: colors.aside,
  paddingLeft: space.xl,
  paddingRight: space.xl,
  minWidth: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const link2Cn = style({ color: colors.action });

export const learningHighlightsCn = style({
  listStyle: "inside",
  padding: 0,
  listStyleType: "circle",
});

// export const pageBreakCn = style({});
// globalStyle(`${pageBreakCn}${dataSizeA4}`, {
//   pageBreakBefore: "always",
//   marginTop: space.xl,
// });

export const footerCn = style({
  fontSize: fontSizes.small,
  paddingBlock: space.default,
});

export const pdfIsPrintingCn = style({
  fontSize: fontSizes.default,
});
