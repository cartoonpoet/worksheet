import { Card, Problem } from "components";
import * as styles from "./style.css";
import { useProblemList } from "hooks/useProblemList";
import AddCircleIcon from "assets/add-circle.png";
import AddCircleFillIcon from "assets/add-circle-fill.png";
import DeleteIcon from "assets/delete.png";
import Placeholder from "./Placeholder";

const ProblemList = () => {
  const {
    problemCount,
    problems,
    handleDeleteProblem,
    handleAddSimilarProblem,
    levelCountText,
    selectedProblemId,
    replacedProblemId,
  } = useProblemList();

  const isEmpty = problemCount === 0;
  return (
    <Card type="normal">
      <section className={styles.section}>
        <header className={styles.headerSection}>학습지 상세 편집</header>
        <main
          className={`${styles.mainSection} ${
            isEmpty ? styles.placeholderSection : ""
          }`}
        >
          {isEmpty ? (
            <Placeholder />
          ) : (
            problems.map((problem, idx) => {
              const isSelected = [
                selectedProblemId,
                replacedProblemId,
              ].includes(problem.id);
              return (
                <Problem
                  isUseSelect
                  key={problem.id}
                  num={idx + 1}
                  title={problem.title}
                  isShortAnswer={problem.type === 2}
                  problemImageUrl={problem.problemImageUrl}
                  answerRate={problem.answerRate}
                  level={problem.level}
                  isSelected={isSelected}
                  buttons={[
                    {
                      icon: isSelected ? AddCircleFillIcon : AddCircleIcon,
                      alt: "AddCircleIcon",
                      text: "유사문제",
                      onClick: () => handleAddSimilarProblem(problem.id),
                      isSelected: isSelected,
                    },
                    {
                      icon: DeleteIcon,
                      alt: "DeleteIcon",
                      text: "삭제",
                      onClick: () => handleDeleteProblem(problem.id),
                    },
                  ]}
                />
              );
            })
          )}
        </main>
        <footer className={styles.footerSection}>
          {!isEmpty && (
            <>
              <div className={styles.levelCountSection}>{levelCountText}</div>
              <div className={styles.separator}>&nbsp;&nbsp;|&nbsp;</div>
            </>
          )}
          <div
            className={styles.problemCount({
              type: !isEmpty ? "normal" : "danger",
            })}
          >
            문제 수 {problemCount} 개
          </div>
        </footer>
      </section>
    </Card>
  );
};

export default ProblemList;
