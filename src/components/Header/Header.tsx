import styles from "@/components/Header/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.headerContainer} ${isScrolled && styles.background}`}
    >
      <Link href="/">
        <Image
          src="https://i.ibb.co/TYVJ3S4/milan.png"
          alt="Milan Logo and back to home page button"
          width={75}
          height={75}
        />
      </Link>

      <ul
        className={`${styles.navigationContainer} ${
          isScrolled && styles.background
        }`}
      >
        <li>
          <Link href="/history">History</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>Zapisy</li>
        <li>Trofea</li>
      </ul>

      <div className={styles.buttonsContainer}>
        <div
          className={`${styles.buttonLogin} ${isScrolled && styles.background}`}
        >
          <button>Profile</button>
        </div>

        <div
          className={`${styles.buttonLogin} ${isScrolled && styles.background}`}
        >
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
