import { useState } from "react";
import VacancyCard from "../vacancyCard/VacancyCard";
import styles from "./block.module.css";

const VacancyBlock = () => {
  const data = [
    {
      title: "Junior Frontend-разработчик",
      cash: "от 30 000 Р",
      company: "Интернет Люди",
      city: "Ярославль",
      exp: "Опыт от 1 года до 3 лет",
    },
    {
      title: "Middle Frontend React разработчик",
      cash: "120 000 - 180 000 Р",
      company: "Torgbox",
      city: "Красноярск",
      exp: "Опыт от 6 лет",
    },
    {
      title: "Frontend-разработчик",
      cash: "80 000 - 120 000 Р",
      company: "IT-парк Питерский мостик",
      city: "Красноярск",
      exp: "Опыт от 1 года до 3 лет",
    },
    {
      title: "Frontend-разработчик",
      cash: "180 000 - 280 000 Р",
      company: "Клируэй Текнолоджис",
      city: "Москва",
      exp: "Опыт от 3 года до 6 лет",
    },
    {
      title: "Frontend-разработчик",
      cash: "50 000 - 150 000 Р",
      company: "ООО Омегасофтвер Рус",
      city: "Ижевск",
      exp: "Без опыта",
    },
    {
      title: "Frontend-разработчик",
      cash: "от 80 000 Р",
      company: "ООО Эмфи",
      city: "Москва",
      exp: "Опыт от 1 года до 3 лет",
    },
    {
      title: "Junior Frontend-разработчик",
      cash: "от 30 000 Р",
      company: "Интернет Люди",
      city: "Ярославль",
      exp: "Опыт от 1 года до 3 лет",
    },
    {
      title: "Middle Frontend React разработчик",
      cash: "120 000 - 180 000 Р",
      company: "Torgbox",
      city: "Красноярск",
      exp: "Опыт от 6 лет",
    },
    {
      title: "Frontend-разработчик",
      cash: "80 000 - 120 000 Р",
      company: "IT-парк Питерский мостик",
      city: "Красноярск",
      exp: "Опыт от 1 года до 3 лет",
    },
    {
      title: "Frontend-разработчик",
      cash: "180 000 - 280 000 Р",
      company: "Клируэй Текнолоджис",
      city: "Москва",
      exp: "Опыт от 3 года до 6 лет",
    },
    {
      title: "Frontend-разработчик",
      cash: "50 000 - 150 000 Р",
      company: "ООО Омегасофтвер Рус",
      city: "Ижевск",
      exp: "Без опыта",
    },
    {
      title: "Frontend-разработчик",
      cash: "от 80 000 Р",
      company: "ООО Эмфи",
      city: "Москва",
      exp: "Опыт от 1 года до 3 лет",
    },
  ];

  return (
    <>
      <h2 className={styles.title}>Сегодня, 5 февраля</h2>
      <ul className={styles.listWrapper}>
        {data.map(({ title, cash, company, city, exp }, index) => (
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
