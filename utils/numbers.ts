let formatter = Intl.NumberFormat("en", { notation: "compact" });

export const numberFormatter = (value: number) => {
  return formatter.format(value);
};

export const getPercent = (valueOne: number, valueTwo: number) => {
  if (valueOne === 0 || valueTwo === 0) return 0;
  return (valueOne / valueTwo) * 100 - 100;
};
