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
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short', // 축약된 월 이름 (ex: Jul)
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true, // 12시간제
    timeZone,
  });

  return formatter.format(date);
}
