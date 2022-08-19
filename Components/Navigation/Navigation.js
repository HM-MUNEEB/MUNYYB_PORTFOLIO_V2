import { useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Navigation_Container}>
        <ul className={styles.NavItems_container}>
          <li className={styles.NavItem}>
            <a className={styles.Main_Nav}>
              <h1 className={styles.Nav_Heading_1}>Work</h1>
            </a>
          </li>
          <li className={styles.NavItem}>
            <a className={styles.Main_Nav}>
              <h1 className={styles.Nav_Heading_1}>About</h1>
            </a>
          </li>
          <li className={styles.NavItem}>
            <a className={styles.Main_Nav}>
              <h1 className={styles.Nav_Heading_1}>Contact Me</h1>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
