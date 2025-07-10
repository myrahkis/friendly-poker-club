const WEEKDAY_FULL = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const WEEKDAY_SHORT = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const MONTH_NAMES = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

/**
 * данные из json в массив из 7 ближайших дней:
 * [{ date, dayOfWeek, schedule: {time, name} }, ...]
 */
export function buildNext7DaysFromWeekdayJson(raw) {
  const result = [];
  const today = new Date();

  for (let offset = 0; offset < 7; offset++) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);

    const dayNumber = d.getDate();
    const monthName = MONTH_NAMES[d.getMonth()];
    const fullName = WEEKDAY_FULL[d.getDay()];
    const shortName = WEEKDAY_SHORT[d.getDay()];

    const dayObj = raw[fullName];
    const scheduleArr = {};

    if (dayObj && typeof dayObj === "object") {
      for (const key in dayObj) {
        if (Object.prototype.hasOwnProperty.call(dayObj, key)) {
          const entry = dayObj[key];

          scheduleArr[key] = entry;
          // console.log(scheduleArr);
        }
      }
    }

    result.push({
      date: `${dayNumber} ${monthName}`,
      dayOfWeek: shortName,
      heading: scheduleArr.length ? "" : "— Нет турнира —",
      schedule: scheduleArr,
    });
  }

  const WEEKDAY_FULL_SET = new Set(WEEKDAY_FULL);
  Object.entries(raw).forEach(([key, obj]) => {
    if (
      !WEEKDAY_FULL_SET.has(key) &&
      obj &&
      typeof obj === "object" &&
      typeof obj.date === "string"
    ) {
      const monthlySchedule = {};
      for (const subKey in obj) {
        if (
          subKey !== "date" &&
          Object.prototype.hasOwnProperty.call(obj, subKey)
        ) {
          const entry = obj[subKey];
          monthlySchedule[subKey] = entry;
        }
      }
      result.push({
        date: obj.date,
        dayOfWeek: "",
        heading: "Турнир месяца",
        schedule: monthlySchedule,
      });
    }
  });

  return result;
}
