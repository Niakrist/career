// Функция для обработки Checkbox
const checkedCheckbox = (setFilter, name, type) => {
  setFilter((prevData) => {
    return prevData.map((item) => {
      if (item.type === type) {
        return {
          ...item,
          options: item.options.map((elem) => {
            if (elem.name === name) {
              return { ...elem, isChecked: !elem.isChecked };
            } else {
              return elem;
            }
          }),
        };
      } else if (item.groups) {
        return {
          ...item,
          groups: item.groups.map((group) => {
            return group.type === type
              ? {
                  ...group,
                  options: group.options.map((elem) => {
                    if (elem.name === name) {
                      return { ...elem, isChecked: !elem.isChecked };
                    } else {
                      return elem;
                    }
                  }),
                }
              : group;
          }),
        };
      } else {
        return item;
      }
    });
  });
};

export default checkedCheckbox;
