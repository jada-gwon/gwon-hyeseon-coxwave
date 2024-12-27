export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

export function parseDateString(dateString: string): Date | null {
  return isValidDate(dateString) ? new Date(dateString) : null;
}

export function formatDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function formatTimestamp(timestamp: bigint, timeZone?: string): string {
  const date = new Date(Number(timestamp));
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
