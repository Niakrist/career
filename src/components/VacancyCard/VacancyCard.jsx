import styles from "./VacancyCard.module.css";
import Icon from "../Icon/Icon";

const VacancyCard = ({ title, cash, company, city, exp }) => {
  return (
    <li className={styles.card}>
      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <h4 className={styles.title}>{title}</h4>
          <Icon name="hidden" className={styles.svg} />
        </div>
        <p className={styles.cash}>{cash}</p>
      </div>
      <div className={styles.info}>
        <p>{company}</p>
        <p>{city}</p>
      </div>
      <div className={styles.expWrapper}>
        <Icon name="experience" className={styles.experience} />
        <p>{exp}</p>
      </div>
    </li>
  );
};

export default VacancyCard;
