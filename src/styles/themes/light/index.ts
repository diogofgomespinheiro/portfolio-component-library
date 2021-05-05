import { DefaultTheme } from 'styled-components';

import { colors } from './colors';
import { dimensions, text } from '../shared';

export const lightTheme: DefaultTheme = {
  name: 'Light',
  componentLib: {
    colors,
    dimensions,
    text
  }
};
