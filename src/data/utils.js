export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatDate = (str) => {
  if (!str) return;
  const [year, month, day] = str.split("-");
  return `${month}-${day}-${year}`;
};
