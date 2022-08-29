import Link from "next/link";
import { useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation(props) {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Navigation_Container}>
        <ul className={styles.NavItems_container}>
          <li
            className={styles.NavItem}
            onClick={() => props.setPageRoute("work")}
          >
            <Link href="./work" className={styles.Main_Nav}>
              <p className={styles.Nav_Heading_1}>Work</p>
            </Link>
          </li>
          <li className={styles.NavItem}>
            <a className={styles.Main_Nav}>
              <p className={styles.Nav_Heading_1}>About</p>
            </a>
          </li>
          <li className={styles.NavItem}>
            <a className={styles.Main_Nav}>
              <p className={styles.Nav_Heading_1}>Contact Me</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
