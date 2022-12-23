import styles from "src/components/Links/Links.module.css";

type Props = {
  items: {
    title: string;
    href: string;
    description: string;
  }[];
  handleReduce: React.MouseEventHandler<HTMLButtonElement>;
};

type ITEMS = {
  title: string;
  href: string;
  description: string;
};

export function Links({ items }: Props) {
  return (
    <div className={styles.grid}>
      {items.map((item: ITEMS) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
