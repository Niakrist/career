import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Проект выполнен в рамках стажировки{" "}
        <a
          href="https://preax.ru"
          className={styles.link}
          target="_blank"
          rel="noreferrer">
          PREAX
        </a>
      </p>
    </footer>
  );
};

export default Footer;
