"use client"
"use memo"

import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import { usePathname, useRouter } from "next/navigation"
import { BuyMeACoffeeCTA } from "@/components/BuyMeACoffeeCTA"
import { ThemeToggle } from "@/components/ThemeToggle"
import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"
import { LocaleSchema } from "@/i18n/schemas"
import { setStoredLocale } from "@/utils/language-storage"
import {
  controlBar,
  selectContent,
  selectIcon,
  selectItem,
  selectItemIndicator,
  selectTrigger,
  selectViewport,
} from "./LocaleSwitcher.css"

function createLocalePath(pathname: string, newLocale: Locales): string {
  const segments = pathname.split("/").filter(Boolean)
  const parsedSegment =
    segments.length > 0 ? LocaleSchema.safeParse(segments[0]) : null

  if (parsedSegment?.success) {
    segments[0] = newLocale
    return `/${segments.join("/")}`
  }
  return `/${newLocale}`
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locales }) {
  const pathname = usePathname()
  const router = useRouter()

  const onValueChange = (locale: string) => {
    const typedLocale = LocaleSchema.parse(locale)
    if (typedLocale === currentLocale) return

    setStoredLocale(typedLocale)
    const target = createLocalePath(pathname, typedLocale)
    router.push(target)
  }

  return (
    <div className={controlBar}>
      <BuyMeACoffeeCTA />
      <ThemeToggle />
      <Select.Root value={currentLocale} onValueChange={onValueChange}>
        <Select.Trigger aria-label="Change language" className={selectTrigger}>
          <Select.Value />
          <Select.Icon className={selectIcon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={selectContent} sideOffset={8}>
            <Select.Viewport className={selectViewport}>
              {locales.map((locale) => (
                <Select.Item className={selectItem} key={locale} value={locale}>
                  <Select.ItemText>{locale.toUpperCase()}</Select.ItemText>
                  <Select.ItemIndicator className={selectItemIndicator}>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
