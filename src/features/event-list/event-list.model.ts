import { useInfiniteQuery } from '@connectrpc/connect-query';
import { useState } from 'react';

import { eventApis } from '@/entities/event';

import { PageSize } from './event-list.lib';

function useEventListViewModel(projectId: string) {
  const [page, setPage] = useState(0);
  const {
    data: eventData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery(
    eventApis.listEvents,
    {
      projectId,
      pageToken: '',
      pageSize: PageSize,
    },
    {
      pageParamKey: 'pageToken',
      getNextPageParam: (lastPage, totalPage) => {
        if (totalPage.length * PageSize >= lastPage.totalSize) {
          console.log('totalPage', totalPage.length, lastPage.totalSize);
          return null;
        }
        return lastPage.nextPageToken;
      },
    },
  );

  const next = async () => {
    if (isFetching || !hasNextPage) {
      return;
    }
    await fetchNextPage();
    setPage((prev) => prev + 1);
  };

  const prev = () => {
    if (isFetching || page <= 0) {
      return;
    }
    setPage((prev) => prev - 1);
  };

  return {
    data: eventData?.pages[page],
    currentPage: page,
    hasPrevPage: page > 0,
    hasNextPage,
    next,
    prev,
  };
}

export default useEventListViewModel;
