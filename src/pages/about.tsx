import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useChangeBgColor } from "src/hooks/useChangeBgColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

export default function About() {
  const { count, isShow, handleClick, handleFlag } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useChangeBgColor();

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="ここはabout pageです" />
      </Head>

      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleFlag}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  );
}
