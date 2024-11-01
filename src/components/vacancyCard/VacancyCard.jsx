import styles from "./card.module.css";
import Star from "../icons/Star";
import EyeOff from "../icons/EyeOff";

const VacancyCard = ({ title, cash, company, city, exp }) => {
  return (
    <li className={styles.card}>
      <div className={styles.info}>
        <div className={styles.cardHeader}>
          <h4 className={styles.title}>{title}</h4>
          <EyeOff cn={styles.svg} />
        </div>
        <p className={styles.cash}>{cash}</p>
      </div>
      <div className={styles.info}>
        <p>{company}</p>
        <p>{city}</p>
      </div>
      <div className={styles.expWrapper}>
        <Star className={styles.star} />
        <p>{exp}</p>
      </div>
    </li>
  );
};

export default VacancyCard;
