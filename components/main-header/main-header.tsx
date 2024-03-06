import Link from "next/link";
import Image from "next/image";

import imgLogo from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={imgLogo} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
