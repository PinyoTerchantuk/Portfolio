import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("boy.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UX/UI Designer</h3>
              <p>
                I specialize in creating intuitive, data-driven interfaces and scalable design systems in Figma. My approach blends engineering logic with user-centered design to transform complex requirements into seamless digital experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build high-performance, responsive web applications using React, Next.js, and Tailwind CSS. I focus on turning high-fidelity designs into clean, efficient code, ensuring a bridge between aesthetics and functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>System-Driven Thinker</h3>
              <p>
                Leveraging my background in Computer and Mechatronics Engineering, I ensure every design is technically feasible and optimized for performance. I excel at bridging the gap between complex system logic and intuitive user interactions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
