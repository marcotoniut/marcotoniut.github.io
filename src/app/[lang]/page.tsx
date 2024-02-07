import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import { mainCn } from "./index.css";
import { GithubIcon, ItchIOIcon } from "../../components/Icons";
import { space } from "@/styles/theme";
import { MetadataAttributes } from "@/types";
import { loadedLocales } from "@/i18n/i18n-util";
import { loadLocale } from "@/i18n/i18n-util.sync";

export async function generateMetadata({
  params,
}: MetadataAttributes): Promise<Metadata> {
  loadLocale(params.lang);
  const dict = loadedLocales[params.lang];
  return {
    title: dict.HomePage.meta.title,
    description: dict.HomePage.meta.description,
  };
}

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className={mainCn}>
        <h1 className={styles.title}>Marco Toniut</h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <Link passHref href="/cv">
              <h2>Curriculum Vitae &rarr;</h2>
            </Link>
          </span>

          <span className={styles.card}>
            <h2 style={{ display: "flex", gap: space.small }}>
              <span>Carcinisation</span>
              <Link
                passHref
                href="https://github.com/marcotoniut/carcinisation"
                rel="noreferrer"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://marcotoniut.itch.io/carcinisation"
                rel="noreferrer"
              >
                <ItchIOIcon />
              </Link>
            </h2>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>Circa 2024</footer>
    </div>
  );
}
