import type { Config } from "vike/types"

export default {
  prerender: true,
  // Every navigation loads a prerendered document, so the head is always the
  // one built for that page and no client router ships.
  clientRouting: false,
  trailingSlash: true,
  meta: {
    seo: { env: { server: true } },
  },
} satisfies Config
