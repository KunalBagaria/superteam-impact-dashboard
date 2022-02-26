export const numberFormatter = (value: number) => {
  if (value < 1000) return value;
  if (value < 1000000) return `${(value / 1000).toFixed(1)}k`;
  if (value < 10000000000) return `${(value / 1000000).toFixed(1)}m`;
  if (value < 100000000000000) return `${(value / 1000000000).toFixed(1)}b`;
}

export const getPercent = (valueOne: number, valueTwo: number) => {
  if (valueOne === 0 || valueTwo === 0) return 0;
  return ((valueOne / valueTwo) * 100) - 100;
}