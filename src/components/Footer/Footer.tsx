import styles from "./footer.module.scss";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.image}>
        <Image
          width={140}
          height={190}
          alt=""
          src="https://www.acmilan.com/images/logo.png"
        />
      </div>
      {/* <span>#ALWAYSMILAN</span>
      <span>#SEMPREMILAN</span> */}
    </footer>
  );
}
