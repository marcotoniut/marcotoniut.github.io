import { loadedLocales } from "@/i18n/i18n-util";
import { loadLocale } from "@/i18n/i18n-util.sync";
import { MetadataAttributes, PageProps } from "@/types";
import { Metadata } from "next";
import { NotFoundContent } from "./not-found.content";

export async function generateMetadata({
  params,
}: MetadataAttributes): Promise<Metadata> {
  loadLocale(params.lang);
  const dict = loadedLocales[params.lang];
  return {
    title: dict.NotFoundPage.meta.title,
    description: dict.NotFoundPage.meta.description,
  };
}

export default async function NotFoundPage({ params }: PageProps) {
  return <NotFoundContent />;
}
