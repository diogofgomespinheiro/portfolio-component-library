export type ButtonAppearances = 'lightOrange' | 'darkOrange';

export type ButtonProps = {
  elementType?: 'a' | 'button';
  appearance?: ButtonAppearances;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonTheme = {
  colors: Record<ButtonAppearances, Record<string, string>>;
};
