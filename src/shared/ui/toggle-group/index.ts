import ToggleButton from './toggle-button.ui';
import ToggleGroupRoot from './toggle-group-root.ui';

const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleButton,
});

export { ToggleGroup };
