import { createPortal } from 'react-dom';

type SelectDropdownProps = {
  open: boolean;
  children: React.ReactNode;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({ open, children }) => {
  if (!open) {
    return null;
  }

  return createPortal(<div>{children}</div>, document.body);
};

export default SelectDropdown;
