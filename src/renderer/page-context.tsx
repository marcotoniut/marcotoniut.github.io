import type { ReactNode } from "react"
import { createContext, useContext } from "react"
import type { PageContextWithServerRouting as PageContext } from "vike/types"

const Context = createContext<PageContext | undefined>(undefined)

export function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext
  children: ReactNode
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export function usePageContext(): PageContext {
  const pageContext = useContext(Context)
  if (pageContext === undefined) {
    throw new Error("usePageContext must be used within PageContextProvider")
  }
  return pageContext
}

/** The page's `+data` result, unvalidated: parse it where it is used. */
export function useData(): unknown {
  return usePageContext().data
}
