import { useInfiniteQuery } from '@connectrpc/connect-query';

import { eventApis } from '@/entities/event';

import formatPeriodFilter from '../lib/formatPeriodFilter';

export function useInfiniteEventList(
  projectId: string,
  period: [Date | null, Date | null],
  pageSize: number,
) {
  return useInfiniteQuery(
    eventApis.listEvents,
    {
      projectId,
      pageToken: '',
      pageSize,
      filter: formatPeriodFilter(period),
    },
    {
      pageParamKey: 'pageToken',
      getNextPageParam: (lastPage, totalPage) => {
        if (totalPage.length * pageSize >= lastPage.totalSize) {
          return null;
        }
        return lastPage.nextPageToken;
      },
    },
  );
}
