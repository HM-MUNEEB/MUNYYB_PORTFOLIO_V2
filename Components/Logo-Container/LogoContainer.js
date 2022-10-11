import styles from "./LogoContainer.module.css";
import Image from "next/image";
import LogoImg from "../../public/logo.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LogoContainer() {
  return (
    <header className={styles.Header}>
      <div className={styles.LogoContainer}>
        <p>MUNYYB.</p>
      </div>
    </header>
  );
}
