import * as styles from "./style.css";

interface CardProps {
  children: React.ReactNode;
  type: "similar" | "normal";
}

const Card = ({ children, type }: CardProps) => {
  return <div className={styles.card({ type })}>{children}</div>;
};

export default Card;
