import React, { useState } from "react";
import styles from "./DropDownItem.module.css";

import Icon from "../../components/Icon/Icon";
import Checkbox from "../checkbox/Checkbox";

const DropDownItem = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.filterItem} onClick={() => setIsOpen(!isOpen)}>
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
              <Checkbox data={data} type={filter.type} onHandle={onHandle} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropDownItem;
