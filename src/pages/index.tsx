import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [foo, setFoo] = useState(1);
  // let foo = 1;
  const handleClick = (e: number) => {
    setFoo((foo) => foo + 1);
  };

  // const handleClick = useCallback(
  //   (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     console.log(e.currentTarget.href);
  //     e.preventDefault();
  //     alert(foo);
  //   },
  //   []
  // );

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "#c8c8c8";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  // console.log(setFoo);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="ここはindex pageです" />
      </Head>
      <Header />
      {/* <Link href="/about" onClick={handleClick}> */}
      {/* <a href="/about" onClick={handleClick}> */}
      {/* ボタン */}
      {/* </a> */}
      {/* </Link> */}
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
