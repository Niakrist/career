const showExperience = (experience) => {
  if (experience.min === 0) return "Без опыта";
  if (experience.min === 1) return "Опыт от 1 года до 3 лет";
  if (experience.min === 3) return "Опыт от 3 до 6 лет";
  if (experience.min === 6) return "Опыт от 6 лет";
};

export default showExperience;
