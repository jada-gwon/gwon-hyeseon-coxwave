import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type DropdownBoxPosition = 'bottomLeft' | 'bottomRight';

type DropdownTargetOffset = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

type DateInputDropdownProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  position?: DropdownBoxPosition;
  ref?: React.RefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
};

const Dropdown: React.FC<DateInputDropdownProps> = ({
  targetRef,
  position = 'bottomLeft',
  ref,
  children,
}) => {
  const [targetOffset, setTargetOffset] = useState<DropdownTargetOffset>({});

  useLayoutEffect(() => {
    if (targetRef?.current) {
      const targetElement = targetRef.current;
      const { top, right, bottom, left } =
        targetElement.getBoundingClientRect();

      setTargetOffset({ top, right, bottom, left });
    }
  }, [targetRef]);

  const getDropdownBoxPosition = () => {
    switch (position) {
      case 'bottomRight':
        return {
          top: targetOffset.bottom,
          left: targetOffset.right,
        };

      case 'bottomLeft':
      default:
        return {
          top: targetOffset.bottom,
          left: targetOffset.left,
        };
    }
  };

  const getDropdownBoxClassName = () => {
    switch (position) {
      case 'bottomRight':
        return '-translate-x-full';
      case 'bottomLeft':
        return '';
    }
  };

  return createPortal(
    <div
      className={clsx('fixed', getDropdownBoxClassName())}
      style={getDropdownBoxPosition()}
      ref={ref}
    >
      {children}
    </div>,
    document.body,
  );
};

export default Dropdown;
