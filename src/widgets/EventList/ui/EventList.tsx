import { EventTable } from '@/features/EventTable';

import useTimezone from '../api/useTimezone';
import { useProjectId } from '../model/useEventListFilter';
import { useFilterString } from '../model/useFilterString';

import ProjectNotSelected from './ProjectNotSelected';

const EventList: React.FC = () => {
  const { data: timezone } = useTimezone();
  const projectId = useProjectId();
  const filterString = useFilterString();
  if (projectId == null) {
    return <ProjectNotSelected />;
  }
  return (
    <EventTable
      projectId={projectId}
      filter={filterString}
      timezone={timezone}
    />
  );
};

export default EventList;
