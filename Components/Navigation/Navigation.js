import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.Navigation}>
      <ul className={styles.NavItems}>
        <li>
          <h1>Work</h1>
        </li>
        <li>
          <h1>About</h1>
        </li>
        <li>
          <h1>Contact Me</h1>
        </li>
      </ul>
    </div>
  );
}
