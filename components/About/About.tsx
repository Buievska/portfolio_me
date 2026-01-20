"use client";

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Building practical, user-friendly web solutions — from concept to
            launch.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textColumn}>
            <p>
              Hi! I&apos;m Anna — a Full-Stack Developer who loves building
              websites from idea to finished product. <br />I work on both the
              frontend and backend, bringing together design, logic, and a
              smooth user experience.
            </p>
            <p>
              I enjoy turning simple ideas into real projects: planning the
              structure, creating clean and responsive interfaces, connecting
              the server side, and making everything work nicely together.
            </p>
            <p>
              Besides development, I also design websites — I love when things
              look harmonious, clear, and human-friendly.
            </p>
            <p>
              I&apos;m constantly learning, experimenting, improving my skills,
              and finishing what I start. For me, a website shouldn&apos;t just
              &quot;work&quot; — it should feel helpful, intuitive, and
              enjoyable to use.
            </p>
          </div>

          <div className={styles.visualColumn}>
            <div className={styles.imageContainer}>
              <div className={styles.pinkCircle}>
                <Image
                  src="/my-photo.png"
                  alt="Anna Buievska"
                  fill
                  className={styles.profileImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className={styles.educationCard}>
              <div className={styles.eduItem}>
                <div>
                  <p className={styles.schoolName}>
                    Poznan University of Economics And Business
                  </p>
                  <p className={styles.degreeName}>
                    Bachelor&apos;s degree, Logistics
                  </p>
                </div>
                <span className={styles.date}>2021-2024</span>
              </div>
              <div className={styles.eduItem}>
                <div>
                  <p className={styles.schoolName}>IT School GoIT</p>
                  <p className={styles.degreeName}>Fullstack developer</p>
                </div>
                <span className={styles.date}>2024-2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
