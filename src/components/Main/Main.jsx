import React from "react";
import Filterlist from "../Filterlist/Filterlist";
import VacancyList from "../VacancyList/VacancyList";
import styles from "./Main.module.css";

const Main = () => {
  const vacancyListData = [
    {
      date: "Сегодня, 2 января",
      listOfVacancies: [
        {
          id: 1,
          name: "Junior Frontend-разработчик",
          salary: { min: 30000, max: "" },
          company: "Интернет Люди",
          city: "Ярославль",
          experience: { min: 1, max: 3 },
        },
        {
          id: 2,
          name: "Middle Frontend React разработчик",
          salary: { min: 120000, max: 180000 },
          company: "Torgbox",
          city: "Красноярск",
          experience: { min: 6, max: 0 },
        },
        {
          id: 3,
          name: "Frontend-разработчик на JavaScript",
          salary: { min: 80000, max: 120000 },
          company: "IT-парк Питерский мостик",
          city: "Красноярск",
          experience: { min: 1, max: 3 },
        },
        {
          id: 4,
          name: "Frontend-разработчик (Angular)",
          salary: { min: 180000, max: 280000 },
          company: "Клируэй Текнолоджис",
          city: "Москва",
          experience: { min: 3, max: 6 },
        },
        {
          id: 5,
          name: "Frontend-разработчик",
          salary: { min: 50000, max: 150000 },
          company: "ООО Омегасофтвер Рус",
          city: "Ижевск",
          experience: { min: 0, max: 0 },
        },
        {
          id: 6,
          name: "Frontend-разработчик",
          salary: { min: 80000, max: 0 },
          company: "ООО Эмфи",
          city: "Москва",
          experience: { min: 1, max: 3 },
        },
        {
          id: 7,
          name: "Junior Frontend-разработчик",
          salary: { min: "", max: "" },
          company: "Justice IT",
          city: "Таганрог",
          experience: { min: 0, max: 0 },
        },
        {
          id: 8,
          name: "Frontend-разработчик",
          salary: { min: 60000, max: 120000 },
          company: "ООО Кэрот Бродкаст",
          city: "Москва",
          experience: { min: 1, max: 3 },
        },
        {
          id: 9,
          name: "Junior Frontend Разработчик",
          salary: { min: "", max: 60000 },
          company: "Digital Partners Global",
          city: "Челябинск",
          experience: { min: 0, max: 0 },
        },
        {
          id: 10,
          name: "Frontend-разработчик",
          salary: { min: 50000, max: "" },
          company: "Адванс-Медиа",
          city: "Москва",
          experience: { min: 1, max: 3 },
        },
        {
          id: 11,
          name: "Frontend-разработчик (программист / верстальщик)",
          salary: { min: 60000, max: 90000 },
          company: "ООО Media Army",
          city: "Екатеринбург",
          experience: { min: 1, max: 3 },
        },
        {
          id: 12,
          name: "Frontend developer",
          salary: { min: "", max: "" },
          company: "АО Группа компаний Орион",
          city: "Москва",
          experience: { min: 1, max: 3 },
        },
        {
          id: 13,
          name: "Frontend-разработчик",
          salary: { min: 80000, max: "" },
          company: "S-WEBS",
          city: "Санкт-Петербург",
          experience: { min: 1, max: 3 },
        },
        {
          id: 14,
          name: "Frontend-разработчик",
          salary: { min: 60000, max: "" },
          company: "Zabeel",
          city: "Самара",
          experience: { min: 1, max: 3 },
        },
        {
          id: 15,
          name: "Java Script (Frontend / Backend)",
          salary: { min: 100000, max: 180000 },
          company: "ЕТС груп",
          city: "Москва",
          experience: { min: 0, max: 0 },
        },
        {
          id: 16,
          name: "Начинающий Frontend-разработчик",
          salary: { min: 40000, max: "" },
          company: "ЗАЗЕКС",
          city: "Ростов-на-Дону",
          experience: { min: 0, max: 0 },
        },
        {
          id: 17,
          name: "Младший Frontend-разработчик",
          salary: { min: "", max: "" },
          company: "ООО Интабия",
          city: "Новосибирск",
          experience: { min: 1, max: 3 },
        },
        {
          id: 18,
          name: "Веб-технолог/Frontend-разработчик",
          salary: { min: 130000, max: "" },
          company: "ООО «ОФИСМАГ»",
          city: "Новосибирск",
          experience: { min: 1, max: 3 },
        },
      ],
    },
  ];

  return (
    <main>
      <Filterlist />
      <VacancyList vacancyListData={vacancyListData} />
    </main>
  );
};

export default Main;
