import { Button } from "../../../components";
import AddCircleIcon from "../../../assets/add-circle.png";
import * as styles from "./style.css";

const SimilarProblemButton = () => {
  return (
    <Button>
      <div className={styles.buttonSection}>
        <img
          src={AddCircleIcon}
          alt="AddCircleIcon"
          draggable={false}
          className={styles.buttonImage}
        />
        <div>유사문제</div>
      </div>
    </Button>
  );
};

export default SimilarProblemButton;
