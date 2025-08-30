import { Card, Problem } from "components";
import PlaceHolder from "./PlaceHolder";
import * as styles from "./style.css";
import { useSimilarProblemList } from "hooks/useSimilarProblemList";
import AddCircleIcon from "assets/add-circle.png";
import ReplaceCircleIcon from "assets/swap_horiz.png";

const SimilarProblemList = () => {
  const { similarProblems, handleAddProblem, handleReplaceProblem } =
    useSimilarProblemList();
  return (
    <Card type="similar">
      {similarProblems.length === 0 ? (
        <PlaceHolder />
      ) : (
        <section className={styles.section}>
          <header className={styles.headerSection}>유사 문항</header>
          <main className={styles.mainSection}>
            {similarProblems.map((problem, idx) => (
              <Problem
                key={problem.id}
                num={idx + 1}
                title={problem.title}
                isShortAnswer={problem.type === 2}
                problemImageUrl={problem.problemImageUrl}
                answerRate={problem.answerRate}
                level={problem.level}
                buttons={[
                  {
                    icon: ReplaceCircleIcon,
                    alt: "ReplaceCircleIcon",
                    text: "교체",
                    onClick: () => handleReplaceProblem(problem.id),
                  },
                  {
                    icon: AddCircleIcon,
                    alt: "AddCircleIcon",
                    text: "추가",
                    onClick: () => handleAddProblem(problem.id),
                  },
                ]}
              />
            ))}
          </main>
        </section>
      )}
    </Card>
  );
};

export default SimilarProblemList;
