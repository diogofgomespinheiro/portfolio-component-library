import { DefaultTheme } from 'styled-components';
const defaultTheme: DefaultTheme = {} as DefaultTheme;

export const getPropFromColors = <
  C extends keyof typeof defaultTheme.componentLib.colors,
  P extends keyof typeof defaultTheme.componentLib.colors[C]
>(
  component: C,
  colorProp: P
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof defaultTheme.componentLib.colors[C][P] => {
  return theme.componentLib.colors[component][colorProp];
};

export const getPropFromDimensions = <
  C extends keyof typeof defaultTheme.componentLib.dimensions,
  S extends keyof typeof defaultTheme.componentLib.dimensions[C],
  P extends keyof typeof defaultTheme.componentLib.dimensions[C][S]
>(
  component: C,
  size: S,
  dimensionProp: P
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof defaultTheme.componentLib.dimensions[C][S][P] => {
  return theme.componentLib.dimensions[component][size][dimensionProp];
};
