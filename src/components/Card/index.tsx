import * as styles from "./style.css";

interface CardProps {
  children: React.ReactNode;
  type: "similar" | "normal" | "content";
  isSelected?: boolean;
  isUseSelect?: boolean;
}

const Card = ({ children, type, isSelected, isUseSelect }: CardProps) => {
  return (
    <div className={styles.card({ type, isSelected, isUseSelect })}>
      {children}
    </div>
  );
};

export default Card;
