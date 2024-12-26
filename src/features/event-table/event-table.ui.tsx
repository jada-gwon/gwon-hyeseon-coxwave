import EventTableEmpty from './event-table-empty.ui';
import EventTableHeader from './event-table-header.ui';
import EventTableRows from './event-table-rows.ui';

type EventTableProps = {
  selectedProjectId?: string | null | undefined;
};

const EventTable: React.FC<EventTableProps> = ({ selectedProjectId }) => {
  return (
    <table>
      <EventTableHeader />
      <tbody>
        {selectedProjectId == null ? (
          <EventTableEmpty />
        ) : (
          <EventTableRows selectedProjectId={selectedProjectId} />
        )}
      </tbody>
    </table>
  );
};

export default EventTable;
