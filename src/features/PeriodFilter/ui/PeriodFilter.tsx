import { useRef, useState, useEffect } from 'react';

import { dateUtils } from '@/shared/lib';
import { ToggleGroup } from '@/shared/ui';

import { periodFilterOptions } from '../config';
import { PeriodFilterProps } from '../model/types';

import DateInputDropdown from './DateInputDropdown';

const PeriodFilter: React.FC<PeriodFilterProps> = ({
  defaultSelected = null,
  // onChangePeriod,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState(defaultSelected);
  const [showCustomDateInput, setShowCustomDateInput] = useState(false);
  const isCustomPeriodSelected = dateUtils.isValidDate(selectedPeriod ?? '');
  const customButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChangeSelected = (value: string | null) => {
    if (
      // Custom 버튼을 누른경우 날짜 입력창 표시 토글
      value === 'Custom' ||
      // 현재 특정 날짜를 선택했는데, 다시 Custom 버튼을 누른 경우 날짜 입력창 표시 토글
      (isCustomPeriodSelected && value == null)
    ) {
      setShowCustomDateInput((prev) => !prev);
    } else {
      setShowCustomDateInput(false);
      setSelectedPeriod(value);
    }
  };

  const onChangeCustomDate = (value: Date | null) => {
    setSelectedPeriod(value ? dateUtils.formatDate(value) : null);
    setShowCustomDateInput(false);
  };

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (
        dropdownRef.current?.contains(event.target as Node) ||
        customButtonRef.current?.contains(event.target as Node)
      ) {
        return;
      }
      setShowCustomDateInput(false);
    };

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      <ToggleGroup
        name="조회 기간"
        type="single"
        pressed={isCustomPeriodSelected ? 'Custom' : selectedPeriod}
        onChangePressed={onChangeSelected}
      >
        {periodFilterOptions.map((option) => (
          <ToggleGroup.Item key={option} value={option}>
            {option}
          </ToggleGroup.Item>
        ))}
        <ToggleGroup.Item value="Custom" ref={customButtonRef}>
          Custom
        </ToggleGroup.Item>
      </ToggleGroup>
      {showCustomDateInput && (
        <DateInputDropdown
          value={dateUtils.parseDateString(selectedPeriod ?? '')}
          targetRef={customButtonRef}
          ref={dropdownRef}
          onChangeValue={onChangeCustomDate}
        />
      )}
    </>
  );
};

export default PeriodFilter;