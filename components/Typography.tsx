import React, { ReactNode } from "react";

import { colors, fontSizes, space } from "../styles/theme";

interface HProps {
  readonly children: ReactNode;
  readonly id?: string;
}

export const H1 = ({ children, ...props }: HProps): JSX.Element => (
  <h1
    css={{
      fontSize: fontSizes.xxl,
      color: colors.main,
    }}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({ children, ...props }: HProps): JSX.Element => (
  <h2
    css={{
      fontSize: fontSizes.default,
      color: colors.main,
      margin: 0,
      ":not(:first-child)": {
        marginTop: space.xxxl,
      },
    }}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({ children, ...props }: HProps): JSX.Element => (
  <h3
    css={{
      fontSize: fontSizes.large,
      marginTop: space.xl,
      marginBottom: space.xs,
    }}
    {...props}
  >
    {children}
  </h3>
);
