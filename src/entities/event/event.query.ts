import { useInfiniteQuery } from '@connectrpc/connect-query';

import { listEvents } from './event.api';

export function useInfiniteEventList(projectId: string, pageSize: number) {
  return useInfiniteQuery(
    listEvents,
    {
      projectId,
      pageToken: '',
      pageSize,
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
