import { TZDate } from '@date-fns/tz';
import { set, startOfWeek, sub } from 'date-fns';

import { PeriodFilterOption, isPeriodFilterOption } from '../model/types';

function getTodayPeriod(timezone: string): [Date | null, Date | null] {
  const zonedDate = TZDate.tz(timezone);
  const start = set(zonedDate, { hours: 0, minutes: 0, seconds: 0 });
  return [start, null];
}

function getYesterdayPeriod(timezone: string): [Date | null, Date | null] {
  const zonedDate = TZDate.tz(timezone);
  const end = set(zonedDate, { hours: 0, minutes: 0, seconds: 0 });
  const start = set(end, { date: end.getDate() - 1 });
  return [start, end];
}

function getWeekPeriod(timezone: string): [Date | null, Date | null] {
  const zonedDate = TZDate.tz(timezone);
  const start = startOfWeek(zonedDate, { weekStartsOn: 1 });
  return [start, null];
}

function getPeriodWithDays(
  days: number,
  timezone: string,
): [Date | null, Date | null] {
  const zonedDate = TZDate.tz(timezone);
  const start = sub(zonedDate, { days: days - 1 });
  return [start, null];
}

function getPeriodWithMonths(
  months: number,
  timezone: string,
): [Date | null, Date | null] {
  const zonedDate = TZDate.tz(timezone);
  const start = sub(zonedDate, { months });
  return [start, null];
}

function getCustomPeriod(
  dateString: string,
  timezone: string,
): [Date | null, Date | null] {
  const date = new Date(dateString);
  const start = new TZDate(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    timezone,
  );

  const end = set(start, { date: start.getDate() + 1 });
  return [start, end];
}

function getFilterValue(
  option: PeriodFilterOption | string | null,
  timezone: string | undefined,
): [Date | null, Date | null] {
  if (option == null || !timezone) {
    return [null, null];
  }

  if (!isPeriodFilterOption(option)) {
    return getCustomPeriod(option, timezone);
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

export default getFilterValue;
