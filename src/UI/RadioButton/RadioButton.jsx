import { Icon } from "@/components";
import { ICON_NAME, TYPE_NAME } from "@/constants";
import styles from "./RadioButton.module.css";

const RadioButton = ({ data, value, type, onHandle }) => {
  return (
    <label className={styles.radioLabel} htmlFor={data.name}>
      <Icon
        name={ICON_NAME.RADIO}
        className={data.name === value ? styles.radioActive : styles.radio}
      />
      <input
        className={styles.inputRadio}
        id={data.name}
        value={data.name}
        name={data.type}
        type="radio"
        checked={data.name === value}
        onChange={(e) => onHandle(e.target.value, type, TYPE_NAME.RADIO)}
      />
      {data.label}
    </label>
  );
};

export default RadioButton;
