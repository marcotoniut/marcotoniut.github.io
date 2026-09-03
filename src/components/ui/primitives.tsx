import type { ComponentPropsWithoutRef, ElementType } from "react"
import { createElement } from "react"
import type { Sprinkles } from "@/styles/sprinkles.css"
import { sprinkles } from "@/styles/sprinkles.css"

/**
 * Layout primitives over the sprinkles utilities: Box, Stack, Inline, Grid
 * and nothing more until repeated patterns earn additions. These encode
 * recurring layout mechanics only; brand components keep named semantic
 * styles (see docs/design-direction.md, Tranche 7.5).
 */

type BoxOwnProps<E extends ElementType> = Sprinkles & {
  as?: E
  className?: string
}

export type BoxProps<E extends ElementType = "div"> = BoxOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof BoxOwnProps<E>>

export function Box<E extends ElementType = "div">({
  as,
  className,
  ...props
}: BoxProps<E>) {
  const sprinkleProps: Record<string, unknown> = {}
  const rest: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(props)) {
    const bucket = sprinkles.properties.has(key as keyof Sprinkles)
      ? sprinkleProps
      : rest
    bucket[key] = value
  }
  const classes = [sprinkles(sprinkleProps as Sprinkles), className]
    .filter(Boolean)
    .join(" ")
  return createElement(as ?? "div", { className: classes, ...rest })
}

export function Stack<E extends ElementType = "div">(props: BoxProps<E>) {
  return <Box display="flex" flexDirection="column" {...props} />
}

export function Inline<E extends ElementType = "div">(props: BoxProps<E>) {
  return <Box display="flex" flexWrap="wrap" alignItems="center" {...props} />
}

export function Grid<E extends ElementType = "div">(props: BoxProps<E>) {
  return <Box display="grid" {...props} />
}
