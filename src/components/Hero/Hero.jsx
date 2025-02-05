import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pinyo</h1>
        <p className={styles.description}>
          Welcome to my portfolio! I’m a Year 3 of Computer Engineering student
          specializing in designing and building engaging front-end experiences.
          Passionate about merging creativity and technology to create
          impactful solutions. Let’s connect and create something awesome!
        </p>
        <a href="mailto:pinyoum11@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/pinyo.jpg")}
        alt="Profile picture of Pinyo"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
