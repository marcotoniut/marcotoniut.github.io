import { HTMLAttributes, ReactNode } from "react";
import { h1Cn, h2Cn, h3Cn } from "./Typography.css";

type HProps = Pick<HTMLAttributes<unknown>, "children" | "id" | "style">;

export const H1 = ({ children, ...props }: HProps): JSX.Element => (
  <h1 className={h1Cn} {...props}>
    {children}
  </h1>
);

export const H2 = ({ children, ...props }: HProps): JSX.Element => (
  <h2 className={h2Cn} {...props}>
    {children}
  </h2>
);

export const H3 = ({ children, ...props }: HProps): JSX.Element => (
  <h3 className={h3Cn} {...props}>
    {children}
  </h3>
);
