// * если брать индекс месяца от 0, то для корректного результата надо передавать index + 1
export default function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
