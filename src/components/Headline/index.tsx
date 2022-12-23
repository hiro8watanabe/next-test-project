import { ReactNode } from "react";
import styles from "src/components/Headline/Headline.module.css";

type Props = {
  page: string;
  children: ReactNode;
  handleReduce: React.MouseEventHandler<HTMLButtonElement>;
};

export const Headline: React.FC<Props> = (props) => {
  const { page, children } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js! {page} Page</a>
      </h1>

      <p className={styles.description}>現在のページは{children}個です。</p>
      {/* <button onClick={props.onClick}>ボタン</button> */}
      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
};
