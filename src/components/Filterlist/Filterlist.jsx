import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import styles from "./Filterlist.module.css";

const Filterlist = () => {
  const filterlistData = [
    {
      type: "input",
      name: "location",
      title: "Город",
      iconName: "location-svg",
    },
    {
      type: "dropDown",
      name: "briefcase",
      title: "Тип занятости",
      iconName: "briefcase-svg",
      "chevron-down": false,
    },
    {
      type: "dropDown",
      name: "filter",
      title: "Дополнительные фильтры",
      iconName: "filter-solid-svg",
      "chevron-down": false,
    },
  ];

  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <ul className={styles.filterlist}>
          {filterlistData.map((filter) => (
            <li key={filter.name}>
              <FilterItem filter={filter} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Filterlist;
