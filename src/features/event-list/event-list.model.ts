import { useState } from 'react';

import { eventQueries } from '@/entities/event';
import { projectQueries } from '@/entities/project';

import { PageSize } from './event-list.lib';

function useEventListViewModel(projectId: string) {
  const [page, setPage] = useState(0);

  const {
    data: eventData,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = eventQueries.useInfiniteEventList(projectId, PageSize);

  const { data: projectData } = projectQueries.useProject(projectId);

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
    events: eventData?.pages[page],
    timezone: projectData?.project?.timeZone?.id,
    currentPage: page,
    hasPrevPage: page > 0,
    hasNextPage,
    next,
    prev,
  };
}

export default useEventListViewModel;
