import { isValidElement } from 'react';

export type SelectItemProps = {
  value: string;
  selected?: boolean;
  children?: React.ReactNode;
  onSelect?: () => void;
};

export const SelectItem: React.FC<SelectItemProps> = ({
  value,
  selected,
  children,
  onSelect,
}) => {
  return (
    <div role="button" onClick={onSelect}>
      <span>{children ?? value}</span>
      {selected && <span aria-label="선택됨">✔</span>}
    </div>
  );
};

export const isSelectItem = (
  element: React.ReactNode,
): element is React.ReactElement<SelectItemProps> => {
  return isValidElement(element) && element.type === SelectItem;
};

export default SelectItem;
