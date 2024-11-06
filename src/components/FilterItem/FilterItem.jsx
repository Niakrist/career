import styles from "./FilterItem.module.css";
import { useState } from "react";
import DropDown from "../../UI/DropDown/DropDown";
import Icon from "../Icon/Icon";

const FilterItem = ({ filter, onHandle }) => {
  const [city, setCity] = useState("");

  switch (filter?.name) {
    case "input":
      return (
        <label
          htmlFor={filter.name}
          className={`${styles.filterItem} ${
            !!city.length && styles.filterItemActive
          }`}>
          <Icon name="location" className={styles.icons} />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={filter.title}
            className={styles.input}
            type="text"
            id={filter.name}
          />
          {!!city.length && (
            <button className={styles.clean} onClick={() => setCity("")}>
              <Icon name="clean" className={styles.cleanIcon} />
            </button>
          )}
        </label>
      );
    case "dropDown":
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
