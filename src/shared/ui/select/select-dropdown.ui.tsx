import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { SelectDropdownProps } from './select.type';

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  targetRef,
  children,
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (targetRef?.current) {
      const targetElement = targetRef.current;
      const rect = targetElement.getBoundingClientRect();

      setPosition({
        top: rect.bottom,
        left: rect.left,
      });
    }
  }, [targetRef]);

  return createPortal(
    <div
      className="fixed mt-0.5 rounded border border-zinc-300 bg-white px-2 py-1 shadow-md"
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </div>,
    document.body,
  );
};

export default SelectDropdown;
