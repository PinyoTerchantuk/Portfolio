import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pinyo Terchantuk</h1>
        <p className={styles.description}>
          Welcome to my portfolio! I'm a 4th-year Computer Engineering student at KMITL specializing in crafting high-impact Web UX/UI and Frontend experiences. I thrive at the intersection of technical complexity and intuitive design, bridging the gap between engineering logic and user-centric aesthetics.
        </p>
        {/* <a href="mailto:pinyoum11@email.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("pinyo.jpg")}
        alt="Profile picture of Pinyo"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
