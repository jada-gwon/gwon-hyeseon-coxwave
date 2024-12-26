import { useQuery } from '@connectrpc/connect-query';

import { eventApis } from '@/entities/event';

type EventTableRowsProps = {
  selectedProjectId: string;
};

const EventTableRows: React.FC<EventTableRowsProps> = ({
  selectedProjectId,
}) => {
  const { data } = useQuery(eventApis.listEvents, {
    projectId: selectedProjectId,
  });
  return (
    <>
      {data?.events.map((event) => (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.type}</td>
          <td>{event.createTime?.seconds}</td>
        </tr>
      ))}
    </>
  );
};

export default EventTableRows;
