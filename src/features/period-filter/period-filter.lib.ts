import { TZDate } from '@date-fns/tz';
import { formatRFC3339, set, startOfWeek, sub } from 'date-fns';

import {
  Period,
  PeriodFilterOption,
  isPeriodFilterOption,
} from './period-filter.type';

export function getPeriod(
  option: PeriodFilterOption | string | null,
  timezone: string,
): Period {
  if (option == null) {
    return [null, null];
  }

  if (!isPeriodFilterOption(option)) {
    const zonedDate = new TZDate(option, timezone);
    const start = set(zonedDate, { hours: 0, minutes: 0, seconds: 0 });
    const end = set(start, { date: start.getDate() + 1 });
    return [formatRFC3339(start), formatRFC3339(end)];
  }
  switch (option) {
    case 'Today':
      return getTodayPeriod(timezone);
    case 'Yesterday':
      return getYesterdayPeriod(timezone);
    case '7D':
      return getWeekPeriod(timezone);
    case '30D':
      return getPeriodWithDays(30, timezone);
    case '3M':
      return getPeriodWithMonths(3, timezone);
    case '6M':
      return getPeriodWithMonths(6, timezone);
    case '12M':
      return getPeriodWithMonths(12, timezone);
  }
}

function getTodayPeriod(timezone: string): Period {
  const zonedDate = TZDate.tz(timezone);
  const start = set(zonedDate, { hours: 0, minutes: 0, seconds: 0 });
  return [formatRFC3339(start), null];
}

function getYesterdayPeriod(timezone: string): Period {
  const zonedDate = TZDate.tz(timezone);
  const end = set(zonedDate, { hours: 0, minutes: 0, seconds: 0 });
  const start = set(end, { date: end.getDate() - 1 });
  return [formatRFC3339(start), formatRFC3339(end)];
}

function getWeekPeriod(timezone: string): Period {
  const zonedDate = TZDate.tz(timezone);
  const start = startOfWeek(zonedDate, { weekStartsOn: 1 });
  return [formatRFC3339(start), null];
}

function getPeriodWithDays(days: number, timezone: string): Period {
  const zonedDate = TZDate.tz(timezone);
  const start = sub(zonedDate, { days: days - 1 });
  return [formatRFC3339(start), null];
}
function getPeriodWithMonths(months: number, timezone: string): Period {
  const zonedDate = TZDate.tz(timezone);
  const start = sub(zonedDate, { months });
  return [formatRFC3339(start), null];
}
