export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

export function isToday(date) {
  const today = new Date();
  return new Date(date).getDate() === today.getDate();
}
