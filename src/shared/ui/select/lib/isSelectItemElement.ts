import { isValidElement } from 'react';

import { SelectItemProps } from '../model/types';
import SelectItem from '../ui/SelectItem';

const isSelectItemElement = (
  element: React.ReactNode,
): element is React.ReactElement<SelectItemProps> => {
  return isValidElement(element) && element.type === SelectItem;
};

export default isSelectItemElement;
