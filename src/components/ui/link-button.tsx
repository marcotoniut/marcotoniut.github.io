import Link from "next/link"
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react"
import { forwardRef } from "react"

import { Button } from "./button"

type ButtonVariantProps = Pick<
  ComponentPropsWithoutRef<typeof Button>,
  "variant" | "size" | "fullWidth"
>

type AnchorAttributes = Omit<ComponentPropsWithoutRef<"a">, "href">

export type LinkButtonProps = ButtonVariantProps &
  AnchorAttributes &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children"> & {
    href: string
    external?: boolean
    children: ReactNode
  }

function buildExternalRel(value?: string) {
  const tokens = new Set(value?.split(/\s+/).filter(Boolean))
  tokens.add("noopener")
  tokens.add("noreferrer")
  return Array.from(tokens).join(" ")
}

export const LinkButton = forwardRef<ElementRef<"a">, LinkButtonProps>(
  (
    {
      href,
      external = false,
      variant,
      size,
      fullWidth,
      className,
      children,
      rel,
      target,
      prefetch,
      replace,
      scroll,
      shallow,
      locale,
      passHref,
      legacyBehavior,
      ...anchorProps
    },
    ref,
  ) => {
    if (external) {
      return (
        <Button
          asChild
          className={className}
          fullWidth={fullWidth}
          size={size}
          variant={variant}
        >
          <a
            {...anchorProps}
            href={href}
            ref={ref}
            rel={buildExternalRel(rel)}
            target={target ?? "_blank"}
          >
            {children}
          </a>
        </Button>
      )
    }

    // Build link props object, only including defined values
    const linkProps = {
      ...anchorProps,
      href,
      ref,
      ...(legacyBehavior !== undefined && { legacyBehavior }),
      ...(locale !== undefined && { locale }),
      ...(passHref !== undefined && { passHref }),
      ...(prefetch !== undefined && { prefetch }),
      ...(replace !== undefined && { replace }),
      ...(scroll !== undefined && { scroll }),
      ...(shallow !== undefined && { shallow }),
      ...(target !== undefined && { target }),
      ...(rel !== undefined && { rel }),
    }

    return (
      <Button
        asChild
        className={className}
        fullWidth={fullWidth}
        size={size}
        variant={variant}
      >
        <Link {...linkProps}>{children}</Link>
      </Button>
    )
  },
)

LinkButton.displayName = "LinkButton"
