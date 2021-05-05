import 'styled-components';

import { PersonalLibraryTheme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends PersonalLibraryTheme {}
}
