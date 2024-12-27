import { IconChevronLeft, IconChevronRight } from '@/shared/ui';

import { DateInputHeaderProps } from '../model/types';

const DateInputHeader: React.FC<DateInputHeaderProps> = ({
  date,
  hasValue,
  increaseMonth,
  decreaseMonth,
  clearDate,
}) => {
  return (
    <>
      <div className="mb-5 flex px-2">
        <input
          className="block grow rounded-sm border border-zinc-300 bg-zinc-100 px-1 text-base font-medium"
          value={
            hasValue
              ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
              : ''
          }
          readOnly
        />
        <button
          type="button"
          className="ml-1 text-xs disabled:text-gray-500"
          onClick={clearDate}
          disabled={!hasValue}
        >
          삭제
        </button>
      </div>
      <div className="flex items-center justify-between px-3 text-sm">
        <div className="font-medium">
          {date.getFullYear()}년 {date.getMonth() + 1}월
        </div>
        <div className="flex gap-1">
          <button
            onClick={decreaseMonth}
            className="rounded-sm text-gray-700 hover:bg-zinc-100"
            aria-label="이전 달"
          >
            <span aria-hidden="true">
              <IconChevronLeft />
            </span>
          </button>
          <button
            onClick={increaseMonth}
            className="rounded-sm text-gray-700 hover:bg-zinc-100"
            aria-label="다음 달"
          >
            <span aria-hidden="true">
              <IconChevronRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DateInputHeader;
