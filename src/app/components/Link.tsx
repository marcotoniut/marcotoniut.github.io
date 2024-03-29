import { ComponentProps } from "react";
import NextLink from "next/link";
import { useI18nContext } from "../../i18n/i18n-react";

type LinkProps = ComponentProps<typeof NextLink>;

interface Props extends LinkProps {
  externalLink?: boolean;
}

export default function Link({ href, externalLink, ...props }: Props) {
  const { locale } = useI18nContext();

  const updatedHref = externalLink ? href : `/${locale}${href}`;

  return <NextLink href={updatedHref} {...props} />;
}
