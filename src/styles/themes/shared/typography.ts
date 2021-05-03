import { css } from 'styled-components';
import { text } from './text';

import { deviceQueries } from '../../utils';

const { font, size, weight } = text;

export const h1 = css`
  font-size: ${size.heading.desktop.h1}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.tablet.max}) {
    font-size: ${size.heading.mobile.h1}rem;
  }
`;

export const h2 = css`
  font-size: ${size.heading.desktop.h2}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.tablet.max}) {
    font-size: ${size.heading.mobile.h2}rem;
  }
`;

export const h3 = css`
  font-size: ${size.heading.desktop.h3}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.tablet.max}) {
    font-size: ${size.heading.mobile.h3}rem;
  }
`;

export const h4 = css`
  font-size: ${size.heading.desktop.h4}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.tablet.max}) {
    font-size: ${size.heading.mobile.h4}rem;
  }
`;

export const typography = css`
  h1 {
    ${h1};
  }

  h2 {
    ${h2};
  }

  h3 {
    ${h3};
  }

  h4 {
    ${h4};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${font.heading};
  }

  p,
  span,
  a,
  label,
  div,
  button,
  input,
  textarea,
  select {
    font-family: ${font.body};
  }
`;
