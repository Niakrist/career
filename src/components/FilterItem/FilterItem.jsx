import { IconSvg } from "@/components";
import styles from "./FilterItem.module.css";

const FilterItem = ({ filter }) => {
  switch (filter?.type) {
    case "input":
      return (
        <label htmlFor={filter.name} className={styles.filterItem}>
          <IconSvg id={filter.iconName} className={styles.icons} />
          <input
            placeholder={filter.title}
            className={styles.input}
            type="text"
            id={filter.name}
          />
        </label>
      );
    case "dropDown":
      return (
        <button className={styles.filterItem}>
          <IconSvg id={filter.iconName} className={styles.icons} />
          {filter.title}
          <IconSvg id="chevron-down-svg" className={styles.chevronDown} />
        </button>
      );
    default:
      break;
  }
};

export default FilterItem;
