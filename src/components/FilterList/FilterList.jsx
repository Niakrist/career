import styles from "./FilterList.module.css";
import { filterListData } from "./../../mockData/filterListData";
import { useState } from "react";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = () => {
  const [filters, setFilter] = useState(filterListData);

  const handleFilter = (name, type, tag) => {
    if (tag === "radio") {
      setFilter((prevData) => {
        return prevData.map((item) => {
          if (item.groups) {
            return {
              ...item,
              groups: item.groups.map((elem) => {
                if (elem.type === type) {
                  return {
                    ...elem,
                    radioValue: name,
                  };
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

      if (name === "no-matter") {
        setFilter((prevData) => {
          return prevData.map((item) => {
            if (item.groups) {
              return {
                ...item,
                groups: item.groups.map((elem) => {
                  if (elem.type === type) {
                    return {
                      ...elem,
                      options: elem.options.map((el) => {
                        if (el.name === "isSalary") {
                          console.log(el);
                          return { ...el, isChecked: false };
                        } else {
                          return el;
                        }
                      }),
                    };
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
      }
    }
    if (tag === "checkbox") {
      setFilter((prevData) => {
        return prevData.map((item) => {
          if (item.type === type) {
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
          } else if (item.groups) {
            return {
              ...item,
              groups: item.groups.map((group) => {
                return group.type === type
                  ? {
                      ...group,
                      options: group.options.map((elem) => {
                        if (elem.name === name) {
                          return { ...elem, isChecked: !elem.isChecked };
                        } else {
                          return elem;
                        }
                      }),
                    }
                  : group;
              }),
            };
          } else {
            return item;
          }
        });
      });
    }
  };

  return (
    <nav className={styles.nav}>
      {filters.map((filter) => (
        <FilterItem key={filter.type} filter={filter} onHandle={handleFilter} />
      ))}
      <button className={styles.resetFilter}>Сбросить все фильтры</button>
    </nav>
  );
};

export default FilterList;
