import Head from "next/head";
import { useCallback, useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback(
    (e: { target: { href: any }; preventDefault: () => void }) => {
      console.log(e.target.href);
      e.preventDefault();
      alert(foo);
    },
    []
  );

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "#c8c8c8";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="ここはindex pageです" />
      </Head>
      <Header />

      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
