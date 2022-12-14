import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <li>
          <a
            href="https://www.linkedin.com/in/munyyb/"
            target="_blank"
            className={styles.listItems}
          >
            <p>linkedin</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/HM-MUNEEB"
            target="_blank"
            className={styles.listItems}
          >
            <p>Github</p>
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/munyyb"
            target="_blank"
            className={styles.listItems}
          >
            <p>Dribbble</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
