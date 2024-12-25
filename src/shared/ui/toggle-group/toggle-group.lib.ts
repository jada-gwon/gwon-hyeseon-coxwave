import { isValidElement } from 'react';

import ToggleButton from './toggle-button.ui';
import { ToggleButtonProps } from './toggle-group.type';

export const isToggleButtonElement = (
  element: React.ReactNode,
): element is React.ReactElement<ToggleButtonProps> => {
  return isValidElement(element) && element.type === ToggleButton;
};
