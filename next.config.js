const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  reactCompiler: {
    compilationMode: "annotation",
  },
  images: {
    // GitHub Pages does not support Next.js image optimization pipelines
    unoptimized: true,
  },
  trailingSlash: true,
  // Turbopack is not compatible with Vanilla Extract as of Next.js 16
  // Force webpack usage until Turbopack supports the required webpack plugin hooks
  webpack: (config) => config,
  // Empty turbopack config to acknowledge we're intentionally using webpack
  turbopack: {},
}

module.exports = withVanillaExtract(nextConfig)
