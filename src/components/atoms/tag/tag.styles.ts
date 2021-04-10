import styled, { css } from 'styled-components';

import { theme } from './tag.theme';
import { TagProps, TagDimensionsProps, TagColorsProps } from './tag.types';

const getTagColorPropValue = (prop: keyof TagColorsProps) => ({
  appearance = 'dark'
}: TagProps): string => {
  return theme.colors[appearance][prop];
};

const getTagDimensionPropValue = (prop: keyof TagDimensionsProps) => ({
  customDimensions = {},
  dimension = 'md'
}: TagProps): number => {
  return customDimensions[prop] || theme.dimensions[dimension][prop];
};

export const Tag = styled.button<TagProps>`
  box-sizing: border-box;
  padding: ${getTagDimensionPropValue('paddingY')}px
    ${getTagDimensionPropValue('paddingX')}px;

  outline: none;
  border: ${({ showBorder }) =>
    showBorder
      ? `2px solid ${getTagColorPropValue('border')({})}`
      : '2px solid transparent'};
  border-radius: ${getTagDimensionPropValue('borderRadius')}px;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  text-decoration: none;

  background-color: ${getTagColorPropValue('background')};
  color: ${getTagColorPropValue('text')};

  ${({ showAnimation }) => {
    return (
      showAnimation &&
      css`
        transition: all 0.4s ease-in-out;

        &:hover {
          background-color: ${getTagColorPropValue('backgroundHover')};
          border: 2px solid ${getTagColorPropValue('border')};
        }

        &:active {
          background-color: ${getTagColorPropValue('backgroundActive')};
          border: 2px solid ${getTagColorPropValue('border')};
        }
      `
    );
  }}

  cursor: pointer;
`;
