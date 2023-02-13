import styles from "./MatchCenter.module.scss";
import SingleMatch from "./SingleMatch/SingleMatch";

export function MatchCenter() {
  return (
    <section className={styles.MatchCenterContainer}>
      <h2>MATCH CENTER</h2>
      <div className={styles.MatchCenter}>
        <SingleMatch type={"Next Match"} />
        <SingleMatch type={"Live"} />
        <SingleMatch type={"Previous Match"} />
      </div>
    </section>
  );
}
