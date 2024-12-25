import SelectItem from './select-item.ui';
import SelectRoot from './select-root.ui';

const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
});

Select.Item = SelectItem;

export { Select };
