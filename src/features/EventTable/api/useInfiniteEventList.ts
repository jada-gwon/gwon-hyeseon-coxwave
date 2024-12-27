import { useInfiniteQuery } from '@connectrpc/connect-query';

import { eventApis } from '@/entities/event';

export function useInfiniteEventList(
  projectId: string,
  filter: string,
  pageSize: number,
) {
  return useInfiniteQuery(
    eventApis.listEvents,
    {
      projectId,
      pageToken: '',
      pageSize,
      filter,
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
