import * as React from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';

import { Colors, Dimensions, Text } from './shared';

export type CustomLibraryTheme = {
  colors: Colors;
  dimensions: Dimensions;
  text: Text;
};

export type PersonalLibraryTheme = {
  name: string;
  componentLib: CustomLibraryTheme;
};

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
