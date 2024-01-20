import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import { mainCn } from "./index.css";

export const metadata: Metadata = {
  title: "Marco Toniut",
  description:
    "Personal page of Marco Toniut, for experiments and publications",
};

export default function Home() {
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
        </div>
      </main>

      <footer className={styles.footer}>Circa 2021</footer>
    </div>
  );
}
