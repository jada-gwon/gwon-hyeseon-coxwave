import { DropdownBoxPosition } from '../model/types';

function getClassName(position: DropdownBoxPosition): string {
  switch (position) {
    case 'bottomRight':
      return '-translate-x-full';
    case 'bottomLeft':
      return '';
  }
}

export default getClassName;
