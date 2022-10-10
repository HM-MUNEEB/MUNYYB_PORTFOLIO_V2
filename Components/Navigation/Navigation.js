import Link from "next/link";
import { useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Navigation_Container}>
        <ul className={styles.NavItems_container}>
          <li className={styles.NavItem2}>
            <p className={styles.Nav_Heading_2}>Under Dev!</p>
          </li>
          {/* <Link href="./work" className={styles.Main_Nav}>
            <li
              className={styles.NavItem}
              onClick={() => props.setPageRoute("work")}
            >
              <p className={styles.Nav_Heading_1}>Work</p>
            </li>
          </Link> */}
          {/* <Link href="./about" className={styles.Main_Nav}>
            <li className={styles.NavItem}>
              <p className={styles.Nav_Heading_1}>About</p>
            </li>
          </Link>
          <Link href="./contact-me" className={styles.Main_Nav}>
            <li className={styles.NavItem}>
              <p className={styles.Nav_Heading_1}>Contact Me</p>
            </li>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
}
