import styles from "./LogoContainer.module.css";
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LogoContainer() {
  // useEffect(() => {
  //   var h = window.innerHeight / 2 - 10;
  //   var w = window.innerWidth / 2 - 100;
  //   //Fading In transition
  //   gsap.fromTo(
  //     LogoContainerRef.current,
  //     {
  //       opacity: 0,
  //       y: h - 25,
  //     },
  //     {
  //       opacity: 1,
  //       y: h,
  //       duration: 0.5,
  //     }
  //   );
  //   //Placing logo to original position
  //   gsap.fromTo(
  //     LogoContainerRef.current,
  //     {
  //       opacity: 1,
  //       y: h,
  //       x: w,
  //     },
  //     {
  //       y: 0,
  //       x: 0,
  //       delay: 2,
  //       duration: 0.5,
  //       ease: "back.easeOut",
  //     }
  //   );
  // }, []);
  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        <Image src={LogoImg} width={40} height={40} />
        <h1>MUNYYB.</h1>
      </div>
    </header>
  );
}
