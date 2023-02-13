import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import styles from "./carouse.module.scss";

const posts = [
  {
    title: "AC MILAN V TORINO, SERIE A 2022/23: THE HIGHLIGHTS",
    paragraph:
      "Giroud decides it at San Siro: the Rossoneri beat the Granata to get back to winning ways",
    image:
      "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/c1bac5fa-4313-4241-9728-5351cc8fa051/2023.02.10-HL-MilanTorino-WebHP.png?w=1280&auto=format",
  },
  {
    title: "SUNDAY AT WORK AHEAD OF THE CHAMPIONS LEAGUE",
    paragraph:
      "Rossoneri at work at Milanello in preparation for Tuesday's game against Spurs",
    image:
      "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/e3189e0e-6576-40a7-b562-515b10fc6d09/2023.02.12-Report-Allenamento-WebHP.png?w=1280&auto=format",
  },
  {
    title: "CUDICINI: TOTTENHAM ARE A STRONG SIDE",
    paragraph:
      "Carlo, former player of each side, analyses the first leg of the Champions League Round of 16 tie",
    image:
      "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/e2a2f53b-8a39-4ce3-a53a-395c36b3d7db/2023.02.12-ITWCudicini-MilanTottenham-WebHP.png?w=1536&auto=format",
  },
  {
    title: "PIEMONTE BAGS THE WINNER AGAINST POMIGLIANO",
    paragraph:
      "Martina's tenth goal of the season is enough to secure another Serie A win for the Rossonere",
    image:
      "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/a32c1268-80bf-4c44-8b38-0f8d749a2730/2023.02.12-Report-MilanPomigliano-Femminile-WebHP.png?w=1280&auto=format",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = posts.length - 1;
    } else if (newIndex >= posts.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {posts.map((item, index) => {
          return <CarouselItem key={index} item={item} />;
        })}
      </div>

      <button
        className={styles.leftArrowCarousel}
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <span>{"<"}</span>
      </button>

      <ul className={styles.indicators}>
        {posts.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => updateIndex(index)}
              className={`${styles.CarouselDot} ${
                index === activeIndex ? `${styles.active}` : ""
              }`}
            ></div>
          );
        })}
      </ul>
      <button
        className={styles.rightArrowCarousel}
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <span>{">"}</span>
      </button>
    </div>
  );
}
