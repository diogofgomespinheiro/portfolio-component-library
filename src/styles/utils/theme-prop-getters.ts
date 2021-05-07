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
  Key extends keyof typeof defaultTheme.componentLib.dimensions,
  InnerKey extends keyof typeof defaultTheme.componentLib.dimensions[Key],
  InnerInnerKey extends keyof typeof defaultTheme.componentLib.dimensions[Key][InnerKey]
>(
  key: Key,
  innerKey: InnerKey,
  innerInnerKey?: InnerInnerKey
) => ({
  theme
}: {
  theme: DefaultTheme;
}): typeof innerInnerKey extends undefined | null
  ? typeof defaultTheme.componentLib.dimensions[Key][InnerKey]
  : typeof defaultTheme.componentLib.dimensions[Key][InnerKey][InnerInnerKey] => {
  const innerKeyValue = theme.componentLib.dimensions[key][innerKey];

  console.log(innerKey);

  return (isPrimitive(innerKeyValue) && !innerInnerKey
    ? innerKeyValue
    : innerKeyValue[innerInnerKey]) as typeof innerInnerKey extends
    | undefined
    | null
    ? typeof defaultTheme.componentLib.dimensions[Key][InnerKey]
    : typeof defaultTheme.componentLib.dimensions[Key][InnerKey][InnerInnerKey];
};

function isPrimitive(value: any): boolean {
  const primitiveValues = ['string', 'boolean', 'number', 'bigint'];
  const valueType = typeof value;

  return primitiveValues.includes(valueType);
}
