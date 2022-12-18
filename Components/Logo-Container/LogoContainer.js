import styles from "./LogoContainer.module.css";
import { motion } from "framer-motion";

export default function LogoContainer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className={styles.Header}>
        <div className={styles.LogoContainer}>
          <p>MUNYYB.</p>
        </div>
      </header>
    </motion.div>
  );
}
