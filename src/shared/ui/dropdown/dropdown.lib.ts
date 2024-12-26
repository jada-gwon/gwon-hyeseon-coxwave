import { BoxOffset, DropdownBoxPosition } from './dropdown.type';

export function getBoxOffset(
  position: DropdownBoxPosition,
  targetOffset: BoxOffset,
): BoxOffset {
  switch (position) {
    case 'bottomRight':
      return {
        top: targetOffset.bottom,
        left: targetOffset.right,
      };

    case 'bottomLeft':
    default:
      return {
        top: targetOffset.bottom,
        left: targetOffset.left,
      };
  }
}

export function getClassName(position: DropdownBoxPosition): string {
  switch (position) {
    case 'bottomRight':
      return '-translate-x-full';
    case 'bottomLeft':
      return '';
  }
}
