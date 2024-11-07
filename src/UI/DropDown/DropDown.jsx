import { useState } from "react";
import { Icon } from "@/components";
import { Checkbox, DropDownItem } from "@/UI";
import { clsx, transformDataForDropdown } from "@/utils";
import { ICON_NAME } from "@/constants";
import styles from "./DropDown.module.css";

const DropDown = ({ filter, onHandle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = transformDataForDropdown(filter);

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
