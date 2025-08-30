import { Card, Problem } from "components";
import * as styles from "./style.css";
import { useProblemList } from "hooks/useProblemList";

const ProblemList = () => {
  const {
    problemCount,
    problems,
    handleDeleteProblem,
    handleAddSimilarProblem,
    levelCountText,
    selectedProblemId,
  } = useProblemList();
  return (
    <Card type="normal">
      <section className={styles.section}>
        <header className={styles.headerSection}>학습지 상세 편집</header>
        <main className={styles.mainSection}>
          {problems.map((problem, idx) => (
            <Problem
              key={problem.id}
              num={idx + 1}
              title={problem.title}
              isShortAnswer={problem.type === 2}
              problemImageUrl={problem.problemImageUrl}
              answerRate={problem.answerRate}
              level={problem.level}
              onClickDelete={() => handleDeleteProblem(problem.id)}
              onClickSimilarProblem={() => handleAddSimilarProblem(problem.id)}
              isSelected={selectedProblemId === problem.id}
            />
          ))}
        </main>
        <footer className={styles.footerSection}>
          <div className={styles.levelCountSection}>{levelCountText}</div>
          <div className={styles.separator}>&nbsp;&nbsp;|&nbsp;</div>
          <div className={styles.problemCountSection}>
            문제 수 {problemCount} 개
          </div>
        </footer>
      </section>
    </Card>
  );
};

export default ProblemList;
