export type ButtonProps = {
  elementType?: 'a' | 'button';
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
