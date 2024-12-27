import { Children } from 'react';

import isSelectItemElement from './isSelectItemElement';

const getSelectBoxLabel = (
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

export default getSelectBoxLabel;
