"use client"

import { useContext } from "react"
import { I18nContext } from "@/i18n/i18n-react"

export function NotFoundContent() {
  const { LL } = useContext(I18nContext)

  return <h1>404 - {LL.NotFoundPage.title()}</h1>
}
