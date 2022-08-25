import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <li>
          <Link
            href="https://github.com/HM-MUNEEB"
            className={styles.listItems}
          >
            <p>linkedin</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/munyyb/"
            className={styles.listItems}
          >
            <p>Github</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
