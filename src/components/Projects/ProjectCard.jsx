import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, figma, keepSilk, wokFood, readery },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
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
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {source && (
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
        {figma && (
          <a href={figma} className={styles.link} target="_blank" rel="noopener noreferrer">
            Figma
          </a>
        )}
        {keepSilk && (
          <a href={keepSilk} className={styles.link} target="_blank" rel="noopener noreferrer">
            Keep Silk
          </a>
        )}
        {wokFood && (
          <a href={wokFood} className={styles.link} target="_blank" rel="noopener noreferrer">
            Wok Food
          </a>
        )}
        {readery && (
          <a href={readery} className={styles.link} target="_blank" rel="noopener noreferrer">
            Readery
          </a>
        )}
      </div>
    </div>
  );
};
