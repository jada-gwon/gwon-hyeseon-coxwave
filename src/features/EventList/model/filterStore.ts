import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

import { FilterState } from './types';

const useFilterStore = create<FilterState>((set) => ({
  period: [],

  setPeriod(period) {
    set({ period });
  },
}));

export function useEventListFilter() {
  return useFilterStore(useShallow(({ setPeriod }) => ({ setPeriod })));
}

export function useFilterState() {
  return useFilterStore(useShallow(({ period }) => ({ period })));
}
