import styles from "./SingleMatch.module.scss";
import Image from "next/image";
export default function SingleMatch({ type }: { type: string }) {
  return (
    <div className={styles.SingleMatch}>
      <h2>{type}</h2>
      <div className={styles.SingleMatchContent}>
        <div className={styles.SingleTeam}>
          <Image
            alt="Home team logo"
            src="https://storage.googleapis.com/static-production.netcosports.com/directv/OPTA_LOGOS/120.png"
            width={90}
            height={90}
          />
          <span>Milan</span>
        </div>
        <span>2-1</span>
        <div className={styles.SingleTeam}>
          <Image
            alt="Away team logo"
            src="https://storage.googleapis.com/static-production.netcosports.com/directv/OPTA_LOGOS/121.png"
            width={90}
            height={90}
          />
          <span>Milan</span>
        </div>
      </div>
      <span>2020-02-02</span>
    </div>
  );
}
