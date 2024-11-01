import React, { useState } from "react";
import CheckboxIcon from "../../components/icons/CheckboxIcon";
import styles from "./Checkbox.module.css";

const Checkbox = ({ data, type, onHandle }) => {
  return (
    <label className={styles.itemLabel} htmlFor={data.name}>
      <CheckboxIcon
        className={data.isChecked ? styles.checkboxActive : styles.checkbox}
      />
      <input
        className={styles.inputCheckbox}
        id={data.name}
        name={data.name}
        type="checkbox"
        checked={data.isChecked}
        onChange={() => onHandle(data.name, type)}
      />
      {data.label}
    </label>
  );
};

export default Checkbox;
