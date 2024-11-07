import { TYPE_NAME } from "@/constants";

// Функция отменяет установленный флажок во вкладке "Уровень дохода"
// при нажатии на radio "не имеет значения", по аналогии, как это сделано на сайте hh

const resetCheckbox = (setFilter, type) => {
  setFilter((prevData) => {
    return prevData.map((item) => {
      if (item.groups) {
        return {
          ...item,
          groups: item.groups.map((elem) => {
            if (elem.type === type) {
              return {
                ...elem,
                options: elem.options.map((el) => {
                  if (el.name === TYPE_NAME.IS_SALARY) {
                    return { ...el, isChecked: false };
                  } else {
                    return el;
                  }
                }),
              };
            } else {
              return elem;
            }
          }),
        };
      } else {
        return item;
      }
    });
  });
};

export default resetCheckbox;
