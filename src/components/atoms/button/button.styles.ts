import styled from 'styled-components';

import { getPropFromColors } from '../../../styles';

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

  color: ${getPropFromColors('button', 'text')};
  background-color: ${getPropFromColors('button', 'background')};
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    background-color: ${getPropFromColors('button', 'backgroundHover')};
  }

  &:active {
    background-color: ${getPropFromColors('button', 'backgroundActive')};
  }

  &:disabled {
    background-color: ${getPropFromColors('button', 'backgroundDisabled')};
  }

  ${({ showShadow }) =>
    showShadow && {
      boxShadow:
        '1px 2px 4px rgba(61, 64, 91, 0.15), inset 2px 2px 4px rgba(250, 251, 255, 0.5);'
    }}
`;
