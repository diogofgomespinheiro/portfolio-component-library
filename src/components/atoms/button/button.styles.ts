import styled from 'styled-components';

import { getPropFromPallete } from '../../../shared/utils';

type StyledButtonProps = {
  showShadow?: boolean;
};

export const Button = styled.button<StyledButtonProps>`
  box-sizing: inherit;
  padding: 8px 16px;

  border: none;
  border-radius: 8px;
  outline: none;

  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;

  color: ${getPropFromPallete('button', 'text')};
  background-color: ${getPropFromPallete('button', 'background')};
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    background-color: ${getPropFromPallete('button', 'backgroundHover')};
  }

  &:active {
    background-color: ${getPropFromPallete('button', 'backgroundActive')};
  }

  &:disabled {
    background-color: ${getPropFromPallete('button', 'backgroundDisabled')};
  }

  ${({ showShadow }) =>
    showShadow && {
      boxShadow:
        '1px 2px 4px rgba(61, 64, 91, 0.15), inset 2px 2px 4px rgba(250, 251, 255, 0.5);'
    }}
`;
