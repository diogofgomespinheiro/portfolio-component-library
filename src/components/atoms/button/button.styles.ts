import styled from 'styled-components';

import { theme } from './button.theme';
import { ButtonAppearances } from './button.types';

const getButtonStyle = (key: string) => ({
  appearance
}: StyledButtonProps): string => {
  return theme.colors[appearance][key];
};

type StyledButtonProps = { appearance: ButtonAppearances };
export const Button = styled.button<StyledButtonProps>`
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
`;