import { DefaultTheme } from 'styled-components';
const defaultTheme: DefaultTheme = {} as DefaultTheme;

export const getPropFromColors = <
  C extends keyof typeof defaultTheme.colors,
  P extends keyof typeof defaultTheme.colors[C]
>(
  component: C,
  colorProp: P
) => ({ theme }: { theme: DefaultTheme }): typeof defaultTheme.colors[C][P] => {
  return theme.colors[component][colorProp];
};

export const getPropFromDimensions = <
  C extends keyof typeof defaultTheme.dimensions,
  S extends keyof typeof defaultTheme.dimensions[C],
  P extends keyof typeof defaultTheme.dimensions[C][S]
>(
  component: C,
  size: S,
  dimensionProp: P
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof defaultTheme.dimensions[C][S][P] => {
  return theme.dimensions[component][size][dimensionProp];
};
