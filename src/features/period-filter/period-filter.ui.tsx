import { useRef, useState, useEffect } from 'react';

import { dateUtils } from '@/shared/lib';
import { ToggleGroup } from '@/shared/ui';

import DateInputDropdown from './date-input-dropdown.ui';

type PeriodFilterProps = {
  selectedPeriod: string | null;
  onChangePeriod: (period: string | null) => void;
};

const periodFilterOptions = [
  'Today',
  'Yesterday',
  '7D',
  '30D',
  '3M',
  '6M',
  '12M',
];

const PeriodFilter: React.FC<PeriodFilterProps> = ({
  selectedPeriod,
  onChangePeriod,
}) => {
  const [showCustomDateInput, setShowCustomDateInput] = useState(false);
  const isCustomPeriodSelected = dateUtils.isValidDate(selectedPeriod ?? '');
  const customButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        onChangePressed={(pressed) => {
          if (
            // Custom 버튼을 누른경우 날짜 입력창 표시 토글
            pressed === 'Custom' ||
            // 현재 특정 날짜를 선택했는데, 다시 Custom 버튼을 누른 경우 날짜 입력창 표시 토글
            (isCustomPeriodSelected && pressed == null)
          ) {
            setShowCustomDateInput((prev) => !prev);
          } else {
            setShowCustomDateInput(false);
            onChangePeriod(pressed);
          }
        }}
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
          onChangeValue={(value) => {
            onChangePeriod(value ? dateUtils.formatDate(value) : null);
            setShowCustomDateInput(false);
          }}
        />
      )}
    </>
  );
};

export default PeriodFilter;
