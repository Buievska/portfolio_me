"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projectsData } from "@/constants/projects";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) {
    return (
      <div className={styles.errorContainer}>
        <h1>Project not found</h1>
        <button onClick={() => router.push("/")} className={styles.backBtn}>
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.backLink}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <article className={styles.detailCard}>
          <div className={styles.mediaSection}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className={styles.contentSection}>
            <header className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.roleBadge}>{project.role}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className={styles.infoGrid}>
              <section className={styles.description}>
                <h2>About Project</h2>
                <p>{project.description}</p>
              </section>

              <section className={styles.features}>
                <h2>Key Features</h2>
                <ul className={styles.featuresList}>
                  {project.features.map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                </ul>
              </section>
            </div>

            <footer className={styles.actions}>
              <a
                href={project.linkLive}
                className={styles.primaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Site
              </a>
              <a
                href={project.linkCode}
                className={styles.secondaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </footer>
          </div>
        </article>
      </div>
    </main>
  );
}
