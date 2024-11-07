// функция для преобразования объекта в массив, чтобы было проще итерироваться
const transformDataForDropdown = (filter) => {
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

export default transformDataForDropdown;
