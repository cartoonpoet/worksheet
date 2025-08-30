import * as styles from "./style.css";

interface CardProps {
  children: React.ReactNode;
  type: "similar" | "normal" | "content";
  isSelected?: boolean;
}

const Card = ({ children, type, isSelected }: CardProps) => {
  return <div className={styles.card({ type, isSelected })}>{children}</div>;
};

export default Card;
