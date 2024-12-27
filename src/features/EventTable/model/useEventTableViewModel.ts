import { useEffect, useState } from 'react';

import { useInfiniteEventList } from '../api/useInfiniteEventList';

const PageSize = 15;

function useEventTableViewModel(projectId: string, filter: string) {
  const {
    data: eventData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteEventList(projectId, filter, PageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const { events, totalSize } = eventData?.pages[currentPage] ?? {
    events: [],
    totalSize: 0,
  };

  const onChangePage = async (page: number) => {
    if (eventData?.pages[page] == null && hasNextPage) {
      await fetchNextPage();
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [projectId]);

  return {
    events,
    totalSize,
    isFetching,
    currentPage,
    onChangePage,
  };
}

export default useEventTableViewModel;
