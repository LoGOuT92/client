import styles from "./Articules.module.scss";
import SingleArticule from "./SingleArticule/SingleArticule";

export function Articules() {
  return (
    <section className={styles.articulesContainer}>
      <h2>LATEST NEWS</h2>
      <div className={styles.articules}>
        <SingleArticule />
        <SingleArticule />
      </div>
      <div className={styles.smallArticules}>
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
        <SingleArticule smallArticule />
      </div>
    </section>
  );
}
