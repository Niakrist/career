// Данные для полей секции фильтр
export const filterListData = [
  {
    name: "input",
    type: "location",
    title: "Город",
  },
  {
    name: "dropDown",
    type: "briefcase",
    title: "Тип занятости",
    options: [
      { name: "full", label: "Полная занятость", isChecked: false },
      { name: "part", label: "Частичная занятость", isChecked: false },
      { name: "internship", label: "Стажировка", isChecked: false },
      { name: "project", label: "Проектная работа", isChecked: false },
    ],
  },
  {
    name: "dropDown",
    type: "filter",
    title: "Дополнительные фильтры",
    groups: [
      {
        type: "calendar",
        title: "Дата публикации вакансии",
        options: [
          {
            name: "all-time",
            label: "За все время",
            isChecked: false,
            type: "radio",
          },
          { name: "month", label: "За месяц", isChecked: false, type: "radio" },
          { name: "week", label: "За неделю", isChecked: false, type: "radio" },
          {
            name: "three-day",
            label: "За последние 3 дня",
            isChecked: false,
            type: "radio",
          },
          { name: "today", label: "За сутки", isChecked: false, type: "radio" },
        ],
      },
      {
        type: "experience",
        title: "Опыт работы",
        options: [
          {
            name: "no",
            label: "Не имеет значения",
            isChecked: false,
            type: "radio",
          },
          { name: "0", label: "Нет опыта", isChecked: false, type: "radio" },
          {
            name: "1",
            label: "От 1 года до 3 лет",
            isChecked: false,
            type: "radio",
          },
          {
            name: "3",
            label: "От 3 до 6 лет",
            isChecked: false,
            type: "radio",
          },
          { name: "6", label: "Более 6 лет", isChecked: false, type: "radio" },
        ],
      },
      {
        type: "time",
        title: "График работы",
        options: [
          {
            name: "fullday",
            label: "Полный день",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "shift",
            label: "Вахтовый метод",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "replaceable",
            label: "Сменный график",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "flexible",
            label: "Гибкий график",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "remote",
            label: "Удаленная работа",
            isChecked: false,
            type: "checkbox",
          },
        ],
      },
      {
        type: "stack",
        title: "Теги технологий",
        options: [
          {
            name: "jQuery",
            label: "jQuery",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "JavaScript",
            label: "JavaScript",
            isChecked: false,
            type: "checkbox",
          },
          { name: "CSS3", label: "CSS3", isChecked: false, type: "checkbox" },
          { name: "Git", label: "Git", isChecked: false, type: "checkbox" },
          { name: "Vue", label: "Vue", isChecked: false, type: "checkbox" },
          {
            name: "Flexbox",
            label: "Flexbox",
            isChecked: false,
            type: "checkbox",
          },
          { name: "HTML5", label: "HTML5", isChecked: false, type: "checkbox" },
        ],
      },
      {
        type: "graduation",
        title: "Образование",
        options: [
          {
            name: "no",
            label: "Не требуется или не указано",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "average",
            label: "Среднее профессиональное",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "higher",
            label: "Высшее",
            isChecked: false,
            type: "checkbox",
          },
        ],
      },
      {
        type: "salary",
        title: "Уровень дохода",
        options: [
          {
            name: "no",
            label: "Не имеет значения",
            isChecked: false,
            type: "radio",
          },
          {
            name: "25000",
            label: "от 25 000 ₽",
            isChecked: false,
            type: "radio",
          },
          {
            name: "50000",
            label: "от 50 000 ₽",
            isChecked: false,
            type: "radio",
          },
          {
            name: "100000",
            label: "от 100 000 ₽",
            isChecked: false,
            type: "radio",
          },
          {
            name: "150000",
            label: "от 150 000 ₽",
            isChecked: false,
            type: "radio",
          },
          {
            name: "isSalary",
            label: "Указан доход",
            isChecked: false,
            type: "checkbox",
          },
        ],
      },
      {
        type: "tomeJob",
        title: "Подработка",
        options: [
          {
            name: "part-time",
            label: "Неполный день",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "4-hours",
            label: "От 4 часов в день",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "evening",
            label: "По вечерам",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "weekends",
            label: "По выходным",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "one-time task",
            label: "Разовое задание",
            isChecked: false,
            type: "checkbox",
          },
        ],
      },
      {
        type: "moreFilters",
        title: "Другие параметры",
        options: [
          {
            name: "1",
            label: "Доступные людям с инвалидностью",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "2",
            label: "Включая скрытые вакансии",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "3",
            label: "От аккредитованных ИТ компаний",
            isChecked: false,
            type: "checkbox",
          },
          {
            name: "4",
            label: "Без вакансий от кадровых агенств",
            isChecked: false,
            type: "checkbox",
          },
        ],
      },
    ],
  },
];
