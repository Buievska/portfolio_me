"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.glassContainer}>
        <Link href="/" className={styles.logo}>
          {"<AB>"}
        </Link>

        <nav>
          <ul className={styles.navList}>
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  onClick={(e) => handleScroll(e, item.id)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.rightSection}>
          <Link
            href="https://drive.google.com/file/d/1sWBmQwf_8W_E6vMOpsC-1baUp2xum78N/view?usp=sharing"
            target="_blank"
            className={styles.resumeBtn}
          >
            Resume
          </Link>
        </div>

        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <svg className={styles.menuIcon} width="35" height="25">
            <use href="/icons.svg#icon-menu" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <MobileMenu onClose={toggleMenu} onScroll={handleScroll} />
      )}
    </header>
  );
}
