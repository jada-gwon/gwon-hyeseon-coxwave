import { useEffect, useState } from 'react';

import { useInfiniteEventList } from '../api/useInfiniteEventList';
import useProject from '../api/useProject';

const PageSize = 15;

function useEventListViewModel(projectId: string) {
  const {
    data: eventData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useInfiniteEventList(projectId, PageSize);
  const { data: projectData } = useProject(projectId);
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
    timezone: projectData?.project?.timeZone?.id,
    isFetching,
    currentPage,
    onChangePage,
  };
}

export default useEventListViewModel;
