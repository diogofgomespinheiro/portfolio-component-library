import { DefaultTheme } from 'styled-components';
const defaultTheme: DefaultTheme = {} as DefaultTheme;

export const getPropFromColors = <
  KOutter extends keyof typeof defaultTheme.colors,
  KInner extends keyof typeof defaultTheme.colors[KOutter]
>(
  component: KOutter,
  colorProp: KInner
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof defaultTheme.colors[KOutter][KInner] => {
  return theme.colors[component][colorProp];
};

export const getPropFromDimensions = <
  KOutter extends keyof typeof defaultTheme.dimensions,
  KInner extends keyof typeof defaultTheme.dimensions[KOutter]
>(
  component: KOutter,
  colorProp: KInner
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof defaultTheme.dimensions[KOutter][KInner] => {
  return theme.dimensions[component][colorProp];
};
