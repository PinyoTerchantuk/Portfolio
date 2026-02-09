import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, figma, keepSilk, wokFood, fanruan },
}) => {
  // For Fanruan project, use fanruan as demo if demo is not set
  const demoUrl = demo || fanruan;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          {demoUrl && (
            <a href={demoUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
          {source && source !== fanruan && (
            <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          )}
          {figma && (
            <a href={figma} className={styles.link} target="_blank" rel="noopener noreferrer">
              Figma
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
