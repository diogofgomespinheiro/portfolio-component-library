export type ButtonAppearances = 'lightOrange' | 'darkOrange';

export type ButtonProps = {
  elementType?: 'a' | 'button';
  appearance?: ButtonAppearances;
  customColors?: ButtonColorsProps;
  showShadow?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonColorsProps = {
  text: string;
  background: string;
  backgroundDisabled: string;
  backgroundHover: string;
  backgroundActive: string;
};

export type ButtonTheme = {
  colors: Record<ButtonAppearances, ButtonColorsProps>;
};
