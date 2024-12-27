export function getPageLabel(
  page: number,
  totalSize: number,
  pageSize: number,
) {
  const start = page * pageSize + 1;
  const end = Math.min((page + 1) * pageSize, totalSize);

  return `${start} - ${end} of ${totalSize}`;
}
