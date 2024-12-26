export type DropdownBoxPosition = 'bottomLeft' | 'bottomRight';

export type BoxOffset = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type DropdownProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  position?: DropdownBoxPosition;
  ref?: React.RefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
};
