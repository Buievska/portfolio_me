"use client";

import Link from "next/link";
import styles from "./Header.module.css";

interface MobileMenuProps {
  onClose: () => void;
  onScroll: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => void;
}

export default function MobileMenu({ onClose, onScroll }: MobileMenuProps) {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    onScroll(e, id);
    onClose();
  };

  return (
    <div className={styles.mobileOverlay}>
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <nav className={styles.mobileNav}>
        <ul className={styles.mobileNavList}>
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.mobileActions}>
        <span className={styles.mobileLang}>EN</span>
        <Link href="/" className={styles.mobileResumeBtn} onClick={onClose}>
          Resume
        </Link>
      </div>
    </div>
  );
}
