import { Icon } from "@/components";
import { ICON_NAME } from "@/constants";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headContainer}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <a href="#">
            <Icon name={ICON_NAME.LOGO} className={styles.logo} />
          </a>
          <nav className={styles.menu}>
            <button className={styles.btnActive}>Поиск вакансий</button>
            <button className={styles.btn}>Избранные вакансии</button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
