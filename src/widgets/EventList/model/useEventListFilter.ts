import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

import { FilterState } from './types';

export const useEventListFilter = create<FilterState>((set) => ({
  projectId: null,
  period: null,

  setProjectId(projectId) {
    set({ projectId });
  },
  setPeriod(period) {
    set({ period });
  },
}));

export function useProjectId() {
  return useEventListFilter(useShallow(({ projectId }) => projectId));
}

export function useFilterState() {
  return useEventListFilter(useShallow(({ period }) => ({ period })));
}
