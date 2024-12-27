import { isValidElement } from 'react';

import { ToggleButtonProps } from '../model/types';
import ToggleButton from '../ui/ToggleButton';

const isToggleButtonElement = (
  element: React.ReactNode,
): element is React.ReactElement<ToggleButtonProps> => {
  return isValidElement(element) && element.type === ToggleButton;
};

export default isToggleButtonElement;
