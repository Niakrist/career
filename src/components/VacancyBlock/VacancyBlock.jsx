import VacancyCard from "../VacancyCard/VacancyCard";
import styles from "./VacancyBlock.module.css";
import { vacancyBlockData } from "../../mockData/vacancyBlockData";
const VacancyBlock = () => {
  return (
    <>
      <h2 className={styles.title}>Сегодня, 5 февраля</h2>
      <ul className={styles.listWrapper}>
        {vacancyBlockData.map(({ title, cash, company, city, exp }, index) => (
          <VacancyCard
            key={index}
            title={title}
            cash={cash}
            company={company}
            city={city}
            exp={exp}
          />
        ))}
      </ul>
    </>
  );
};

export default VacancyBlock;
