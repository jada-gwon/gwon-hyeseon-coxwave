import EventTable from './EventTable';
import ProjectNotSelected from './ProjectNotSelected';

type EventTableProps = {
  projectId: string | null | undefined;
};

const EventList: React.FC<EventTableProps> = ({
  projectId: selectedProjectId,
}) => {
  if (selectedProjectId == null) {
    return <ProjectNotSelected />;
  }
  return <EventTable projectId={selectedProjectId} />;
};

export default EventList;
