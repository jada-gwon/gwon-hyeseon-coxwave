import EventTable from './EventTable';
import ProjectNotSelected from './ProjectNotSelected';

type EventTableProps = {
  projectId: string | null;
  timezone: string | undefined;
};

const EventList: React.FC<EventTableProps> = ({ projectId, timezone }) => {
  if (projectId == null) {
    return <ProjectNotSelected />;
  }
  return <EventTable projectId={projectId} timezone={timezone} />;
};

export default EventList;
