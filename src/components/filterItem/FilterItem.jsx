import styles from "./item.module.css";
import Geo from "../icons/Geo";
import Close from "../icons/Close";
import { useState } from "react";
import DropDown from "../../UI/DropDown/DropDown";

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
          <Geo className={styles.icons} />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={filter.title}
            className={styles.input}
            type="text"
            id={filter.name}
          />
          {!!city.length && <Close className={styles.close} />}
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