import { ToggleButtonProps } from './toggle-group.type';

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  pressed,
  onPressedChange,
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        onPressedChange?.(!pressed);
      }}
    >
      {children}
      {pressed && '✔️'}
    </button>
  );
};

export default ToggleButton;
