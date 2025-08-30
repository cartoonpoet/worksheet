import { Card, Problem } from "components";
import * as styles from "./style.css";
import { useGetProblems } from "apis/domain/problems/hook";

const ProblemList = () => {
  const { data: problems = [] } = useGetProblems();

  const levelCount = problems.reduce((acc, problem) => {
    acc[problem.level] = (acc[problem.level] || 0) + 1;
    return acc;
  }, {} as Record<1 | 2 | 3 | 4 | 5, number>);
  const problemCount = problems.length;

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
            />
          ))}
        </main>
        <footer className={styles.footerSection}>
          <div className={styles.levelCountSection}>
            하{levelCount[1]} · 중하{levelCount[2]} · 중{levelCount[3]} · 상
            {levelCount[4]} · 최상{levelCount[5]}
          </div>
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
