import styles from "./LogoContainer.module.css";
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LogoContainer() {
  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        {/* <div className={styles.LogoImgContainer}>
          <Image src={LogoImg} className={styles.LogoImg} height={40} />
        </div> */}
        <h1>MUNYYB.</h1>
      </div>
    </header>
  );
}
