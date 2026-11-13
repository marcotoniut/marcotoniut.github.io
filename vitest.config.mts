import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ["tests/unit/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: [
        "src/**/*.css.ts",
        "src/i18n/i18n-*",
        "src/i18n/en/**",
        "src/i18n/es/**",
        "src/i18n/formatters.ts",
        "src/i18n/locale-tags.ts",
        "src/pages/**/i18n/**",
        // Imports `.css.ts`, which needs the vanilla-extract transform to load.
        "src/styles/theme.ts",
      ],
      // A ratchet just under the current numbers, so coverage cannot silently
      // regress. Raise these as tests are added; do not lower them.
      thresholds: {
        statements: 93,
        branches: 98,
        functions: 95,
        lines: 93,
      },
    },
  },
  resolve: { tsconfigPaths: true },
})
