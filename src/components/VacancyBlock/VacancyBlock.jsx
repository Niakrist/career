import React from "react";
import VacancyCard from "../VacancyCard/VacancyCard";
import styles from "./VacancyBlock.module.css";

const VacancyBlock = ({ vacancyBlockData }) => {
  return (
    <>
      <h2 className={styles.title}>{vacancyBlockData.date}</h2>
      <ul className={styles.vacancyBlockList}>
        {vacancyBlockData.listOfVacancies.map((vacancyCardData) => (
          <li key={vacancyCardData.id} className={styles.vacancyBlockCard}>
            <a href="/">
              <VacancyCard vacancyCardData={vacancyCardData} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VacancyBlock;
