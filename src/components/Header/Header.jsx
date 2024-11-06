import styles from "./Header.module.css";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <div className={styles.headContainer}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <a href="#">
            <Icon name="logo" className={styles.logo} />
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
