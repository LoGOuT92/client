import styles from "./SingleArticule.module.scss";
import Image from "next/image";

export default function SingleArticule({
  smallArticule,
}: {
  smallArticule?: string;
}) {
  return (
    <article
      className={`${styles.articleContiner} ${
        smallArticule ? styles.smallArticule : ""
      }`}
    >
      <div>
        <Image
          width={550}
          height={313}
          src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/74a26350-377e-45f7-83ed-4a04fa89eab9/2023.02.12-Report-MilanPomigliano-Femminile-Orizzontale.jpg?w=565&auto=format"
          alt=""
        />
      </div>
      <h3>TIME MACHINE: AC MILAN AND THE CHAMPIONS LEAGUE ROUND OF 16</h3>
    </article>
  );
}
