"use client"

import type { HTMLAttributes, JSX } from "react"
import { h1Cn, h2Cn, h3Cn } from "./typography.css"

type HProps = Pick<
  HTMLAttributes<unknown>,
  "children" | "id" | "style" | "className"
>

export const H1 = ({ children, className, ...props }: HProps): JSX.Element => (
  <h1 className={className ? `${h1Cn} ${className}` : h1Cn} {...props}>
    {children}
  </h1>
)

export const H2 = ({ children, className, ...props }: HProps): JSX.Element => (
  <h2 className={className ? `${h2Cn} ${className}` : h2Cn} {...props}>
    {children}
  </h2>
)

export const H3 = ({ children, className, ...props }: HProps): JSX.Element => (
  <h3 className={className ? `${h3Cn} ${className}` : h3Cn} {...props}>
    {children}
  </h3>
)
