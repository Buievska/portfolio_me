"use client";

import Link from "next/link";
import styles from "./Hero.module.css";
import dynamic from "next/dynamic";

const Clouds = dynamic(() => import("../Clouds/Clouds"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundWrapper}>
        <Clouds />
      </div>

      <div className={styles.socialSide}>
        <a
          href="https://github.com/Buievska"
          target="_blank"
          className={styles.socialIcon}
        >
          <svg width="24" height="24">
            <use href="/icons.svg#icon-github" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/anna-buievska-230346382/"
          target="_blank"
          className={styles.socialIcon}
        >
          <svg width="24" height="24">
            <use href="/icons.svg#icon-linkedin" />
          </svg>
        </a>
        <a href="mailto:annabuievska@gmail.com" className={styles.socialIcon}>
          <svg width="24" height="24">
            <use href="/icons.svg#icon-mail" />
          </svg>
        </a>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Anna Buievska</h1>
        <p className={styles.subtitle}>FULLSTACK DEVELOPER</p>

        <Link href="#projects" className={styles.viewBtn}>
          View Projects
        </Link>
      </div>
    </section>
  );
}
