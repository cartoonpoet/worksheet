import { Card } from "../../../components";
import * as styles from "./style.css";
import SimilarProblemButton from "./SimilarProblemButton";

const SimilarProblemList = () => {
  return (
    <Card type="similar">
      <ul className={styles.guideSection}>
        <li className={styles.guideItem}>
          <SimilarProblemButton />
          버튼울 누르면
        </li>
        <li>문제를 추가 또는 교체할수 있습니다.</li>
      </ul>
    </Card>
  );
};

export default SimilarProblemList;
