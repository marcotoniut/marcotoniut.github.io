import { render } from "vike/abort"
import type { PageContextServer } from "vike/types"
import { parseLocale } from "@/utils/locale"

export default function guard(
  pageContext: Pick<PageContextServer, "routeParams">,
): void {
  if (parseLocale(pageContext.routeParams["lang"]) === undefined) {
    throw render(404)
  }
}
