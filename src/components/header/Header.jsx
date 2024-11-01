import styles from './header.module.css';
import Logo from '../icons/Logo';

const Header = () => {
  return (
    <div className={styles.headContainer}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <a href='#'><Logo /></a>
          <nav className={styles.menu}>
            <button className={styles.btnActive}>Поиск вакансий</button>
            <button className={styles.btn}>Избранные вакансии</button>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;