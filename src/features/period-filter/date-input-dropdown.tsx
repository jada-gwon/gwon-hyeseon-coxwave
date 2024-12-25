import { useLayoutEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { createPortal } from 'react-dom';

import 'react-datepicker/dist/react-datepicker.css';
import './date-input.style.css';
import DateInputHeader from './date-input-header';

type DateInputDropdownProps = {
  value: Date | null;
  targetRef: React.RefObject<HTMLElement | null>;
  ref?: React.RefObject<HTMLDivElement | null>;
  onChangeValue: (value: Date | null) => void;
};

const DateInputDropdown: React.FC<DateInputDropdownProps> = ({
  value,
  targetRef,
  ref,
  onChangeValue,
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (targetRef?.current) {
      const targetElement = targetRef.current;
      const rect = targetElement.getBoundingClientRect();

      setPosition({
        top: rect.bottom,
        left: rect.right,
      });
    }
  }, [targetRef]);

  return createPortal(
    <div
      className="fixed mt-0.5 -translate-x-full rounded border border-zinc-300 bg-white shadow-md"
      style={{ top: position.top, left: position.left }}
      ref={ref}
    >
      <DatePicker
        inline
        selected={value}
        onChange={onChangeValue}
        renderCustomHeader={(props) => (
          <DateInputHeader
            {...props}
            clearDate={() => onChangeValue(null)}
            hasValue={value != null}
          />
        )}
        calendarClassName="custom-date-input"
      />
    </div>,
    document.body,
  );
};

export default DateInputDropdown;
