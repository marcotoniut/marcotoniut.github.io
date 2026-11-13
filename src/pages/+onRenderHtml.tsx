import { renderToStaticMarkup, renderToString } from "react-dom/server"
import { dangerouslySkipEscape, escapeInject } from "vike/server"
import type { PageContextServer } from "vike/types"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { toLocaleTag } from "@/i18n/locale-tags"
import { localeOf } from "@/i18n/page-locale"
import { Head } from "@/renderer/Head"
import { PageShell } from "@/renderer/PageShell"
import { ROOT_ELEMENT_ID } from "@/renderer/root"

export default function onRenderHtml(pageContext: PageContextServer) {
  const locale = localeOf(pageContext)
  loadLocale(locale)

  const pageHtml = renderToString(<PageShell pageContext={pageContext} />)
  const headHtml = renderToStaticMarkup(<Head pageContext={pageContext} />)

  return escapeInject`<!DOCTYPE html>
<html lang="${toLocaleTag(locale)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${dangerouslySkipEscape(headHtml)}
  </head>
  <body>
    <div id="${ROOT_ELEMENT_ID}">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>`
}
