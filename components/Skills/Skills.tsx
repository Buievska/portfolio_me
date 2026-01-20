"use client";

import { skillsData, Skill } from "@/constants/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.subtitle}>Skills and technologies I work with</p>
        </div>

        <div className={styles.skillsList}>
          {skillsData.map((skill: Skill) => (
            <div key={skill.id} className={styles.skillItem}>
              <div className={styles.iconBox}>
                <svg className={styles.icon}>
                  <use href={`/icons.svg#${skill.iconId}`} />
                </svg>
              </div>
              <span className={styles.label}>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
