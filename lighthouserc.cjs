/**
 * Fail on `error`, not `warn`. Warnings in CI go unheeded; that is how the home page sat at 0.83 unnoticed.
 *
 * Thresholds are ratcheted below observed scores (perf 0.90 to 0.94, a11y 0.94 to 1.00, best-practices and SEO 1.00).
 * Raise as numbers improve; never lower to pass a build.
 */
module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist/client",
      url: ["/en/", "/en/cv/", "/en/contact/", "/en/projects/carcinisation/"],
      // Performance is the only timing-sensitive category, and a single run on
      // a shared CI runner swings a few points. Median of 3 is stable enough
      // to assert on.
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.88 }],
        "categories:accessibility": ["error", { minScore: 0.92 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        // Deterministic, currently 1.0, and SEO is the point of this site.
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    // No `upload` block: reports are kept as GitHub Actions artifacts by the
    // workflow rather than pushed to Google's temporary public storage.
  },
}
