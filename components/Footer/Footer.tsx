"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Link href="/" className={styles.logo}>
            {"<AB>"}
          </Link>
          <div className={styles.containerColumn}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Quick Links</h4>
              <ul className={styles.list}>
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
                <li>
                  <Link href="#skills">Skills</Link>
                </li>
                <li>
                  <Link href="#contacts">Contacts</Link>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://github.com/Buievska"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.icon}>
                    <use href="/icons.svg#icon-github" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/anna-buievska"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={styles.icon}>
                    <use href="/icons.svg#icon-linkedin" />
                  </svg>
                </a>
                <a href="mailto:annabuievska@mail.com">
                  <svg className={styles.icon}>
                    <use href="/icons.svg#icon-mail" />
                  </svg>
                </a>
                <a href="tel:+48539744323">
                  <svg className={styles.icon} width="40px" height="40px">
                    <use href="/icons.svg#icon-phone" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.copyrightText}>
          © {currentYear} Anna Buievska. All rights reserved. Built with{" "}
          <span className={styles.heart}>💜</span>
        </div>
      </div>
    </footer>
  );
}
