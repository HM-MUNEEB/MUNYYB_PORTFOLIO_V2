import styles from "./Container.module.css";
import { useState, useEffect, useRef } from "react";
import InitialIntro from "../Initial-Intro/InitialIntro";
import Navigation from "../Navigation/Navigation";
import LogoContainer from "../Logo-Container/LogoContainer";
import { gsap } from "gsap";

export default function Container() {
  const [isInitialIntro, setIsInitialIntro] = useState(true);
  const [isNavigation, setIsNavigation] = useState(false);
  const InitialIntroRed = useRef();
  const LogoContainerRef = useRef();
  const NavigationRef = useRef();

  function afterAnim() {
    setIsNavigation(true);
  }

  setInterval(() => {
    setIsInitialIntro(false);
  }, 2000);

  useEffect(() => {
    var h = window.innerHeight / 2 - 10;
    var w = window.innerWidth / 2 - 100;

    //Timeline Setup
    var tl = gsap.timeline({
      repeat: 0,
      // onComplete: () => {
      //   setIsNavigation(true);
      //   console.log("COMPLETED!");
      // },
    });

    tl.eventCallback("onComplete", () => {
      setIsNavigation(true);
      console.log("COMPLETED!");
    });

    //Fading In transition
    tl.fromTo(
      LogoContainerRef.current,
      {
        opacity: 0,
        y: h - 25,
      },
      {
        opacity: 1,
        y: h,
        duration: 0.5,
      }
    );
    //Placing logo to original position
    tl.fromTo(
      LogoContainerRef.current,
      {
        opacity: 1,
        y: h,
        x: w,
      },
      {
        y: 0,
        x: 0,
        duration: 0.5,
        ease: "back.easeOut",
      }
    );
    //Navigation Status
    tl.fromTo(
      NavigationRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: "back.easeOut",
      }
    );
  }, [isInitialIntro]);
  return (
    <div className={styles.MunyybContainer}>
      {isInitialIntro ? (
        <div className={styles.typicalTextAnimation} ref={InitialIntroRed}>
          <InitialIntro />
        </div>
      ) : (
        <>
          <div ref={LogoContainerRef}>
            <LogoContainer />
          </div>
          {isNavigation ? (
            <div ref={NavigationRef}>
              <Navigation />
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
