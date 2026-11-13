import type { PageContextServer } from "vike/types"
import { localizedPath } from "@/i18n/page-locale"

export default function onBeforeRender(
  pageContext: Pick<PageContextServer, "routeParams" | "urlPathname">,
) {
  return { pageContext: { routePath: localizedPath(pageContext) } }
}
