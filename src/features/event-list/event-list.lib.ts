export const PageSize = 15;

export function getPageLabel(page: number, totalSize: number) {
  const start = page * PageSize + 1;
  const end = Math.min((page + 1) * PageSize, totalSize);

  return `${start} - ${end} of ${totalSize}`;
}
