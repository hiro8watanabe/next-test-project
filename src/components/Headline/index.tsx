import { ReactNode } from "react";
import styles from "src/components/Headline/Headline.module.css";

type Props = {
  page: string;
  children: ReactNode;
};

export const Headline: React.FC<Props> = (props) => {
  const { page, children } = props;
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js! {page} Page</a>
      </h1>

      <p className={styles.description}>Get started by editing {children}</p>
      {/* <button onClick={props.onClick}>ボタン</button> */}
    </div>
  );
};
