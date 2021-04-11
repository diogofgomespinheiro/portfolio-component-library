import * as React from 'react';

import { LogoIconProps } from './logo-icon.types';

import * as S from './logo-icon.styles';

const LogoIcon = ({ appearance = 'dark', ...otherProps }: LogoIconProps) => {
  const isDark = appearance === 'dark';

  return (
    <S.Container
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M0 40V20H11.6583C22.7806 20 22.7806 40 11.6583 40H0Z"
        fill="#DE9D7B"
      />
      <path
        d="M10 30V10H21.6583C32.7806 10 32.7806 30 21.6583 30H10Z"
        fill={isDark ? '#100E17' : '#FAFBFF'}
        stroke={isDark ? '#100E17' : '#FAFBFF'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20V0H31.6583C42.7806 0 42.7806 20 31.6583 20H20Z"
        fill="#DE9D7B"
      />
    </S.Container>
  );
};

export { LogoIcon };
