'use client';
import clsx from 'clsx';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';

import { Dropdown } from '../../Dropdown';
import { IconChevronDown } from '../../icons';
import getSelectBoxLabel from '../lib/getSelectBoxLabel';
import isSelectItemElement from '../lib/isSelectItemElement';
import { SelectRootProps } from '../model/types';

const SelectRoot: React.FC<SelectRootProps> = ({
  name,
  value,
  placeholder,
  children,
  onChangeValue,
}) => {
  const [open, setOpen] = useState(false);
  const label = getSelectBoxLabel(children, value);
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
        <Dropdown targetRef={buttonRef}>
          <div className="mt-0.5 rounded border border-zinc-300 bg-white px-2 py-1 shadow-md">
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
          </div>
        </Dropdown>
      )}
    </>
  );
};

export default SelectRoot;
