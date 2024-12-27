import { dateUtils } from '@/shared/lib';
import { SimplePaginator } from '@/shared/ui/simple-paginator';

import useEventListViewModel from './event-list.model';

type EventTableRowsProps = {
  projectId: string;
};

const EventTable: React.FC<EventTableRowsProps> = ({ projectId }) => {
  const { events, totalSize, isFetching, currentPage, timezone, onChangePage } =
    useEventListViewModel(projectId);

  return (
    <>
      <div className="mb-2 font-semibold text-gray-500">{totalSize} Events</div>
      <div className="overflow-hidden rounded-lg border border-zinc-300">
        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr className="border-b border-zinc-300 bg-zinc-100 font-semibold">
              <th className="w-48 px-4 py-2 text-center">ID</th>
              <th className="px-4 py-2 text-center">Type</th>
              <th className="w-56 px-4 py-2 text-center">CreateTime</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t border-zinc-300">
                <td className="px-4 py-2 text-center">{event.id}</td>
                <td className="px-4 py-2 text-center">{event.type}</td>
                <td className="px-4 py-2 text-center">
                  {event.createTime != null
                    ? dateUtils.formatTimestamp(
                        Number(event.createTime.seconds) * 1000,
                        timezone,
                      )
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <SimplePaginator
          currentPage={currentPage}
          totalSize={totalSize}
          pageSize={15}
          isFetching={isFetching}
          onChangePage={onChangePage}
        />
      </div>
    </>
  );
};

export default EventTable;
