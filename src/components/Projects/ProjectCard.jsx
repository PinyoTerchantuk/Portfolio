import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, tags, demoLink, sourceLink, skills, demo, source, figma, keepSilk, wokFood, fanruan },
}) => {
  // Handle both old and new project data formats
  const projectTags = tags || skills || [];
  const projectDemoLink = demoLink || demo || fanruan || figma;
  const projectSourceLink = sourceLink || source;
  const isImKoomOrKeap = title && (title.includes("Im-Koom") || title.includes("Keap"));

  return (
    <div className={styles.container} data-project={title}>
      <div className={styles.imageSection}>
        <div className={styles.imagePlaceholder}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`Image of ${title}`}
              className={styles.image}
            />
          ) : (
            <div className={styles.imagePlaceholderContent}>
              <span>Project Preview</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {projectTags.map((tag, id) => (
            <span key={id} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          {projectDemoLink && (
            <a
              href={projectDemoLink}
              className={styles.demoButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isImKoomOrKeap ? "DEMO" : "Demo"}
            </a>
          )}
          {projectSourceLink && projectSourceLink !== "#" ? (
            <a
              href={projectSourceLink}
              className={styles.sourceButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          ) : (
            <a
              href={projectDemoLink || "#"}
              className={styles.sourceButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isImKoomOrKeap ? "SOURCE" : "CASE STUDY"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};