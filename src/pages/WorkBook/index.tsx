import * as styles from "./style.css";
import EditableCard from "./EditableCard";
import SimilarQuestionCard from "./SimilarQuestionCard";

const WorkBook = () => {
  return (
    <div className={styles.layout}>
      <SimilarQuestionCard />
      <EditableCard />
    </div>
  );
};

export default WorkBook;
