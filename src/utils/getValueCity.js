import { TYPE_NAME } from "@/constants";

// Функция позволяет получить значение поля city для отображения города в первом input
const getValueCity = (filters) => {
  const cityData = filters.find(
    (item) => item.name === TYPE_NAME.INPUT && item.type === TYPE_NAME.LOCATION
  );
  return cityData.city;
};

export default getValueCity;
