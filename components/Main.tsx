import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "./Main.module.css";

type Props = {
  page: string;
};

export const Main: React.FC<Props> = (props) => {
  const { page } = props;
  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code className={styles.code}>pages/{page}.tsx</code>
      </Headline>

      <Links />
    </main>
  );
};
