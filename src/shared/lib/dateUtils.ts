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
export function getCurrentTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
