import { DefaultTheme } from 'styled-components';

import { colors } from './colors';
import { dimensions, text } from '../shared';

export const darkTheme: DefaultTheme = {
  name: 'Dark',
  componentLib: {
    colors,
    dimensions,
    text
  }
};
