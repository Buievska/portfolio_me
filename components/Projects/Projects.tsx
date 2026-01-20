"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData, Project } from "@/constants/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const sortedProjects = [...projectsData].reverse();
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <p className={styles.subtitle}>
        From a blank canvas to a fully functional digital experience
      </p>

      <div className={styles.projectsGrid}>
        {currentProjects.map((project: Project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImg}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>

            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <span className={styles.projectRole}>{project.role}</span>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.featuresContainer}>
                <ul className={styles.featuresList}>
                  {project.features.slice(0, 3).map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                  {project.features.length > 3 && (
                    <li className={styles.moreDots}>...</li>
                  )}
                </ul>
              </div>

              <Link
                href={`/projects/${project.id}`}
                className={styles.detailsBtn}
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`${styles.pageBtn} ${currentPage === number ? styles.activePage : ""}`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
