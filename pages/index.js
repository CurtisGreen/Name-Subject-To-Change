import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import kanji from "../data/kanji-jouyou.json";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const kanjiArr = Object.entries(kanji);
  const numKanji = kanjiArr.length;
  const [index, setIndex] = useState(0);
  console.log(kanjiArr[index]["0"]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <code>name-subject-to-change</code>
        </h1>
        <button
          onClick={() => {
            const newIndex = Math.round(Math.random() * numKanji);
            console.log(index, newIndex);
            setIndex(newIndex);
          }}
        >
          Random Kanji
        </button>
        <p style={{ fontSize: "5rem" }}>{kanjiArr[index]["0"]}</p>
        <Link href="/quiz">Quiz</Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
