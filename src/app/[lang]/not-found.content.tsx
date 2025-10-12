"use client"

import { I18nContext } from "@/i18n/i18n-react"
import { useContext } from "react"

export function NotFoundContent() {
  const { LL } = useContext(I18nContext)

  return <h1>404 - {LL.NotFoundPage.title()}</h1>
}
