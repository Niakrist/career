import { Icon } from "@/components";
import { ICON_NAME } from "@/constants";
import styles from "./VacancyCard.module.css";

const VacancyCard = ({ title, cash, company, city, exp }) => {
  return (
    <li className={styles.card}>
      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <h4 className={styles.title}>{title}</h4>
          <Icon name={ICON_NAME.HIDDEN_VACANCY} className={styles.svg} />
        </div>
        <p className={styles.cash}>{cash}</p>
      </div>
      <div className={styles.info}>
        <p>{company}</p>
        <p>{city}</p>
      </div>
      <div className={styles.expWrapper}>
        <Icon name={ICON_NAME.EXPERIENCE} className={styles.experience} />
        <p>{exp}</p>
      </div>
    </li>
  );
};

export default VacancyCard;
