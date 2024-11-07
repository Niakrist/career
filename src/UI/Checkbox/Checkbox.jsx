import { Icon } from "@/components";
import { ICON_NAME, TYPE_NAME } from "@/constants";
import styles from "./Checkbox.module.css";

const Checkbox = ({ data, type, onHandle }) => {
  return (
    <label className={styles.checkboxLabel} htmlFor={data.name}>
      <Icon
        name={ICON_NAME.CHECK}
        className={data.isChecked ? styles.checkboxActive : styles.checkbox}
      />

      <input
        className={styles.inputCheckbox}
        id={data.name}
        name={data.name}
        type="checkbox"
        checked={data.isChecked}
        onChange={() => onHandle(data.name, type, TYPE_NAME.CHECKBOX)}
      />
      {data.label}
    </label>
  );
};

export default Checkbox;
