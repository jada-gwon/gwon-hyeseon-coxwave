import { isValidElement } from 'react';

import SelectItem from './select-item.ui';
import { SelectItemProps } from './select.type';

export const isSelectItemElement = (
  element: React.ReactNode,
): element is React.ReactElement<SelectItemProps> => {
  return isValidElement(element) && element.type === SelectItem;
};
