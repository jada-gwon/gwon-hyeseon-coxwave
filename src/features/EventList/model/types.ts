export type FilterState = {
  period: [Date | null, Date | null];

  setPeriod: (period: [Date | null, Date | null]) => void;
};
