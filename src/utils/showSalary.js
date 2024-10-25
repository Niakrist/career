const showSalary = (salary) => {
  if (!salary.min && salary.max) {
    return `до ${salary.max.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    })}`;
  }
  if (salary.min && !salary.max) {
    return `от ${salary.min.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    })}`;
  }
  if (salary.min && salary.max) {
    return `${salary.min.toLocaleString("ru-RU", {
      style: "decimal",
    })} - ${salary.max.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    })}`;
  }
  return `Доход не указан`;
};

export default showSalary;
