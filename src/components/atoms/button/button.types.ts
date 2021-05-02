export type ButtonAppearances = 'lightOrange' | 'darkOrange';

export type ButtonProps = {
  elementType?: 'a' | 'button';
  showShadow?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
