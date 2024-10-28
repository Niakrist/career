import { Container, VacancyBlock } from "@/components";
import { vacancyListData } from "@/mookData";
import styles from "./VacancyList.module.css";

const VacancyList = () => {
  return (
    <section className={styles.vacancyList}>
      <Container>
        {vacancyListData.map((vacancyBlockData) => (
          <VacancyBlock
            key={vacancyBlockData.date}
            vacancyBlockData={vacancyBlockData}
          />
        ))}
      </Container>
    </section>
  );
};

export default VacancyList;
