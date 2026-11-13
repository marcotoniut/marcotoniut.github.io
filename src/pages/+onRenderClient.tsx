import { hydrateRoot } from "react-dom/client"
import type { PageContextClientWithServerRouting } from "vike/types"
import { loadLocaleAsync } from "@/i18n/i18n-util.async"
import { localeOf } from "@/i18n/page-locale"
import { PageShell } from "@/renderer/PageShell"
import { ROOT_ELEMENT_ID } from "@/renderer/root"

// Server routing: called once per page load, to hydrate the prerendered HTML.
export default async function onRenderClient(
  pageContext: PageContextClientWithServerRouting,
): Promise<void> {
  // The dictionary loads as its own cached chunk rather than being serialised
  // into every page.
  await loadLocaleAsync(localeOf(pageContext))

  const root = document.getElementById(ROOT_ELEMENT_ID)
  if (root === null) {
    throw new Error(`The prerendered document has no #${ROOT_ELEMENT_ID}`)
  }
  hydrateRoot(root, <PageShell pageContext={pageContext} />)
}
