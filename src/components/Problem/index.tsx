import { Card, Tag } from "components";
import * as styles from "./style.css";
import { type LevelType } from "../../type";

interface ButtonConfig {
  icon: string;
  alt: string;
  text: string;
  onClick: () => void;
  isSelected?: boolean;
}

interface ProblemProps {
  num: number;
  title: string;
  isShortAnswer: boolean; // 주관식 여부
  problemImageUrl: string;
  answerRate: number;
  level: LevelType; //난이도
  isSelected?: boolean;
  buttons: ButtonConfig[];
  isUseSelect?: boolean;
}

const tagLevelMap = {
  1: "하",
  2: "중하",
  3: "중",
  4: "상",
  5: "최상",
};

const Problem = ({
  num,
  title,
  isShortAnswer,
  problemImageUrl,
  answerRate,
  level,
  isSelected,
  buttons,
  isUseSelect,
}: ProblemProps) => {
  return (
    <Card type="content" isSelected={isSelected} isUseSelect={isUseSelect}>
      <header className={styles.headerSection}>
        <section className={styles.numSection}>{num}</section>
        <section className={styles.titleSection}>
          <div className={styles.title}>{title}</div>
          <div className={styles.buttonSection}>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`${styles.button} ${
                  button.isSelected ? styles.buttonSelected : ""
                }`}
                onClick={button.onClick}
              >
                <img src={button.icon} alt={button.alt} draggable={false} />
                {button.text}
              </button>
            ))}
          </div>
        </section>
      </header>
      <main className={styles.mainSection}>
        <section className={styles.tagSection}>
          <Tag level={level}>{tagLevelMap[level]}</Tag>
          <Tag level={1}>
            <div className={styles.answerRate}>{answerRate}%</div>
          </Tag>
          <Tag level={1}>
            <div className={styles.type}>
              {isShortAnswer ? "주관식" : "객관식"}
            </div>
          </Tag>
        </section>
        <section>
          <img
            src={problemImageUrl}
            alt="problemImage"
            draggable={false}
            className={styles.problemImage}
          />
        </section>
      </main>
    </Card>
  );
};

export default Problem;
