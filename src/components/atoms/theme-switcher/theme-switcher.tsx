import * as React from 'react';
import { callAll } from '../../../utils';

import { ThemeSwitcherProps } from './theme-switcher.types';

import { MoonIcon, SunIcon } from '../../icons';
import * as S from './theme-switcher.styles';

const ThemeSwitcher = ({
  onClick,
  initialState = true
}: ThemeSwitcherProps): React.ReactElement => {
  const [isDark, setIsDark] = React.useState(initialState);

  return (
    <S.Container
      onClick={callAll(onClick, () => setIsDark(prevState => !prevState))}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </S.Container>
  );
};

export { ThemeSwitcher };
