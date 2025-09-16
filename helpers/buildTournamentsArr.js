/**
 * данные из бд в массив из 7 ближайших дней (dataDayly) + турнир месяца (finals),
 * (если его нет добавляется объект для заглушки):
 * [{ date, isDayoff, schedule: {startTime, endTime, name} }, ...]
 */
export function buildNext7DaysFromDb(dataDayly, finals) {
  const result = [];
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
  const now = new Date();

  // обычные на 7 днй
  for (let i = 0; i < 7; i++) {
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + i);
    const dayKey = dateObj.toISOString().split("T")[0];

    const tournamentsForDay = dataDayly
      .filter((t) => t.start_time.startsWith(dayKey))
      .map((t) => ({
        name: t?.name,
        startTime: new Intl.DateTimeFormat("ru-RU", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date(t.start_time)),
        endTime: "победителя",
        description: t?.description,
      }));

    result.push({
      date: `${dateObj.getDate()} ${months[dateObj.getMonth()]} - ${
        days[dateObj.getDay()]
      }`,
      isDayoff: tournamentsForDay.length === 0,
      schedule: tournamentsForDay,
    });
  }

  // финалы
  const upcomingFinals = (finals || []).filter(
    (f) => new Date(f.start_time) >= now
  );
  if (upcomingFinals.length === 0) {
    result.push({
      date: null,
      isDayoff: false,
      schedule: [],
      isFinalPlaceholder: true,
    });
  } else {
    const finalSchedule = upcomingFinals.map((f) => ({
      name: f.name,
      startTime: new Intl.DateTimeFormat("ru-RU", {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(f.start_time)),
      endTime: "победителя",
      description: f.description,
    }));

    const firstFinalDate = new Date(upcomingFinals[0].start_time);
    result.push({
      date: `${firstFinalDate.getDate()} ${
        months[firstFinalDate.getMonth()]
      } - ${days[firstFinalDate.getDay()]}`,
      isDayoff: false,
      schedule: finalSchedule,
    });
  }

  return result;
}
