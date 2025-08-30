import { Card, Problem } from "components";
import PlaceHolder from "./PlaceHolder";
import * as styles from "./style.css";
import { useProblemStore } from "store/useProblemStore";
import { useGetSimilarity } from "apis/domain/similarity/hook";
import { useShallow } from "zustand/shallow";

const SimilarProblemList = () => {
  const { selectedProblemId, problems } = useProblemStore(
    useShallow((state) => ({
      selectedProblemId: state.selectedProblemId,
      problems: state.problems,
    }))
  );
  const { data = [] } = useGetSimilarity({
    selectedProblemId,
    excludeProblemId: problems
      .filter((problem) => problem.id !== selectedProblemId)
      .map((problem) => problem.id),
  });
  return (
    <Card type="similar">
      {data.length === 0 ? (
        <PlaceHolder />
      ) : (
        <section className={styles.section}>
          <header className={styles.headerSection}>유사 문항</header>
          <main className={styles.mainSection}>
            {data.map((problem, idx) => (
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
        </section>
      )}
    </Card>
  );
};

export default SimilarProblemList;
