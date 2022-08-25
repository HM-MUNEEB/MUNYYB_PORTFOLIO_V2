import styles from "./footer.module.css";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <li>
          <a>
            <AiOutlineLinkedin />
            linkedin
          </a>
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
