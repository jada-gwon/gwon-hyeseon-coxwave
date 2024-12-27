import { TZDate } from '@date-fns/tz';
import { format } from 'date-fns';

type Timestamp = {
  seconds: bigint;
  nanos?: number;
};

export function timestampToDate(timestamp: Timestamp): Date {
  const { seconds, nanos = 0 } = timestamp;
  const milliseconds = Number(seconds) * 1000 + Math.floor(nanos / 1e6);
  return new Date(milliseconds);
}
export function formatTimestamp(
  timestamp: Timestamp,
  timeZone?: string,
): string {
  const date = timestampToDate(timestamp);

  const zonedDate = new TZDate(date, timeZone);
  return format(zonedDate, 'LLL d, yyyy, h:m aa');
}
