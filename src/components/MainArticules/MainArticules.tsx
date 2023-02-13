/* eslint-disable @next/next/no-img-element */
import styles from "./MainArticules.module.scss";
import Image from "next/image";

export function MainArticules() {
  return (
    <div className={styles.mainArticulesContainer}>
      <div className={styles.mainArticulesCarousel}>
        <img
          src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/c1bac5fa-4313-4241-9728-5351cc8fa051/2023.02.10-HL-MilanTorino-WebHP.png?w=1280&auto=format"
          alt="asd"
        />
        <button className={styles.leftArrowCarousel}>{"<"}</button>
        <button className={styles.rightArrowCarousel}>{">"}</button>
        <div className={styles.mainArticulesContent}>
          <div>
            <h2>STRAIGHT BACK TO WORK WITH TOTTENHAM UP NEXT</h2>
            <p>
              Morning session for the Rossoneri at Milanello as preparations
              begin for the European tie
            </p>
          </div>
          <div className={styles.mainArticulesContentLink}>
            <a>READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
}
