import { useI18nContext } from "./i18n-react"
import type { Translation } from "./i18n-types"
import { loadedLocales } from "./i18n-util"

/** The page locale's raw dictionary, for copy that takes no parameters. */
export function useDictionary(): Translation {
  const { locale } = useI18nContext()
  return loadedLocales[locale]
}
