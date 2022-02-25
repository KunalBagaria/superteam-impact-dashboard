export const numberFormatter = (value: number) => {
  if (value < 1000000) return `${(value / 1000).toFixed(2)}k`;
  if (value < 10000000000) return `${(value / 1000000).toFixed(2)}m`;
  if (value < 100000000000000) return `${(value / 1000000000).toFixed(2)}b`;
}