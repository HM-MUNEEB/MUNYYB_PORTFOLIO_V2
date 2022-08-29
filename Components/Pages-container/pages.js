import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./pages.module.css";

export default function Pages({ children }, props) {
  const PagesRef = useRef();
  const landingTransition = () => {
    var h = window.innerHeight;
    var w = window.innerWidth;
    //mount
    var tl = gsap.timeline({ repeat: 0 });

    tl.eventCallback("onComplete", () => {
      console.log("PAGE TRANSITION  COMPLETED!");
    });

    //Fading In transition
    tl.fromTo(
      PagesRef.current,
      {
        x: w,
      },
      {
        opacity: 1,
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "back.easeOut",
      }
    );
  };
  useEffect(() => {
    landingTransition();
  });
  return (
    <div className={styles.PagesContainer} ref={PagesRef}>
      {children}
    </div>
  );
}
