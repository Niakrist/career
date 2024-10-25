import React from "react";
import IconSvg from "../IconSvg/IconSvg";

import { clsx } from "../../utils";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logoLink}>
          <IconSvg id="logo-svg" className={styles.logoIcon} />
        </a>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a className={clsx(styles.navLink, styles.active)} href="/">
                Поиск вакансий
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="/">
                Избранные вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
