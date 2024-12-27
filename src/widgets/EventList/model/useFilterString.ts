import useTimezone from '../api/useTimezone';
import formatPeriodFilter from '../lib/formatPeriodFilter';

import { useFilterState } from './useEventListFilter';

export function useFilterString() {
  const { period } = useFilterState();
  const { data: timezone } = useTimezone();
  return formatPeriodFilter(period, timezone);
}
