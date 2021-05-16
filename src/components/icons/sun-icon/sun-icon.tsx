import * as React from 'react';

import * as S from './sun-icon.styles';

const SunIcon = () => {
  return (
    <S.Container
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10.884" cy="10.9" r="5.9" strokeWidth="0.079"></circle>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M10.81 1.313L10.843 3.847"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M10.888 17.945L10.921 20.479"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M1.301 10.583L3.836 10.583"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M17.928 10.6L20.463 10.6"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M3.74 17.325L5.467 15.471"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M15.834 5.914L17.561 4.06"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M4.142 4.071L6.074 5.711"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.634"
        d="M16.1 15.623L18.032 17.263"
      ></path>
    </S.Container>
  );
};

export { SunIcon };
