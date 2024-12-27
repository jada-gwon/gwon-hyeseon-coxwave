import { timestampUtils } from '@/shared/lib';
import { SimplePaginator } from '@/shared/ui/SimplePaginator';

import useEventTableViewModel from '../model/useEventTableViewModel';

type EventTableProps = {
  projectId: string;
  filter: string;
  timezone: string | undefined;
  pageSize?: number;
};

const EventTable: React.FC<EventTableProps> = ({
  projectId,
  filter,
  timezone,
  pageSize = 15,
}) => {
  const { events, totalSize, isFetching, currentPage, onChangePage } =
    useEventTableViewModel(projectId, filter, pageSize);

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
                  {!!event.createTime && !!timezone
                    ? timestampUtils.formatTimestamp(event.createTime, timezone)
                    : '-'}
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
          pageSize={pageSize}
          isFetching={isFetching}
          onChangePage={onChangePage}
        />
      </div>
    </>
  );
};

export default EventTable;
