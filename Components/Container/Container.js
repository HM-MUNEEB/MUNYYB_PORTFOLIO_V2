import styles from "./Container.module.css";
import { useState, useEffect, useRef } from "react";
import InitialIntro from "../Initial-Intro/InitialIntro";
import LogoContainer from "../Logo-Container/LogoContainer";
import { gsap } from "gsap";

export default function Container() {
  const [isInitialIntro, setIsInitialIntro] = useState(true);
  const InitialIntroRed = useRef();

  setInterval(() => {
    setIsInitialIntro(false);
    gsap.fromTo(
      InitialIntroRed.current,
      {
        opacity: 0,
        y: -25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, 5000);

  useEffect(() => {}, []);
  return (
    <div className={styles.MunyybContainer}>
      {isInitialIntro ? (
        <div className={styles.typicalTextAnimation} ref={InitialIntroRed}>
          <InitialIntro />
        </div>
      ) : (
        <LogoContainer />
      )}
    </div>
  );
}
