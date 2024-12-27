import { BoxOffset, DropdownBoxPosition } from '../model/types';

function getBoxOffset(
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

export default getBoxOffset;
