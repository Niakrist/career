import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru/" target="_blank">
          PREAX
        </a>
      </div>
    </footer>
  );
};

export default Footer;
