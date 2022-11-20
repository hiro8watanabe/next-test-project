import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "./Main.module.css";

type Props = {
  page: string;
};

export const Main: React.FC<Props> = (props) => {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </Headline>

      <Links />
    </main>
  );
};
