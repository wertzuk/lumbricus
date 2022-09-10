function datesEqual(a, b) {
  return !(a > b || b > a);
}
export function transformDates(startDate, endDate) {
  let dateStr = '';
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const gerStartDate = startDate.toLocaleDateString('de-DE', options);
  dateStr += gerStartDate;
  let gerEndDate = null;

  const sameDate = datesEqual(startDate, endDate);
  if (!sameDate) {
    gerEndDate = endDate.toLocaleDateString('de-DE', options);
    dateStr += `  -  ${gerEndDate}`;
  }
  return dateStr;
}

export function test() {}
