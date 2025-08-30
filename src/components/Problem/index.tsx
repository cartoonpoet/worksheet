import { Card, Tag } from "components";
import * as styles from "./style.css";
import DeleteIcon from "assets/delete.png";
import AddCircleIcon from "assets/add-circle.png";

interface ProblemProps {
  num: number;
  title: string;
  isShortAnswer: boolean; // 주관식 여부
  problemImageUrl: string;
  answerRate: number;
  level: 1 | 2 | 3 | 4 | 5; //난이도
  onClickSimilarProblem?: () => void;
  onClickDelete?: () => void;
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
}: ProblemProps) => {
  return (
    <Card type="content">
      <header className={styles.headerSection}>
        <div className={styles.numSection}>{num}</div>
        <div className={styles.titleSection}>
          <div className={styles.title}>{title}</div>
          <div className={styles.buttonSection}>
            <button className={styles.button} onClick={onClickSimilarProblem}>
              <img src={AddCircleIcon} alt="AddCircleIcon" draggable={false} />
              유사문제
            </button>
            <button className={styles.button} onClick={onClickDelete}>
              <img src={DeleteIcon} alt="DeleteIcon" draggable={false} />
              삭제
            </button>
          </div>
        </div>
      </header>
      <main className={styles.mainSection}>
        <div className={styles.tagSection}>
          <Tag level={level}>{tagLevelMap[level]}</Tag>
          <Tag level={1}>
            <div className={styles.answerRate}>{answerRate}%</div>
          </Tag>
          <Tag level={1}>
            <div className={styles.type}>
              {isShortAnswer ? "주관식" : "객관식"}
            </div>
          </Tag>
        </div>
        <div>
          <img
            src={problemImageUrl}
            alt="problemImage"
            draggable={false}
            className={styles.problemImage}
          />
        </div>
      </main>
    </Card>
  );
};

export default Problem;
