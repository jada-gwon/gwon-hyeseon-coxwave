'use client';
import clsx from 'clsx';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';

import SelectDropdown from './select-dropdown.ui';
import { isSelectItemElement } from './select.lib';
import { SelectRootProps } from './select.type';
import { IconChevronDown } from '../icons';

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
      <button
        aria-label={name}
        onClick={toggleOpen}
        ref={buttonRef}
        className={clsx(
          'h-8 rounded border border-zinc-300 px-2 text-sm font-semibold',
          value ? 'text-gray-700' : 'text-gray-500',
        )}
      >
        <div className="flex items-center justify-between gap-1">
          <span>{label ?? placeholder}</span>
          <span aria-hidden="true" className="text-gray-500">
            <IconChevronDown />
          </span>
        </div>
      </button>
      {open && (
        <SelectDropdown targetRef={buttonRef}>
          {Children.map(children, (child) => {
            if (isSelectItemElement(child)) {
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
      )}
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
    (child) => isSelectItemElement(child) && child.props.value === value,
  );
  return isSelectItemElement(selectedChild)
    ? selectedChild.props.children
    : value;
};

export default SelectRoot;
