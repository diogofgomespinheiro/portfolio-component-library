import 'styled-components';
import { Colors, Dimensions, Text } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: Colors;
    dimensions: Dimensions;
    text: Text;
  }
}
