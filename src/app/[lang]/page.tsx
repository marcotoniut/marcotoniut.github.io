import { loadedLocales } from "@/i18n/i18n-util"
import { loadLocale } from "@/i18n/i18n-util.sync"
import { space } from "@/styles/theme"
import type { Metadata } from "next"
import Link from "next/link"
import { GithubIcon, ItchIOIcon } from "../../components/Icons"
import { LocaleSwitcher } from "../../components/LocaleSwitcher"
import styles from "./Home.module.css"
import { mainCn } from "./index.css"
import { resolveLocale } from "./utils"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)

  loadLocale(locale)
  const dict = loadedLocales[locale]
  return {
    title: dict.HomePage.meta.title,
    description: dict.HomePage.meta.description,
  }
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const locale = resolveLocale(lang)

  return (
    <div className={styles.container}>
      <LocaleSwitcher currentLocale={locale} />
      <main className={mainCn}>
        <h1 className={styles.title}>Marco Toniut</h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <Link className={styles.card} href={`/${locale}/cv`}>
            <h2>Curriculum Vitae &rarr;</h2>
          </Link>

          <span className={styles.card}>
            <h2 style={{ display: "flex", gap: space.small }}>
              <span>Carcinisation</span>
              <a
                href="https://github.com/marcotoniut/carcinisation"
                rel="noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
              <a
                href="https://marcotoniut.itch.io/carcinisation"
                rel="noreferrer"
                target="_blank"
              >
                <ItchIOIcon />
              </a>
            </h2>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>© 2025</footer>
    </div>
  )
}
