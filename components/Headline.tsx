import { ReactNode } from "react";
import styles from "../styles/Home.module.css";

type Props = {
  page: string;
  children: ReactNode;
};

export const Headline: React.FC<Props> = (props) => {
  // console.log(props);
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js! {props.page} Page</a>
      </h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
      {/* <button onClick={props.onClick}>ボタン</button> */}
    </div>
  );
};
