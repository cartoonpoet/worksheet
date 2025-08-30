import { Card } from "../../../components";
import * as styles from "./style.css";

const ProblemList = () => {
  return (
    <Card type="normal">
      <section className={styles.section}>
        <header className={styles.headerSection}>학습지 상세 편집</header>
        <main className={styles.mainSection}>1</main>
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
