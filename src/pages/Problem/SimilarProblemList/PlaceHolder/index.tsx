import * as styles from "./style.css";
import SimilarProblemButton from "./SimilarProblemButton";

const PlaceHolder = () => {
  return (
    <ul className={styles.guideSection}>
      <li className={styles.guideItem}>
        <SimilarProblemButton />
        버튼울 누르면
      </li>
      <li>문제를 추가 또는 교체할수 있습니다.</li>
    </ul>
  );
};

export default PlaceHolder;
