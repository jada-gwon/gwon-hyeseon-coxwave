import { PeriodFilterOption } from '@/features/PeriodFilter';

export type FilterState = {
  projectId: string | null;
  period: PeriodFilterOption | string | null;

  setProjectId: (projectId: string | null) => void;
  setPeriod: (period: PeriodFilterOption | string | null) => void;
};
