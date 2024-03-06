import Link from "next/link";
import Image from "next/image";

import NavLink from "./nav-link";
import imgLogo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={imgLogo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
