export type SelectDropdownProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
};

export type SelectItemProps = {
  value: string;
  selected?: boolean;
  children?: React.ReactNode;
  onSelect?: () => void;
};

export type SelectRootProps = {
  name: string;
  placeholder: string;
  value?: string | null | undefined;
  children?: React.ReactNode;
  onChangeValue: (value: string) => void;
};
