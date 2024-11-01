// Данные для полей секции фильтр
export const filterListData = [
  {
    type: "input",
    name: "location",
    title: "Город",
  },
  {
    type: "dropDown",
    name: "briefcase",
    title: "Тип занятости",
    options: [
      { name: "full", label: "Полная занятость", isChecked: false },
      { name: "part", label: "Частичная занятость", isChecked: false },
      { name: "internship", label: "Стажировка", isChecked: false },
      { name: "project", label: "Проектная работа", isChecked: false },
    ],
  },
  {
    type: "dropDown",
    name: "filter",
    title: "Дополнительные фильтры",
    groups: [
      {
        name: "calendar",
        title: "Дата публикации вакансии",
        options: [
          { name: "all-time", label: "За все время", isChecked: false },
          { name: "month", label: "За месяц", isChecked: false },
          { name: "week", label: "За неделю", isChecked: false },
          { name: "three-day", label: "За последние 3 дня", isChecked: false },
          { name: "today", label: "За сутки", isChecked: false },
        ],
      },
      {
        name: "experience",
        title: "Опыт",
        options: [
          { name: "all-time", label: "За все время", isChecked: false },
          { name: "month", label: "За месяц", isChecked: false },
          { name: "week", label: "За неделю", isChecked: false },
          { name: "three-day", label: "За последние 3 дня", isChecked: false },
          { name: "today", label: "За сутки", isChecked: false },
        ],
      },
    ],
  },
];
