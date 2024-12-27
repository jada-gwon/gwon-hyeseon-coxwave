import EventTable from './event-table.ui';
import ProjectNotSelected from './project-not-selected.ui';

type EventTableProps = {
  projectId?: string | null | undefined;
  period?: string | null | undefined;
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
