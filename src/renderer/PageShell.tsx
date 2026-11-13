// biome-ignore lint/correctness/noUnresolvedImports: Biome's resolver misses this export of react; TypeScript resolves it
import { StrictMode } from "react"
import type { PageContextWithServerRouting as PageContext } from "vike/types"
import { Layout } from "./Layout"
import { PageContextProvider } from "./page-context"

/** The React tree both the prerender and the hydration render. */
export function PageShell({ pageContext }: { pageContext: PageContext }) {
  const { Page } = pageContext
  if (Page === undefined) {
    throw new Error(`${pageContext.pageId ?? "This page"} has no +Page`)
  }

  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Page />
        </Layout>
      </PageContextProvider>
    </StrictMode>
  )
}
