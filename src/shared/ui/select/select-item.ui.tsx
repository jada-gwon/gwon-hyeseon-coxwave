import { SelectItemProps } from './select.type';

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

export default SelectItem;
