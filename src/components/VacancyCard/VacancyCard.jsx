import React from "react";
import { showSalary, showExperience } from "../../utils";
import IconSvg from "../IconSvg/IconSvg";
import styles from "./VacancyCard.module.css";
const VacancyCard = ({ vacancyCardData }) => {
  const salary = showSalary(vacancyCardData.salary);
  const experience = showExperience(vacancyCardData.experience);

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{vacancyCardData.name}</h3>
      <div className={styles.salary}>{salary}</div>
      <p className={styles.company}>{vacancyCardData.company}</p>
      <p className={styles.city}>{vacancyCardData.city}</p>
      <div className={styles.experience}>
        <IconSvg id="experience-svg" className={styles.iconExperience} />
        <p>{experience}</p>
      </div>
    </article>
  );
};

export default VacancyCard;
