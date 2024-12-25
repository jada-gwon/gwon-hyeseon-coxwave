import { createPortal } from 'react-dom';

import { SelectDropdownProps } from './select.type';

const SelectDropdown: React.FC<SelectDropdownProps> = ({ open, children }) => {
  if (!open) {
    return null;
  }

  return createPortal(<div>{children}</div>, document.body);
};

export default SelectDropdown;
