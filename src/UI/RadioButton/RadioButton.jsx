import React, { useState } from "react";
import Radio from "../../components/Icon/icons/Radio";
import styles from "./RadioButton.module.css";

const RadioButton = ({ data, value, setValue, type, onHandle }) => {
  return (
    <label className={styles.itemLabel} htmlFor={data.name}>
      <Radio
        className={data.name === value ? styles.radioActive : styles.radio}
      />
      <input
        className={styles.inputCheckbox}
        id={data.name}
        value={data.name}
        name={data.type}
        type="radio"
        checked={data.name === value}
        onChange={(e) => setValue(e.target.value)}
      />
      {data.label}
    </label>
  );
};

export default RadioButton;