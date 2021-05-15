import * as React from 'react';

import * as S from './moon-icon.styles';

const MoonIcon = () => {
  return (
    <S.Container
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M5.879 15.03a9.15 9.15 0 009.15-9.151c0-2.24-.807-4.288-2.142-5.879 4.125 1.325 7.112 5.189 7.112 9.754C20 15.413 15.412 20 9.753 20 5.188 20 1.324 17.012 0 12.887a9.11 9.11 0 005.879 2.143z"></path>
    </S.Container>
  );
};

export { MoonIcon };
