import React, { useState } from "react";
import styles from "./DropDownItem.module.css";

import Icon from "../../components/Icon/Icon";
import Checkbox from "../checkbox/Checkbox";
import RadioButton from "../RadioButton/RadioButton";

const DropDownItem = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <button
        className={`${styles.filterItem} ${isOpen && styles.filterItemActive}`}
        onClick={() => setIsOpen(!isOpen)}>
        <Icon name={filter.type} className={styles.icons} />
        {filter.title}
        <Icon
          name="chevronDown"
          className={`${styles.chevronDown} ${
            isOpen && styles.chevronDownRotate
          }`}
        />
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {filter.options.map((data) => (
            <li className={styles.item} key={data.name}>
              {data.type === "checkbox" ? (
                <Checkbox data={data} type={filter.type} onHandle={onHandle} />
              ) : (
                <RadioButton
                  value={filter.radioValue}
                  data={data}
                  onHandle={onHandle}
                  type={filter.type}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDownItem;
