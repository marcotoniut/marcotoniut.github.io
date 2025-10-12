import type { HTMLAttributes } from "react"
import { h1Cn, h2Cn, h3Cn } from "./Typography.css"

type HProps = Pick<
  HTMLAttributes<unknown>,
  "children" | "id" | "style" | "className"
>

export const H1 = ({ children, className, ...props }: HProps): JSX.Element => (
  <h1 className={[h1Cn, className].filter((x) => x).join(" ")} {...props}>
    {children}
  </h1>
)

export const H2 = ({ children, className, ...props }: HProps): JSX.Element => (
  <h2 className={[h2Cn, className].filter((x) => x).join(" ")} {...props}>
    {children}
  </h2>
)

export const H3 = ({ children, className, ...props }: HProps): JSX.Element => (
  <h3 className={[h3Cn, className].filter((x) => x).join(" ")} {...props}>
    {children}
  </h3>
)
