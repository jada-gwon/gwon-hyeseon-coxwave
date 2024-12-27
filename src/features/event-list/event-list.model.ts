import { useState } from 'react';

import { eventQueries } from '@/entities/event';
import { projectQueries } from '@/entities/project';

const PageSize = 15;

export function useEventListViewModel(projectId: string) {
  const {
    data: eventData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = eventQueries.useInfiniteEventList(projectId, PageSize);
  const { data: projectData } = projectQueries.useProject(projectId);
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
