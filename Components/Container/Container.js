import Logo from "../LogoComp/Logo";
import styles from "./Container.module.css";
import Image from "next/image";
import LogoImg from "../../public/logo.png"

export default function Container() {
  return (
    <div className={styles.MunyybContainer}>
      {/* <Image src ={LogoImg} width = {40} height ={40}/> */}
      <div className={styles.typicalTextAnimation}>
      <Logo />
      </div>
    </div>
  );
}
