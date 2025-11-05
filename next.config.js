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

  /**
   * Security and anti-scraping headers
   *
   * These headers serve two purposes:
   * 1. SEO: Allow legitimate search engines to index the site
   * 2. Anti-AI: Explicitly block AI training crawlers from using the content
   *
   * The X-Robots-Tag header is the HTTP equivalent of the meta robots tag.
   * The "noai" and "noimageai" directives instruct compliant crawlers not to
   * use the content for AI training or image generation models.
   */
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            // Allow indexing and following links, but prohibit AI training usage
            value: "index, follow, noai, noimageai",
          },
          {
            key: "Permissions-Policy",
            // Disable FLoC (Federated Learning of Cohorts) - Google's privacy-invasive tracking
            value: "interest-cohort=()",
          },
          {
            key: "X-Content-Type-Options",
            // Prevent MIME type sniffing, which can lead to security vulnerabilities
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            // Send full referrer for same-origin, only origin for cross-origin
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },
}

module.exports = withVanillaExtract(nextConfig)
