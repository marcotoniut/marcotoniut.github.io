import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react"
import vike from "vike/plugin"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    vike(),
    // A component the compiler cannot compile fails the build instead of
    // shipping uncompiled.
    react({ compiler: { panicThreshold: "all_errors" } }),
    vanillaExtractPlugin(),
  ],
  resolve: { tsconfigPaths: true },
  build: {
    rolldownOptions: {
      output: {
        // One cached stylesheet for the whole site, about 10 KB gzipped.
        // Vike otherwise emits one per vanilla-extract module, each a
        // render-blocking request, and every navigation loads a full page.
        manualChunks: (id) => (id.endsWith(".css") ? "styles" : undefined),
      },
    },
  },
  // Vike exposes this prefix to the browser itself, but vanilla-extract
  // evaluates `.css.ts` files without Vike's plugin, so Vite must know it too.
  envPrefix: "PUBLIC_ENV__",
})
