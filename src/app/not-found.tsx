import { baseLocale } from "@/i18n/i18n-util"
import { i18nDictionary } from "./[lang]/common"
import { LayoutContent } from "./[lang]/layout.content"
import { NotFoundContent } from "./[lang]/not-found.content"

export default async function GlobalNotFound() {
  const { locale, dictionary } = await i18nDictionary(baseLocale)

  return (
    <LayoutContent locale={locale} translation={dictionary}>
      <NotFoundContent />
    </LayoutContent>
  )
}
