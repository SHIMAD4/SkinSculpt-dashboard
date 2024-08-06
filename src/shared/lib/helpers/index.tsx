export const formatDateToISO = (year: number, month: number, day: number): string => {
  const date = new Date(year, month - 1, day, 0, 0, 0);
  const isoString = date.toISOString();

  return isoString.slice(0, 19);
};
