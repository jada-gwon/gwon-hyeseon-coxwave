import { IconChevronLeft, IconChevronRight } from '@/shared/ui/icons';

import { getPageLabel } from './event-list.lib';
import useEventListViewModel from './event-list.model';

type EventTableRowsProps = {
  projectId: string;
};

const EventTable: React.FC<EventTableRowsProps> = ({ projectId }) => {
  const { data, currentPage, hasPrevPage, hasNextPage, prev, next } =
    useEventListViewModel(projectId);

  return (
    <>
      <div>{data?.totalSize} Events</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>CreateTime</th>
          </tr>
        </thead>
        <tbody>
          {data?.events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.type}</td>
              <td>{event.createTime?.seconds}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {getPageLabel(currentPage, data?.totalSize ?? 0)}
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
