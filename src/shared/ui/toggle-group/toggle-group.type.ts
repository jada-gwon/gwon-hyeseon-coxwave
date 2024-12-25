export type BaseToggleGroupProps = {
  name: string;
  type: 'single' | 'multiple';
  children?: React.ReactNode;
};

export type SingleToggleGroupProps = BaseToggleGroupProps & {
  type: 'single';
  pressed?: string | null | undefined;
  onChangePressed?: (value: string | null) => void;
};

export type MultiToggleGroupProps = BaseToggleGroupProps & {
  type: 'multiple';
  pressed?: string[];
  onChangePressed?: (value: string[]) => void;
};

export type ToggleGroupProps = SingleToggleGroupProps | MultiToggleGroupProps;

export type ToggleButtonProps = {
  value?: string;
  pressed?: boolean;
  children?: React.ReactNode;
  onPressedChange?: (isPressed: boolean) => void;
};
