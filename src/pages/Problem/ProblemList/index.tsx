import { Card, Problem } from "components";
import * as styles from "./style.css";
import { useGetProblems } from "apis/domain/problems/hook";

const ProblemList = () => {
  const { data: problems } = useGetProblems();

  return (
    <Card type="normal">
      <section className={styles.section}>
        <header className={styles.headerSection}>학습지 상세 편집</header>
        <main className={styles.mainSection}>
          {problems?.map((problem, idx) => (
            <Problem
              key={problem.id}
              num={idx}
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
            하10 · 중하10 · 중10 · 상10 · 최상10
          </div>
          <div className={styles.separator}>&nbsp;&nbsp;|&nbsp;</div>
          <div className={styles.problemCountSection}>문제 수 50 개</div>
        </footer>
      </section>
    </Card>
  );
};

export default ProblemList;
