import styles from "./item.module.css";
import Arrow from "../icons/Arrow";
import Briefcase from "../icons/Briefcase";
import Geo from "../icons/Geo";
import Filter from "../icons/Filter";
import Close from "../icons/Close";
import { useState } from "react";
import Checkbox from "../../ui/checkbox/Checkbox";
import DropDown from "../../UI/DropDown/DropDown";

const FilterItem = ({ filter, onHandle }) => {
  const [city, setCity] = useState("");

  switch (filter?.type) {
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
