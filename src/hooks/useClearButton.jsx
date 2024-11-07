import { useEffect, useState } from "react";
import { TYPE_NAME } from "@/constants";

// Хук определяет надо ли показывать кнопку "Сбросить фильтр" или нет
const useClearButton = (filters) => {
  const [isClearButton, setIsClearButton] = useState(false);

  useEffect(() => {
    for (const filter of filters) {
      if (filter.type === TYPE_NAME.LOCATION && filter.city) {
        setIsClearButton(true);
      } else if (filter.options) {
        for (const option of filter.options) {
          if (option.isChecked) {
            setIsClearButton(true);
          }
        }
      } else if (filter.groups) {
        for (const group of filter.groups) {
          if (group.radioValue) {
            setIsClearButton(true);
          }
          for (const option of group.options) {
            if (option.isChecked) {
              setIsClearButton(true);
            }
          }
        }
      } else {
        setIsClearButton(false);
      }
    }
  }, [filters]);

  return isClearButton;
};

export default useClearButton;
