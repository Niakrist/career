import { VacancyBlock } from "@/components";
import styles from "./VacancyList.module.css";

const VacancyList = () => {
  return (
    <div className={styles.blockWrapper}>
      <VacancyBlock />
    </div>
  );
};

export default VacancyList;
