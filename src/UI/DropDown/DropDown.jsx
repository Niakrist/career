import React, { useState } from "react";
import styles from "./DropDown.module.css";
import Icon from "../../components/Icon/Icon";
import Checkbox from "../checkbox/Checkbox";
import DropDownItem from "../DropDownItem/DropDownItem";

const DropDown = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateDrop = () => {
    if (filter.groups) {
      const data2 = filter.groups.map((elem) => {
        return {
          type: elem.type,
          name: filter.name,
          title: elem.title,
          options: elem.options,
          radioValue: elem.radioValue,
        };
      });
      return data2;
    }
  };
  const data2 = generateDrop();

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
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {filter.options ? (
              filter.options.map((data) => (
                <li className={styles.item} key={data.name}>
                  <Checkbox
                    data={data}
                    type={filter.type}
                    onHandle={onHandle}
                  />
                </li>
              ))
            ) : (
              <ul className={styles.list}>
                {data2.map((data, index) => {
                  return (
                    <li key={index}>
                      <DropDownItem filter={data} onHandle={onHandle} />
                    </li>
                  );
                })}
              </ul>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDown;
