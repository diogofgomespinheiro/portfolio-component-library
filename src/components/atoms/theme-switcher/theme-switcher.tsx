import * as React from 'react';
import { callAll } from '../../../utils';

import { ThemeSwitcherProps } from './theme-switcher.types';

import { MoonIcon, SunIcon } from '../../icons';
import * as S from './theme-switcher.styles';

const ThemeSwitcher = ({
  onClick,
  initialState = true,
  controlledState
}: ThemeSwitcherProps): React.ReactElement => {
  const [isDark, setIsDark] =
    typeof controlledState === 'undefined'
      ? React.useState(initialState)
      : [controlledState];

  const handleThemeSwitch = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    if (typeof controlledState !== 'undefined') return;

    setIsDark(prevState => !prevState);
  };

  return (
    <S.Container onClick={callAll(onClick, handleThemeSwitch)}>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </S.Container>
  );
};

export { ThemeSwitcher };
