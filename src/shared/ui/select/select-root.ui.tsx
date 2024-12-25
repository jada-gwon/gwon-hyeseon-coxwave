'use client';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';

import SelectDropdown from './select-dropdown.ui';
import { isSelectItem } from './select.lib';
import { SelectRootProps } from './select.type';

const SelectRoot: React.FC<SelectRootProps> = ({
  name,
  value,
  placeholder,
  children,
  onChangeValue,
}) => {
  const [open, setOpen] = useState(false);
  const label = getLabel(children, value);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toggleOpen = () => setOpen((v) => !v);

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    };

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      <button aria-label={name} onClick={toggleOpen} ref={buttonRef}>
        {label ?? placeholder}
      </button>
      <SelectDropdown open={open}>
        {Children.map(children, (child) => {
          if (isSelectItem(child)) {
            return cloneElement(child, {
              selected: child.props.value === value,
              onSelect: () => {
                onChangeValue(child.props.value);
                setOpen(false);
              },
            });
          }
          return child;
        })}
      </SelectDropdown>
    </>
  );
};

const getLabel = (
  children: React.ReactNode,
  value: string | null | undefined,
) => {
  if (value == null) {
    return null;
  }
  const selectedChild = Children.toArray(children).find(
    (child) => isSelectItem(child) && child.props.value === value,
  );
  return isSelectItem(selectedChild) ? selectedChild.props.children : value;
};

export default SelectRoot;
