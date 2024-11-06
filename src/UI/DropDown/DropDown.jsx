import React, { useState } from "react";
import styles from "./DropDown.module.css";
import Icon from "../../components/Icon/Icon";
import Checkbox from "../checkbox/Checkbox";
import DropDownItem from "../DropDownItem/DropDownItem";

const DropDown = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateDrop = () => {
    if (filter.groups) {
      const data = filter.groups.map((elem) => {
        return {
          type: elem.type,
          name: filter.name,
          title: elem.title,
          options: elem.options,
          radioValue: elem.radioValue,
        };
      });
      return data;
    }
  };
  const data = generateDrop();

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
              <>
                {data.map((data, index) => {
                  return (
                    <li key={index}>
                      <DropDownItem filter={data} onHandle={onHandle} />
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDown;
