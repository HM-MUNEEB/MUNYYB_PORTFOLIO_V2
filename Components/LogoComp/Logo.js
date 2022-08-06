import styles from "./Logo.module.css";
import Typical from 'react-typical'
export default function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <h1>
      <Typical
        steps={['HELLO', 3000, "My name is MUNYYB!", 3000, "I am a full-stack developer!", 3000, "I am am Creator..."]}
        loop={1}
        wrapper="p"
      />
      </h1>
    </div>
  );
}
