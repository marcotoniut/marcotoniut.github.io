// const debug = process.env.NODE_ENV !== "production";

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: { loader: "custom" },
  // NOTE Project-based
  // assetPrefix: !debug ? "/project/" : "",

  // skipMiddlewareUrlNormalize: true,
  // i18n: {
  //   localeDetection: false,
  //   locales: ["en", "es"],
  //   defaultLocale: "en",
  // },
};

module.exports = module.exports = withVanillaExtract(nextConfig);
