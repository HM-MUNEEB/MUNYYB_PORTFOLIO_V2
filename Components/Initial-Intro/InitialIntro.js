import styles from "./InitialIntro.module.css";
import Typical from "react-typical";
import { useState, useEffect, useRef } from "react";

export default function InitialIntro() {
  return (
    <div className={styles.InitialIntroContainer}>
      <h1>
        <Typical
          steps={[
            "",
            3000,
            "HELLO",
            3000,
            "My name is MUNYYB!",
            3000,
            "I am a full-stack developer & ...",
            3000,
            "I am a Creator...",
          ]}
          loop={1}
          wrapper="p"
        />
      </h1>
    </div>
  );
}
