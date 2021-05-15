import styled from 'styled-components';

import { getPropFromColors } from '../../../styles';

export const Container = styled.svg`
  fill: ${getPropFromColors('sunIcon', 'color')};

  & > * {
    stroke: ${getPropFromColors('sunIcon', 'color')};
    fill: ${getPropFromColors('sunIcon', 'color')};
  }
`;
