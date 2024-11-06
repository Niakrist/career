import React, { useState } from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./RadioButton.module.css";

const RadioButton = ({ data, value, type, onHandle }) => {
  return (
    <label className={styles.radioLabel} htmlFor={data.name}>
      <Icon
        name="radio"
        className={data.name === value ? styles.radioActive : styles.radio}
      />
      <input
        className={styles.inputRadio}
        id={data.name}
        value={data.name}
        name={data.type}
        type="radio"
        checked={data.name === value}
        onChange={(e) => onHandle(e.target.value, type, "radio")}
      />
      {data.label}
    </label>
  );
};

export default RadioButton;
