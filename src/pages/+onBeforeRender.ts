import type { PageContextServer } from "vike/types"
import { localizedPath } from "@/i18n/page-locale"

export default function onBeforeRender(pageContext: PageContextServer) {
  return { pageContext: { routePath: localizedPath(pageContext) } }
}
