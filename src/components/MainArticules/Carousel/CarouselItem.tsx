/* eslint-disable @next/next/no-img-element */
import styles from "./carouselItem.module.scss";
interface item {
  title: string;
  paragraph: string;
  image: string;
}

export function CarouselItem({ item }: { item: item }) {
  return (
    <div className={styles.carouselItem}>
      <img
        className={styles.carouselImg}
        src={item.image}
        alt="Articule image"
      />
      <div className={styles.mainArticulesContent}>
        <div>
          <h2>{item.title}</h2>
          <p>{item.paragraph}</p>
        </div>
        <div className={styles.mainArticulesContentLink}>
          <a>READ MORE</a>
        </div>
      </div>
    </div>
  );
}
