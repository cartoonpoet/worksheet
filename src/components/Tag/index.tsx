import * as styles from "./style.css";

interface TagProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
}

const Tag = ({ children, level }: TagProps) => {
  return <div className={styles.tag({ level })}>{children}</div>;
};

export default Tag;
