import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { periodFilterOptions } from '../config';

export type PeriodFilterOption = (typeof periodFilterOptions)[number];

export type PeriodFilterProps = {
  selectedOption: string | null;
  onChangeOption: (period: string | null) => void;
};

export type DateInputDropdownProps = {
  value: Date | null;
  targetRef: React.RefObject<HTMLElement | null>;
  ref?: React.RefObject<HTMLDivElement | null>;
  onChangeValue: (value: Date | null) => void;
};

export type DateInputHeaderProps = ReactDatePickerCustomHeaderProps & {
  hasValue: boolean;
  clearDate: () => void;
};

export const isPeriodFilterOption = (
  value: string,
): value is PeriodFilterOption =>
  (periodFilterOptions as readonly string[]).includes(value);
