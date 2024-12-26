import clsx from 'clsx';

import { ToggleButtonProps } from './toggle-group.type';

const ToggleButton: React.FC<ToggleButtonProps> = ({
  ref,
  children,
  pressed,
  onPressedChange,
}) => {
  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        '-mr-px h-8 cursor-pointer border border-zinc-300 px-2 text-sm font-medium first:rounded-l last:rounded-r',
        pressed ? 'text-gray-900' : 'text-gray-500',
        { 'bg-zinc-100 shadow-inner shadow-black/10': pressed },
      )}
      onClick={() => {
        onPressedChange?.(!pressed);
      }}
      role="checkbox"
      aria-checked={pressed}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
