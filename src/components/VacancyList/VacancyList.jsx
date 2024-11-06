import VacancyBlock from "../VacancyBlock/VacancyBlock";
import styles from "./VacancyList.module.css";

const VacancyList = () => {
  return (
    <div className={styles.blockWrapper}>
      <VacancyBlock />
    </div>
  );
};

export default VacancyList;
