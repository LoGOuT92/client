import { PrimaryButton } from "../ui/PrimaryButton";
import styles from "./Shop.module.scss";
import Image from "next/image";

export function Shop() {
  return (
    <section className={styles.shopContainer}>
      <h2>SHOP</h2>
      <div className={styles.shop}>
        <div className={styles.shopItem}>
          <Image
            width={300}
            height={300}
            alt=""
            src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/d8ed6d13-a77e-449e-b9d6-bc23f344187e/Shop-HomeKit-2022-23.png.jpg?w=302&auto=format"
          />
          <div className={styles.buttonContainer}>
            <PrimaryButton title="BUY NOW" color="red" />
          </div>
        </div>

        <div className={styles.shopItem}>
          <Image
            width={300}
            height={300}
            alt=""
            src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/b09182f3-ef33-4bc7-94d4-9957e8e28e6e/Shop-AwayKit-2022-23.jpg?w=302&auto=format"
          />
          <div className={styles.buttonContainer}>
            <PrimaryButton title="BUY NOW" color="red" />
          </div>
        </div>

        <div className={styles.shopItem}>
          <Image
            width={300}
            height={300}
            alt=""
            src="https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/ebb33e33-a472-4a95-b39e-0cd29d0d550e/Shop-ThirdKit-2022-23.jpg?w=302&auto=format"
          />
          <div className={styles.buttonContainer}>
            <PrimaryButton title="BUY NOW" color="red" />
          </div>
        </div>
      </div>
    </section>
  );
}
