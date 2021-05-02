import { DefaultTheme } from 'styled-components';
const defaultTheme: DefaultTheme = {} as DefaultTheme;

export const getPropFromPallete = <
  KOutter extends keyof typeof defaultTheme.pallete,
  KInner extends keyof typeof defaultTheme.pallete[KOutter]
>(
  component: KOutter,
  palleteProp: KInner
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof defaultTheme.pallete[KOutter][KInner] => {
  return theme.pallete[component][palleteProp];
};
