import { useState } from "react";
import { DropDown } from "@/UI";
import { Icon } from "@/components";
import { clsx } from "@/utils";
import { ICON_NAME, TYPE_NAME } from "@/constants";
import styles from "./FilterItem.module.css";

const FilterItem = ({ filter, city, onCity, onHandle }) => {
  switch (filter?.name) {
    case TYPE_NAME.INPUT:
      return (
        <label
          htmlFor={filter.name}
          className={clsx(
            styles.filterItem,
            !!city.length && styles.filterItemActive
          )}>
          <Icon name={ICON_NAME.LOCATION} className={styles.icons} />
          <input
            value={city}
            onChange={(e) => onCity(e.target.value)}
            placeholder={filter.title}
            className={styles.input}
            type="text"
            id={filter.name}
          />
          {!!city.length && (
            <button className={styles.clean} onClick={() => onCity("")}>
              <Icon name={ICON_NAME.CLEAN} className={styles.cleanIcon} />
            </button>
          )}
        </label>
      );
    case TYPE_NAME.DROP_DOWN:
      return (
        <div className={styles.filter}>
          <DropDown filter={filter} onHandle={onHandle} />
        </div>
      );
    default:
      break;
  }
};

export default FilterItem;
