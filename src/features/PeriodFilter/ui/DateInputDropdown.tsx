import DatePicker from 'react-datepicker';

import { Dropdown } from '@/shared/ui';

import { DateInputDropdownProps } from '../model/types';

import DateInputHeader from './DateInputHeader';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

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
