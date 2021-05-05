import * as React from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

import { Colors, Dimensions, Text } from './shared';

export interface PersonalLibraryTheme {
  name: string;
  colors: Colors;
  dimensions: Dimensions;
  text: Text;
}

export namespace PersonalLibraryThemeProvider {
  export interface Props {
    theme: PersonalLibraryTheme;
  }
}

export const ThemeProvider: React.FC<PersonalLibraryThemeProvider.Props> = ({
  theme,
  children
}) => {
  return <ScThemeProvider theme={theme}>{children}</ScThemeProvider>;
};
