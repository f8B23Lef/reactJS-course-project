export function getYearFromDate(date) {
  return new Date(date).getFullYear();
}

export function getHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}min`;
}
