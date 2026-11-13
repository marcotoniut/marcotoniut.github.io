import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"
import type { NextConfig } from "next"

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: { mode: "auto" },
})

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
  reactStrictMode: true,
  // The default, "none", ships a component the compiler cannot handle
  // uncompiled, with no warning.
  reactCompiler: { panicThreshold: "all_errors" },
  images: {
    // GitHub Pages does not support Next.js image optimization pipelines
    unoptimized: true,
  },
  trailingSlash: true,

  /**
   * No `headers()` here: `output: "export"` means GitHub Pages serves plain
   * files, so Next drops `headers()` and nothing declared here reaches a
   * client. Meta-tag protections live in `src/app/layout.tsx`; header-only
   * ones (X-Content-Type-Options, Permissions-Policy, Content-Signal) are
   * unavailable on this host.
   */
}

export default withVanillaExtract(nextConfig)
