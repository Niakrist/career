// Функция для обработки RadioButton
const changeRadio = (setFilter, name, type) => {
  setFilter((prevData) => {
    return prevData.map((item) => {
      if (item.groups) {
        return {
          ...item,
          groups: item.groups.map((elem) => {
            if (elem.type === type) {
              return {
                ...elem,
                radioValue: name,
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

export default changeRadio;
