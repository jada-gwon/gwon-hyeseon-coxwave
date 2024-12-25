import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { IconChevronLeft, IconChevronRight } from '@/shared/ui/icons';

type DateInputHeaderProps = ReactDatePickerCustomHeaderProps & {
  hasValue: boolean;
  clearDate: () => void;
};

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
            className="hover:bg-zinc-100"
            aria-label="이전 달"
          >
            <span aria-hidden="true" className="size-5 rounded-sm *:size-full">
              <IconChevronLeft />
            </span>
          </button>
          <button
            onClick={increaseMonth}
            className="hover:bg-zinc-100"
            aria-label="다음 달"
          >
            <span aria-hidden="true" className="size-5 rounded-sm *:size-full">
              <IconChevronRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DateInputHeader;
