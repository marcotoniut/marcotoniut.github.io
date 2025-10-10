import { style, globalStyle } from "@vanilla-extract/css";
import { colors, fontSizes, space } from "../../../styles/theme";
import { isPDFPrinting } from "../../../env";

const dataSizeA4 = '[data-size="A4"]';
const maxWidth = 1200;

export const headerCn = style({
  display: "flex",
  gap: space.xxl,
  margin: "0 auto",
  alignItems: "baseline",
  maxWidth,
  paddingBottom: space.small,
  paddingInline: space.xxl,
  paddingTop: space.default,
});

export const cvCn = style({
  fontSize: fontSizes.xl,
  fontWeight: "bold",
});

export const docCn = style({
  color: colors.text,
  display: "flex",
  flex: 1,
  fontSize: "16px",
  gap: space.xxxl,
  margin: "0 auto",
  maxWidth,
  paddingBlock: space.small,
  paddingInline: space.xxl,
});

// PDF layout adjustments
if (isPDFPrinting()) {
  const PAGE_COUNT = 3;

  globalStyle(`body`, {
    height: `${PAGE_COUNT * 100}vh`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  globalStyle(`${docCn}${dataSizeA4}`, {
    height: `${PAGE_COUNT * 100}vh`,
    paddingBlock: space.none,
  });
}

globalStyle("body", {
  WebkitPrintColorAdjust: "exact",
  "@media": {
    print: {
      WebkitPrintColorAdjust: "exact",
    },
  },
});

// Divider line
globalStyle(`${docCn} hr`, {
  border: 0,
  height: "0.75px",
  width: "100%",
  marginBottom: space.xs,
  marginTop: space.xs,
  backgroundColor: colors.action,
});

// Accent section titles
globalStyle(`${docCn} h2`, {
  color: colors.action,
  fontWeight: 600,
});

// Accent links
globalStyle(`${docCn} a`, {
  color: colors.action,
  textDecoration: "none",
});
globalStyle(`${docCn} a:hover`, {
  color: colors.accent,
  textDecoration: "underline",
});

export const nameCn = style({
  marginTop: space.default,
  marginBottom: space.none,
  color: colors.action, // highlight your name
});

export const professionCn = style({
  marginTop: space.xs,
  marginBottom: space.none,
});

export const pictureCn = style({
  display: "inline-flex",
  overflow: "hidden",
  borderRadius: "50%",
});

const doc_mediaCn = `${docCn} @media screen and (max-width: 768px)` as const;
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
  maxWidth: "210mm",
});

globalStyle(`${doc_dataSizeCn} aside`, {
  maxWidth: "75mm",
  minWidth: "60mm",
});

export const paragraphCn = style({});
globalStyle(`${paragraphCn} > *`, { marginTop: space.small });

export const highlightsCn = style({
  listStyle: "disc inside",
  padding: 0,
  lineHeight: 1.45,
});
globalStyle(`${highlightsCn} li + li`, { marginTop: "4px" });

export const linkCn = style({
  color: colors.action,
  display: "inline-flex",
  gap: space.small,
});

export const profileCn = style({
  alignItems: "center",
  gap: space.xs,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
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

// Sidebar accent
export const asideCn = style({
  padding: space.default,
  maxWidth: 350,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: colors.sidebarBg,
  borderRadius: space.small,
});

export const link2Cn = style({ color: colors.action });

export const learningHighlightsCn = style({
  listStyle: "inside",
  padding: 0,
  listStyleType: "circle",
});

export const footerCn = style({
  fontSize: fontSizes.small,
  margin: "0 auto",
  maxWidth,
  paddingBlock: space.small,
});

export const pdfIsPrintingCn = style({
  fontSize: fontSizes.default,
});
