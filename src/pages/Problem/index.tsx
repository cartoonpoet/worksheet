import * as styles from "./style.css";
import ProblemList from "./ProblemList";
import SimilarProblemList from "./SimilarProblemList";

const Problem = () => {
  return (
    <div className={styles.layout}>
      <SimilarProblemList />
      <ProblemList />
    </div>
  );
};

export default Problem;
