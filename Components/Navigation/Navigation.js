import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.Navigation}>
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
  );
}
