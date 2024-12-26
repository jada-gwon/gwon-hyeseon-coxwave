// import { useLayoutEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown } from '@/shared/ui/dropdown';

import DateInputHeader from './date-input-header.ui';

import './date-input.style.css';

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
  return (
    <Dropdown targetRef={targetRef} ref={ref} position="bottomRight">
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
    </Dropdown>
  );
};

export default DateInputDropdown;
