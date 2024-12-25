import { useState } from 'react';

import { isValidDate } from '@/shared/lib/dateUtil.lib';
import { ToggleGroup } from '@/shared/ui/toggle-group';

type PeriodFilterProps = {
  selectedPeriod: string | null;
  // customDate?: string;
  onChangePeriod: (
    period: string | null,
    // data?: { customDate: string },
  ) => void;
};

const periodFilterOptions = [
  { label: 'Today' },
  { label: 'Yesterday' },
  { label: '7D' },
  { label: '30D' },
  { label: '3M' },
  { label: '6M' },
  { label: '12M' },
  { label: 'Custom' },
];

const PeriodFilter: React.FC<PeriodFilterProps> = ({
  selectedPeriod,
  onChangePeriod,
}) => {
  const [showCustomDateInput, setShowCustomDateInput] = useState(false);
  const isCustomPeriodSelected =
    selectedPeriod != null && isValidDate(selectedPeriod);
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
          <ToggleGroup.Item key={option.label} value={option.label}>
            {option.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup>
      {showCustomDateInput && (
        <div>
          <input
            type="date"
            value={isCustomPeriodSelected ? selectedPeriod : ''}
            onChange={(event) => {
              onChangePeriod(event.target.value || null);
              setShowCustomDateInput(false);
            }}
          />
        </div>
      )}
    </>
  );
};

export default PeriodFilter;
