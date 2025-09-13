/**
 * данные из бд в массив из 7 ближайших дней + турнир месяца, если есть:
 * [{ date, isDayoff, schedule: {startTime, endTime, name} }, ...]
 */
export function buildNext7DaysFromDb(data) {
  const result = [];
  const finals = [];
  const months = [
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
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  for (let i = 0; i < 7; i++) {
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + i);
    const dayKey = dateObj.toISOString().split("T")[0];
    const tournamentsForDay = [];

    data.forEach((t) => {
      if (t.start_time.startsWith(dayKey)) {
        const tournament = {
          name: t.name,
          startTime: new Date(t.start_time).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          endTime: "победителя",
          description: t.description,
        };

        if (t.name.toLowerCase().includes("финал")) {
          const final = {
            date: `${dateObj.getDate()}
                        ${months[dateObj.getMonth()]}-${
              days[dateObj.getDay()]
            }`,
            name: t.name,
            startTime: new Date(t.start_time).toLocaleTimeString("ru-RU", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
            endTime: "победителя",
            description: t.description,
          };
          finals.push(final);
        } else {
          tournamentsForDay.push(tournament);
        }
      }
    });

    result.push({
      date: `${dateObj.getDate()}
            ${months[dateObj.getMonth()]} - ${days[dateObj.getDay()]}`,
      isDayoff: tournamentsForDay.length === 0,
      schedule: tournamentsForDay,
    });
  }

  // турниры месяца в конкц списка
  if (finals.length === 0) {
    result.push({
      date: null,
      isDayoff: false,
      schedule: [],
      isFinalPlaceholder: true,
    });
  } else {
    finals.forEach((f) => {
      result.push({
        date: f.date,
        isDayoff: false,
        schedule: [f],
      });
    });
  }
  return result;
}
