import { Container, IconSvg } from "@/components";
import { clsx } from "@/utils";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
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
      </Container>
    </header>
  );
};

export default Header;
