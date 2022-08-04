export function normalizeDate(date) {
  const dateNow = new Date(Date.now());
  const newDate = new Date(date);
  const Day = dateFormat(newDate.getDate());
  const Month = dateFormat(newDate.getMonth());
  const Year = newDate.getFullYear();
  const Time = `${dateFormat(newDate.getHours())}:${dateFormat(
    newDate.getMinutes()
  )}`;

  if (dateFormat(dateNow.getDate()) === Day) {
    return Time;
  }

  if (dateFormat(dateNow).getDate() > Day) {
    return `Вчера в ${Time}`;
  }

  if (dateFormat(dateNow).get > Day) {
    return `Вчера в ${Time}`;
  }

  if (
    dateFormat(dateNow).getMonth() > Month ||
    new Date(dateNow).get > Day * 2
  ) {
    return `${Day}.${Month}.${Year}`;
  }

  function dateFormat(date) {
    if (String(date).length === 1) {
      return "0" + date;
    } else {
      return date;
    }
  }
}
