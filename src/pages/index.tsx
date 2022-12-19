import Head from "next/head";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      alert("10文字以内で入力してください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleFlag = useCallback(() => {
    // setIsShow((isShow) => {
    //   //▼最短の記述
    //   return !isShow;

    //   //▼以下と同じ意味になる
    //   // return isShow ? false : true;
    // });

    //▼更にリファクタリング
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "#c8c8c8";

    return () => {
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
      {/* <Link href="/about" onClick={handleClick}> */}
      {/* <a href="/about" onClick={handleClick}> */}
      {/* ボタン */}
      {/* </a> */}
      {/* </Link> */}
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleFlag}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  );
}
