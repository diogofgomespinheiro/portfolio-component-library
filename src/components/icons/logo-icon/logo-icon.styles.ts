import styled from 'styled-components';

import { getPropFromColors } from '../../../styles';

export const Container = styled.svg`
  height: 20px;
  width: 20px;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const PrimaryPath = styled.path`
  fill: ${getPropFromColors('logo', 'primary')};
`;
export const SecondaryPath = styled.path`
  fill: ${getPropFromColors('logo', 'secondary')};
  stroke: ${getPropFromColors('logo', 'secondary')};
`;
