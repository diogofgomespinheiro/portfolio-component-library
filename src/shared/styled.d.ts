import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    pallete: {
      button: {
        text: string;
        background: string;
        backgroundDisabled: string;
        backgroundHover: string;
        backgroundActive: string;
      };
    };
  }
}
