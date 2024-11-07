import { useState } from "react";
import { Icon } from "@/components";
import { Checkbox, RadioButton } from "@/UI";
import { clsx } from "@/utils";
import { ICON_NAME, TYPE_NAME } from "@/constants";
import styles from "./DropDownItem.module.css";

const DropDownItem = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={clsx(styles.filterItem, isOpen && styles.filterItemActive)}
        onClick={() => setIsOpen(!isOpen)}>
        <Icon name={filter.type} className={styles.icons} />
        {filter.title}
        <Icon
          name={ICON_NAME.CHEVRONDOWN}
          className={clsx(
            styles.chevronDown,
            isOpen && styles.chevronDownRotate
          )}
        />
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {filter.options.map((data) => (
            <li className={styles.item} key={data.name}>
              {data.type === TYPE_NAME.CHECKBOX ? (
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
