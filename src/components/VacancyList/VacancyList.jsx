import React from "react";
import VacancyBlock from "../VacancyBlock/VacancyBlock";
import styles from "./VacancyList.module.css";
const VacancyList = ({ vacancyListData }) => {
  return (
    <section className={styles.vacancyList}>
      <div className={styles.container}>
        {vacancyListData.map((vacancyBlockData) => (
          <VacancyBlock
            key={vacancyBlockData.date}
            vacancyBlockData={vacancyBlockData}
          />
        ))}
      </div>
    </section>
  );
};

export default VacancyList;
