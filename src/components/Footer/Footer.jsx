import { Container } from "@/components";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru/" target="_blank">
          PREAX
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
