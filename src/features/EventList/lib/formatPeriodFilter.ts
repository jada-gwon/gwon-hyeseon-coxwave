import { formatRFC3339 } from 'date-fns';

function formatPeriodFilter(period: [Date | null, Date | null]): string {
  const [start, end] = period;

  const minDate = start && `create_time >= "${formatRFC3339(start)}"`;
  const maxDate = end && `create_time < "${formatRFC3339(end)}"`;
  return [minDate, maxDate].filter(Boolean).join(' AND ');
}

export default formatPeriodFilter;
