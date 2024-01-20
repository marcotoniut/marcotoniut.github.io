// const debug = process.env.NODE_ENV !== "production";

const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { loader: "custom" },
  // NOTE Project-based
  // assetPrefix: !debug ? "/project/" : "",
};

module.exports = module.exports = withVanillaExtract(nextConfig);
