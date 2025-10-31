"use client"
"use memo"

import Image from "next/image"
import type { ComponentPropsWithoutRef } from "react"
import { useContext } from "react"
import { I18nContext } from "@/i18n/i18n-react"
import { base, icon, label } from "./BuyMeACoffeeCTA.css"

export type BuyMeACoffeeCTAProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
>

export const BuyMeACoffeeCTA = ({
  className,
  ...linkProps
}: BuyMeACoffeeCTAProps) => {
  const { LL } = useContext(I18nContext)

  const classes = className ? `${base} ${className}` : base

  return (
    <a
      {...linkProps}
      className={classes}
      href="https://buymeacoffee.com/marcotoniut"
      rel="noreferrer"
      target="_blank"
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
