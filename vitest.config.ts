import path from "node:path"
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
        "src/app/**/i18n/**",
        "src/styles/fonts.ts",
        "src/styles/theme.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
})
