import FilterItem from "../filterItem/FilterItem";
import styles from "./filter.module.css";

import { filterListData } from "../mockData/filterListData";
import { useState } from "react";

const FilterList = () => {
  const [filters, setFilter] = useState(filterListData);

  const handleFilter = (name, type) => {
    console.log("type: ", type);
    console.log("name: ", name);
    setFilter((prevData) => {
      return prevData.map((item) => {
        if (item.name === type) {
          return {
            ...item,
            options: item.options.map((elem) => {
              if (elem.name === name) {
                return { ...elem, isChecked: !elem.isChecked };
              } else {
                return elem;
              }
            }),
          };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <nav className={styles.nav}>
      {filters.map((filter) => (
        <FilterItem key={filter.name} filter={filter} onHandle={handleFilter} />
      ))}
    </nav>
  );
};

export default FilterList;
