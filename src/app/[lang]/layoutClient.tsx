"use client";

import { ReactNode } from "react";
import TypesafeI18n from "../../i18n/i18n-react";
import { Locales, Translation } from "../../i18n/i18n-types";
import { loadedLocales } from "../../i18n/i18n-util";
import { loadFormatters } from "../../i18n/i18n-util.sync";

interface Props {
  children: ReactNode;
  locale: Locales;
  translation: Translation;
}

export default function ClientComponent({
  children,
  locale,
  translation,
}: Props) {
  loadedLocales[locale] = translation;
  loadFormatters(locale);

  return <TypesafeI18n locale={locale}>{children}</TypesafeI18n>;
}
