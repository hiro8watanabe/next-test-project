import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

type Props = {
  count: number;
  isShow: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleFlag: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  array: string[];
  handleChange: boolean;
  handleAdd: React.MouseEventHandler<HTMLButtonElement>;
};

export default function About({
  count,
  isShow,
  handleClick,
  handleFlag,
  text,
  array,
  handleChange,
  handleAdd,
}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="ここはabout pageです" />
      </Head>

      <Header />
      <div>
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleFlag}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{count}</h1> : null}
      </div>

      <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      </div>

      <Main page="about" />
      <Footer />
    </div>
  );
}
