import type { Metadata } from "next"
import {
  buildHomePageMetadata,
  HomePageContent,
  loadHomePageDictionary,
} from "@/app/content"
import { resolveLocale } from "./utils"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)

  return buildHomePageMetadata(locale)
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  const dict = loadHomePageDictionary(locale)

  return <HomePageContent dict={dict} locale={locale} />
}
