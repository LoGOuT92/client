import { PrimaryButton } from "../ui/PrimaryButton";
import styles from "./MobileApp.module.scss";
import Image from "next/image";

export function MobileApp({
  img,
  title,
  paragraph,
  button,
}: {
  img: string;
  title: string;
  paragraph: string;
  button: string;
}) {
  return (
    <section className={styles.mobileAppContainer}>
      <h2>{title}</h2>

      <div style={{ marginTop: "30px", border: "2px solid white" }}>
        <Image
          width={1140}
          height={445}
          alt="Mobile aplication banner"
          src={img}
        />

        <div className={styles.mobileAppContent}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <PrimaryButton title={button} color="red" />
        </div>
      </div>
    </section>
  );
}
