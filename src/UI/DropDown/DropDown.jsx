import React, { useState } from "react";
import styles from "./DropDown.module.css";

import Icon from "../../components/Icon/Icon";
import Checkbox from "../checkbox/Checkbox";

const DropDown = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateDrop = () => {
    if (filter.groups) {
      const data2 = filter.groups.map((elem) => {
        return {
          type: filter.type,
          name: elem.name,
          title: elem.title,
          options: elem.options,
        };
      });
      return data2;
    }
  };
  const data2 = generateDrop();

  return (
    <>
      <button className={styles.filterItem} onClick={() => setIsOpen(!isOpen)}>
        <Icon name={filter.name} className={styles.icons} />
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
          {filter.options
            ? filter.options.map((data) => (
                <li className={styles.item} key={data.name}>
                  <Checkbox
                    data={data}
                    type={filter.name}
                    onHandle={onHandle}
                  />
                </li>
              ))
            : data2.map((data, index) => (
                <li className={styles.item} key={index}>
                  <DropDown filter={data} onHandle={onHandle} />
                </li>
              ))}
        </ul>
      )}
    </>
  );
};

export default DropDown;
