import * as styles from "./style.css";
import { type LevelType } from "../../type";

interface TagProps {
  children: React.ReactNode;
  level: LevelType;
}

const Tag = ({ children, level }: TagProps) => {
  return <div className={styles.tag({ level })}>{children}</div>;
};

export default Tag;
