export type ButtonAppearances = 'lightOrange' | 'darkOrange';

export type ButtonFlags = {
  hasShadow: boolean;
};

export type ButtonProps = {
  elementType?: 'a' | 'button';
  appearance?: ButtonAppearances;
  customColors?: ButtonColorsProps;
  flags?: ButtonFlags;
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
