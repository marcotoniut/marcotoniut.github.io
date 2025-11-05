"use client"

import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import { usePathname, useRouter } from "next/navigation"
import { BuyMeACoffeeCTA } from "@/components/BuyMeACoffeeCTA"
import { ThemeToggle } from "@/components/ThemeToggle"
import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"
import { LocaleSchema } from "@/i18n/schemas"
import { setStoredLocale } from "@/utils/language-storage"
import * as styles from "./Header.css"

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

export function Controls({ currentLocale }: { currentLocale: Locales }) {
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
    <div className={styles.controlBar}>
      <BuyMeACoffeeCTA />
      <ThemeToggle />
      <Select.Root value={currentLocale} onValueChange={onValueChange}>
        <Select.Trigger
          aria-label="Change language"
          className={styles.selectTrigger}
        >
          <Select.Value />
          <Select.Icon className={styles.selectIcon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.selectContent} sideOffset={8}>
            <Select.Viewport className={styles.selectViewport}>
              {locales.map((locale) => (
                <Select.Item
                  className={styles.selectItem}
                  key={locale}
                  value={locale}
                >
                  <Select.ItemText>{locale.toUpperCase()}</Select.ItemText>
                  <Select.ItemIndicator className={styles.selectItemIndicator}>
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
