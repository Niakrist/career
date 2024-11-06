import React, { useState } from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./Checkbox.module.css";

const Checkbox = ({ data, type, onHandle }) => {
  return (
    <label className={styles.checkboxLabel} htmlFor={data.name}>
      <Icon
        name="check"
        className={data.isChecked ? styles.checkboxActive : styles.checkbox}
      />

      <input
        className={styles.inputCheckbox}
        id={data.name}
        name={data.name}
        type="checkbox"
        checked={data.isChecked}
        onChange={() => onHandle(data.name, type, "checkbox")}
      />
      {data.label}
    </label>
  );
};

export default Checkbox;
