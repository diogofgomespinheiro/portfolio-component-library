import { css } from 'styled-components';
import { text } from './text';

import { deviceQueries } from '../../utils';

const { font, size, weight } = text;

export const h1Mixin = css`
  font-size: ${size.heading.mobile.h1}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.heading.desktop.h1}rem;
  }
`;

export const h2Mixin = css`
  font-size: ${size.heading.mobile.h2}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.heading.desktop.h2}rem;
  }
`;

export const h3Mixin = css`
  font-size: ${size.heading.mobile.h3}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.heading.desktop.h3}rem;
  }
`;

export const h4Mixin = css`
  font-size: ${size.heading.mobile.h4}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.heading.desktop.h4}rem;
  }
`;

export const h5Mixin = css`
  font-size: ${size.heading.mobile.h5}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.heading.desktop.h5}rem;
  }
`;

export const h6Mixin = css`
  font-size: ${size.heading.mobile.h6}rem;
  font-weight: ${weight.semiBold};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.heading.desktop.h6}rem;
  }
`;

export const body1Mixin = css`
  font-size: ${size.body.mobile.body1}rem;
  font-weight: ${weight.regular};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.body.mobile.body1}rem;
  }
`;

export const body2Mixin = css`
  font-size: ${size.body.mobile.body2}rem;
  font-weight: ${weight.regular};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.body.desktop.body2}rem;
  }
`;

export const body3Mixin = css`
  font-size: ${size.body.mobile.body3}rem;
  font-weight: ${weight.medium};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.body.desktop.body3}rem;
  }
`;

export const body4Mixin = css`
  font-size: ${size.body.mobile.body4}rem;
  font-weight: ${weight.medium};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.body.desktop.body4}rem;
  }
`;

export const body5Mixin = css`
  font-size: ${size.body.mobile.body5}rem;
  font-weight: ${weight.regular};

  @media screen and (${deviceQueries.mobileL.min}) {
    font-size: ${size.body.desktop.body5}rem;
  }
`;

export const typography = css`
  h1 {
    ${h1Mixin};
  }

  h2 {
    ${h2Mixin};
  }

  h3 {
    ${h3Mixin};
  }

  h4 {
    ${h4Mixin};
  }

  h5 {
    ${h5Mixin};
  }

  h6 {
    ${h6Mixin};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
