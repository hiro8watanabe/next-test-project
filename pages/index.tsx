import Head from "next/head";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Main page="index" />
      </div>
      <Footer />
    </>
  );
}
