import styled from 'styled-components';

import { theme } from './button.theme';
import { ButtonAppearances, ButtonColorsProps } from './button.types';

const getButtonStyle = (key: keyof ButtonColorsProps) => ({
  appearance,
  customColors
}: StyledButtonProps): string => {
  return customColors?.[key] || theme.colors[appearance][key];
};

type StyledButtonProps = {
  appearance: ButtonAppearances;
  customColors?: ButtonColorsProps;
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

  color: ${getButtonStyle('text')};
  background-color: ${getButtonStyle('background')};
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    background-color: ${getButtonStyle('backgroundHover')};
  }

  &:active {
    background-color: ${getButtonStyle('backgroundActive')};
  }

  &:disabled {
    background-color: ${getButtonStyle('backgroundDisabled')};
  }

  ${({ showShadow }) =>
    showShadow && {
      boxShadow:
        '1px 2px 4px rgba(61, 64, 91, 0.15), inset 2px 2px 4px rgba(250, 251, 255, 0.5);'
    }}
`;
