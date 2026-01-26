"use client";

import React, { useContext } from "react";
import styles from "./DarkModeToogel.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToogel = () => {
  const { toggel, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggel}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToogel;
