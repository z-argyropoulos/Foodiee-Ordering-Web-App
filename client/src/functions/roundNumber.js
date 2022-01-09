export const roundNumber = (x, n = 2) =>
  Math.round(x * 10 ** n) / 10 ** n;
