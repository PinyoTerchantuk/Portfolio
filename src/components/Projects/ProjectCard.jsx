import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, figma, keepSilk, wokFood, fanruan },
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const isVideoFile = (url) => {
    return url && url.endsWith('.mp4');
  };

  const getVideoUrl = (url) => {
    if (url && isVideoFile(url)) {
      return new URL(`/assets/${url}`, import.meta.url).href;
    }
    return url;
  };

  const handleVideoClick = (url) => {
    if (isVideoFile(url)) {
      setVideoUrl(getVideoUrl(url));
      setShowVideo(true);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

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
          <button
            className={styles.link}
            onClick={() => handleVideoClick(demo)}
          >
            Demo
          </button>
        )}
        {source && (
          <button
            className={styles.link}
            onClick={() => handleVideoClick(source)}
          >
            Source
          </button>
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
        {fanruan && (
          <button
            className={styles.link}
            onClick={() => handleVideoClick(fanruan)}
          >
            Fanruan Project
          </button>
        )}
      </div>

      {showVideo && (
        <div className={styles.videoModal} onClick={() => setShowVideo(false)}>
          <div className={styles.videoContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowVideo(false)}>
              ×
            </button>
            <video controls autoPlay className={styles.video}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};
