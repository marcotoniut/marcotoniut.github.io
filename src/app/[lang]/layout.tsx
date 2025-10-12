import { PageProps } from "@/types";
import { baseLocale, locales } from "../../i18n/i18n-util";
import { i18nDictionary } from "./common";
import ClientComponent from "./layoutClient";

export const generateStaticParams = async () => {
  return locales.map((lang) => ({ lang }));
};

export default async function GlobalLayout({ children, params }: PageProps) {
  // const langE = DIO_Locale.decode(params.lang);
  // const locale = langE._tag === "Right" ? langE.right : baseLocale;

  const locale = params.lang ?? baseLocale;
  const i18n = await i18nDictionary(locale);

  return (
    <ClientComponent locale={i18n.locale} translation={i18n.dictionary}>
      {children}
    </ClientComponent>
  );
}
