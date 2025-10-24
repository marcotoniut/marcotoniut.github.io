"use client"

import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import { useCallback, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"

import { ThemeToggle } from "@/components/ThemeToggle"
import type { Locales } from "@/i18n/i18n-types"
import { locales } from "@/i18n/i18n-util"

import {
  controlBar,
  selectContent,
  selectIcon,
  selectItem,
  selectItemIndicator,
  selectTrigger,
  selectViewport,
} from "./locale-switcher.css"

function createLocalePath(pathname: string, newLocale: Locales): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length > 0 && locales.includes(segments[0] as Locales)) {
    segments[0] = newLocale
    return `/${segments.join("/")}`
  }
  return `/${newLocale}`
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locales }) {
  const pathname = usePathname()
  const router = useRouter()

  const value = useMemo(() => currentLocale, [currentLocale])

  const onValueChange = useCallback(
    (locale: string) => {
      if (!locales.includes(locale as Locales)) return
      const typedLocale = locale as Locales
      if (typedLocale === currentLocale) return

      const target = createLocalePath(pathname, typedLocale)
      router.push(target)
    },
    [currentLocale, pathname, router]
  )

  return (
    <div className={controlBar}>
      <Select.Root value={value} onValueChange={onValueChange}>
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
      <ThemeToggle />
    </div>
  )
}
