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

export default function Home(props: Props) {
  const {
    count,
    isShow,
    handleClick,
    handleFlag,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

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
      <div>
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleFlag}>{isShow ? "非表示" : "表示"}</button>
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

      <Main page="index" />
      <Footer />
    </div>
  );
}
