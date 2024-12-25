import { IconCheck } from '../icons';
import { SelectItemProps } from './select.type';

export const SelectItem: React.FC<SelectItemProps> = ({
  value,
  selected,
  children,
  onSelect,
}) => {
  return (
    <div
      role="option"
      onClick={onSelect}
      className="flex h-7 min-w-32 cursor-pointer items-center justify-between rounded-sm px-2 text-sm text-gray-700 hover:bg-zinc-100 "
      aria-selected={selected}
      tabIndex={0}
    >
      <span className={selected ? 'font-semibold' : 'font-medium'}>
        {children ?? value}
      </span>
      {selected && (
        <span aria-hidden="true">
          <IconCheck />
        </span>
      )}
    </div>
  );
};

export default SelectItem;
