import React from "react";
import styles from "../styles/Loader.module.css"

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.box1}></div>
      <div className={styles.box2}></div>
      <div className={styles.box3}></div>
    </div>
  );
}
