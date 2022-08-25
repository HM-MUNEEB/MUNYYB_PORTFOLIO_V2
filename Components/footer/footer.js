import styles from "./footer.module.css";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <li>
          <a className={styles.listItems}>
            <AiOutlineLinkedin />
            <p>linkedin</p>
          </a>
        </li>
        <li>
          <a className={styles.listItems}>
            <AiOutlineGithub />
            <p>Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
