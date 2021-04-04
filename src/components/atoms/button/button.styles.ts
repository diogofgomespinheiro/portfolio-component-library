import styled from 'styled-components';
import { theme } from './button.theme';

export const Button = styled.button`
  padding: 8px 16px;

  border: none;
  border-radius: 8px;
  outline: none;

  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;

  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  transition: background-color 0.3s ease;

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.backgroundHover};
  }

  &:active {
    background-color: ${theme.colors.backgroundActive};
  }

  &:disabled {
    background-color: ${theme.colors.backgroundDisabled};
  }
`;
