import styles from "./LogoContainer.module.css";
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LogoContainer() {
  const LogoContainerRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      LogoContainerRef.current,
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
  }, []);
  return (
    <div className={styles.LogoContainer} ref={LogoContainerRef}>
      <Image src={LogoImg} width={40} height={40} />
      <h1>MUNYYB.</h1>
    </div>
  );
}
