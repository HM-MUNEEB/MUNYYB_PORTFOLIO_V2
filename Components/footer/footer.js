import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul>
        <li>
          <a>linkedin</a>
        </li>
        <li>
          <a>Github</a>
        </li>
        <li>
          <a>Facebook</a>
        </li>
      </ul>
    </div>
  );
}
