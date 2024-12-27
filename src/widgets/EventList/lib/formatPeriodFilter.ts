import { formatRFC3339 } from 'date-fns';

import getPeriodFilterValue from './getPeriodFilterValue';

function formatPeriodFilter(
  period: string | null,
  timezone: string | undefined,
): string {
  const [start, end] = getPeriodFilterValue(period, timezone);

  const minDate = start && `create_time >= "${formatRFC3339(start)}"`;
  const maxDate = end && `create_time < "${formatRFC3339(end)}"`;
  return [minDate, maxDate].filter(Boolean).join(' AND ');
}

export default formatPeriodFilter;
