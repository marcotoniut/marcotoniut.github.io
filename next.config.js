const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { loader: "custom" },
  // NOTE Project-based
  // assetPrefix: !debug ? "/project/" : "",
};
