import { useState } from "react";
import { filterListData } from "@/mockData";
import { FilterItem } from "@/components";
import { TYPE_NAME } from "@/constants";
import {
  changeRadio,
  checkedCheckbox,
  resetCheckbox,
  getValueCity,
} from "@/utils";
import { useClearButton } from "@/hooks";
import styles from "./FilterList.module.css";

const FilterList = () => {
  const [filters, setFilter] = useState(filterListData);
  const isClearButton = useClearButton(filters);

  const handleFilter = (name, type, tag) => {
    if (tag === TYPE_NAME.RADIO) {
      changeRadio(setFilter, name, type);
    }
    if (name === TYPE_NAME.NO_MATTER) {
      resetCheckbox(setFilter, type);
    }
    if (tag === TYPE_NAME.CHECKBOX) {
      checkedCheckbox(setFilter, name, type);
    }
  };

  const handleCity = (value) => {
    setFilter((prevState) => {
      return prevState.map((item) => {
        if (item.type === TYPE_NAME.LOCATION) {
          return { ...item, city: value };
        } else {
          return item;
        }
      });
    });
  };

  const city = getValueCity(filters);

  return (
    <nav className={styles.nav}>
      {filters.map((filter) => (
        <FilterItem
          key={filter.type}
          filter={filter}
          onCity={handleCity}
          city={city}
          onHandle={handleFilter}
        />
      ))}
      {isClearButton && (
        <button
          className={styles.resetFilter}
          onClick={() => setFilter(filterListData)}>
          Сбросить все фильтры
        </button>
      )}
    </nav>
  );
};

export default FilterList;
