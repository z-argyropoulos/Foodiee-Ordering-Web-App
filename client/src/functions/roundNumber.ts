export const roundNumber = (x: number, n: number = 2) =>
  Math.round(x * 10 ** n) / 10 ** n;
