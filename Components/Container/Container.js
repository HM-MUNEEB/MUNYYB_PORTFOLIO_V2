import styles from "./Container.module.css";
import { useState, useEffect, useRef } from "react";
import InitialIntro from "../Initial-Intro/InitialIntro";
import LogoContainer from "../Logo-Container/LogoContainer";

export default function Container() {
  const [isInitialIntro, setIsInitialIntro] = useState(true);

  setInterval(() => {
    setIsInitialIntro(false);
  }, 25000);
  return (
    <div className={styles.MunyybContainer}>
      <div className={styles.IntroAndLogoContainer}>
        {isInitialIntro ? (
          <div className={styles.typicalTextAnimation}>
            <InitialIntro />
          </div>
        ) : (
          <LogoContainer />
        )}
      </div>
    </div>
  );
}
