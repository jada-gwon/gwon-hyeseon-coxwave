import clsx from 'clsx';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { getBoxOffset, getClassName } from './dropdown.lib';
import { DropdownProps, BoxOffset } from './dropdown.type';

const Dropdown: React.FC<DropdownProps> = ({
  targetRef,
  position = 'bottomLeft',
  ref,
  children,
}) => {
  const [targetOffset, setTargetOffset] = useState<BoxOffset>({});

  useLayoutEffect(() => {
    if (targetRef?.current) {
      const targetElement = targetRef.current;
      const { top, right, bottom, left } =
        targetElement.getBoundingClientRect();

      setTargetOffset({ top, right, bottom, left });
    }
  }, [targetRef]);

  return createPortal(
    <div
      className={clsx('fixed', getClassName(position))}
      style={getBoxOffset(position, targetOffset)}
      ref={ref}
    >
      {children}
    </div>,
    document.body,
  );
};

export default Dropdown;
