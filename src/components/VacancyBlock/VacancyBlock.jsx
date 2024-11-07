import { VacancyCard } from "@/components";
import { vacancyBlockData } from "@/mockData";
import styles from "./VacancyBlock.module.css";
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
