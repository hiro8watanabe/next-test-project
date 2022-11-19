import styles from "../styles/Home.module.css";

type Props = {
  page: string;
};

export const Headline: React.FC<Props> = (props) => {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js! {props.page} Page</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </p>
    </div>
  );
};
