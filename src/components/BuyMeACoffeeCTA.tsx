import type { ComponentPropsWithoutRef } from "react"
import { useContext } from "react"
import { CoffeeCupIcon } from "@/components/icons"
import { I18nContext } from "@/i18n/i18n-react"
import { trackBuyMeCoffeeClick } from "@/utils/analytics"
import * as styles from "./BuyMeACoffeeCTA.css"

export type BuyMeACoffeeCTAProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
> & {
  location?: "header" | "home_page" | "footer"
}

export const BuyMeACoffeeCTA = ({
  className,
  location = "header",
  onClick,
  ...linkProps
}: BuyMeACoffeeCTAProps) => {
  const { LL, locale } = useContext(I18nContext)
  const label = LL.Common.buyMeACoffee()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackBuyMeCoffeeClick({ link_text: label, link_location: location, locale })
    onClick?.(e)
  }

  return (
    <a
      {...linkProps}
      className={className ? `${styles.button} ${className}` : styles.button}
      href="https://buymeacoffee.com/marcotoniut"
      rel="noreferrer"
      target="_blank"
      onClick={handleClick}
    >
      <span className={styles.face}>
        <CoffeeCupIcon className={styles.cup} />
        {label}
      </span>
      <span aria-hidden="true" className={styles.pour}>
        <span className={styles.body}>
          <span className={styles.liquidFace}>
            <CoffeeCupIcon className={styles.cup} />
            {label}
          </span>
        </span>
      </span>
    </a>
  )
}
