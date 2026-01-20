"use client";

import { useState } from "react";
import styles from "./Clouds.module.css";

type Sparkle = {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: string;
  delay: string;
};

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const createSparkles = (): Sparkle[] =>
  Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: random(2, 5),
    top: `${random(0, 100)}%`,
    left: `${random(0, 100)}%`,
    duration: `${random(2, 5)}s`,
    delay: `${random(0, 5)}s`,
  }));

export default function Clouds() {
  const [sparkles] = useState<Sparkle[]>(createSparkles);

  return (
    <div className={styles.wrapper}>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className={styles.sparkle}
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}

      <div
        className={styles.cloud}
        style={{
          top: "10%",
          width: "180px",
          height: "100px",
          opacity: 0.6,
          animationDuration: "65s",
          animationDelay: "-10s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "35%",
          width: "220px",
          height: "120px",
          opacity: 0.5,
          animationDuration: "80s",
          animationDelay: "-40s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "80%",
          width: "200px",
          height: "110px",
          opacity: 0.4,
          animationDuration: "75s",
          animationDelay: "-60s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "20%",
          width: "140px",
          height: "80px",
          animationDuration: "45s",
          animationDelay: "-25s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "55%",
          width: "160px",
          height: "90px",
          animationDuration: "55s",
          animationDelay: "-5s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "70%",
          width: "130px",
          height: "70px",
          animationDuration: "50s",
          animationDelay: "-35s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "15%",
          width: "90px",
          height: "50px",
          opacity: 0.9,
          animationDuration: "35s",
          animationDelay: "-15s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "45%",
          width: "80px",
          height: "45px",
          opacity: 0.8,
          animationDuration: "30s",
          animationDelay: "-50s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "90%",
          width: "100px",
          height: "55px",
          opacity: 0.9,
          animationDuration: "40s",
          animationDelay: "-20s",
        }}
      />
      <div
        className={styles.cloud}
        style={{
          top: "5%",
          width: "110px",
          height: "60px",
          opacity: 0.7,
          animationDuration: "60s",
          animationDelay: "-55s",
        }}
      />
    </div>
  );
}
