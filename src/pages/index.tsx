import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Marco Toniut</title>
      <meta
        name="description"
        content="Personal page of Marco Toniut, for experiments and publications"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
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

export default Home;
