"use client"

import Image from "next/image"
import type { ComponentPropsWithoutRef } from "react"
import { useContext } from "react"
import { I18nContext } from "@/i18n/i18n-react"
import { trackBuyMeCoffeeClick } from "@/utils/analytics"
import { base, icon, label } from "./BuyMeACoffeeCTA.css"

export type BuyMeACoffeeCTAProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
> & {
  location?: "header" | "home_page"
}

export const BuyMeACoffeeCTA = ({
  className,
  location = "header",
  onClick,
  ...linkProps
}: BuyMeACoffeeCTAProps) => {
  const { LL, locale } = useContext(I18nContext)

  const classes = className ? `${base} ${className}` : base

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackBuyMeCoffeeClick({
      link_text: LL.Common.buyMeACoffee(),
      link_location: location,
      locale,
    })
    onClick?.(e)
  }

  return (
    <a
      {...linkProps}
      className={classes}
      href="https://buymeacoffee.com/marcotoniut"
      rel="noreferrer"
      target="_blank"
      onClick={handleClick}
    >
      <Image
        alt={LL.Common.buyMeACoffeeIconAlt()}
        className={icon}
        height={36}
        src="/icons/buy-me-a-coffee.svg"
        width={48}
      />
      <span className={label}>{LL.Common.buyMeACoffee()}</span>
    </a>
  )
}
