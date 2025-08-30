import { Card, Tag } from "components";
import * as styles from "./style.css";
import DeleteIcon from "assets/delete.png";
import AddCircleIcon from "assets/add-circle.png";
import AddCircleFillIcon from "assets/add-circle-fill.png";

interface ProblemProps {
  num: number;
  title: string;
  isShortAnswer: boolean; // 주관식 여부
  problemImageUrl: string;
  answerRate: number;
  level: 1 | 2 | 3 | 4 | 5; //난이도
  onClickSimilarProblem?: () => void;
  onClickDelete?: () => void;
  isSelected?: boolean;
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
  onClickSimilarProblem,
  onClickDelete,
  isSelected,
}: ProblemProps) => {
  return (
    <Card type="content" isSelected={isSelected}>
      <header className={styles.headerSection}>
        <section className={styles.numSection}>{num}</section>
        <section className={styles.titleSection}>
          <div className={styles.title}>{title}</div>
          <div className={styles.buttonSection}>
            <button
              className={`${styles.button} ${
                isSelected ? styles.buttonSelected : ""
              }`}
              onClick={onClickSimilarProblem}
            >
              <img
                src={isSelected ? AddCircleFillIcon : AddCircleIcon}
                alt="AddCircleIcon"
                draggable={false}
              />
              유사문제
            </button>
            <button className={styles.button} onClick={onClickDelete}>
              <img src={DeleteIcon} alt="DeleteIcon" draggable={false} />
              삭제
            </button>
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
