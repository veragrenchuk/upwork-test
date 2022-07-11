export const getYTicks = (maxValue: number, multiplicity: number): number[] => {
  const ticks = [];
  for (let i = 0; i <= maxValue / multiplicity; i++) {
    ticks.push(i * multiplicity);
  }
  return ticks;
};
