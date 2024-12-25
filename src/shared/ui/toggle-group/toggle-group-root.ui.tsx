import { Children, cloneElement } from 'react';

import { isToggleButtonElement } from './toggle-group.lib';
import { ToggleGroupProps } from './toggle-group.type';

const ToggleGroupRoot: React.FC<ToggleGroupProps> = ({
  name,
  type,
  pressed,
  children,
  onChangePressed,
}) => {
  return (
    <div aria-label={name} role="group" dir="ltr">
      {Children.map(children, (child) => {
        if (isToggleButtonElement(child)) {
          if (child.props.value == null) {
            console.warn('토글 그룹의 버튼의 value props가 필요합니다.');
          }
          return cloneElement(child, {
            pressed:
              type === 'single'
                ? child.props.value === pressed
                : child.props.value != null &&
                  pressed?.includes(child.props.value),
            onPressedChange: (isPressed) => {
              if (child.props.value == null) {
                console.warn('토글 버튼의 value props가 없습니다.');
                return;
              }
              if (type === 'single') {
                onChangePressed?.(isPressed ? child.props.value : null);
              }
              if (type === 'multiple') {
                onChangePressed?.(
                  isPressed
                    ? [...(pressed ?? []), child.props.value]
                    : (pressed?.filter(
                        (value) => value !== child.props.value,
                      ) ?? []),
                );
              }
            },
          });
        }
        return child;
      })}
    </div>
  );
};

export default ToggleGroupRoot;
