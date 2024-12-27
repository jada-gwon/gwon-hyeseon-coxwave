import { IconChevronLeft, IconChevronRight } from '@/shared/ui';

import { getPageLabel } from './event-list.lib';
import useEventListViewModel from './event-list.model';

type EventTableRowsProps = {
  projectId: string;
};

const EventTable: React.FC<EventTableRowsProps> = ({ projectId }) => {
  const { events, currentPage, hasPrevPage, hasNextPage, prev, next } =
    useEventListViewModel(projectId);

  return (
    <>
      <div className="mb-2 font-semibold text-gray-500">
        {events?.totalSize} Events
      </div>
      <div className="overflow-hidden rounded-lg border border-zinc-300">
        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr className="border-b border-zinc-300 bg-zinc-100 font-semibold">
              <th className="w-48 px-4 py-2 text-center">ID</th>
              <th className="px-4 py-2 text-center">Type</th>
              <th className="w-40 px-4 py-2 text-center">CreateTime</th>
            </tr>
          </thead>
          <tbody>
            {events?.events.map((event) => (
              <tr key={event.id} className="border-t border-zinc-300">
                <td className="px-4 py-2 text-center">{event.id}</td>
                <td className="px-4 py-2 text-center">{event.type}</td>
                <td className="px-4 py-2 text-center">
                  {event.createTime?.seconds}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {getPageLabel(currentPage, events?.totalSize ?? 0)}
        <button
          onClick={prev}
          aria-label="이전 페이지 보기"
          disabled={!hasPrevPage}
        >
          <IconChevronLeft aria-hidden="true" />
        </button>
        <button
          onClick={next}
          aria-label="다음 페이지 보기"
          disabled={!hasNextPage}
        >
          <IconChevronRight aria-hidden="true" />
        </button>
      </div>
    </>
  );
};

export default EventTable;
