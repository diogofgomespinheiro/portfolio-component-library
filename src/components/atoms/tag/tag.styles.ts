import styled, { css } from 'styled-components';

import { TagProps } from './tag.types';
import {
  getPropFromColors,
  getPropFromDimensions,
  TagDimensionProps,
  DimensionOptions
} from '../../../styles';

const getTagDimensionPropValue = (prop: keyof TagDimensionProps) => ({
  theme,
  dimension = 'md' as DimensionOptions
}): number => {
  return getPropFromDimensions('tag', dimension, prop)({ theme });
};

export const Tag = styled.button<TagProps>`
  box-sizing: border-box;
  padding: ${getTagDimensionPropValue('paddingY')}px
    ${getTagDimensionPropValue('paddingX')}px;

  outline: none;
  border: ${({ showBorder, theme }) =>
    showBorder
      ? `2px solid ${getPropFromColors('tag', 'border')({ theme })}`
      : '2px solid transparent'};
  border-radius: ${getTagDimensionPropValue('borderRadius')}px;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  text-decoration: none;

  background-color: ${getPropFromColors('tag', 'background')};
  color: ${getPropFromColors('tag', 'text')};

  ${({ showAnimation }) => {
    return (
      showAnimation &&
      css`
        transition: all 0.4s ease-in-out;

        &:hover {
          background-color: ${getPropFromColors('tag', 'backgroundHover')};
          border: 2px solid ${getPropFromColors('tag', 'border')};
        }

        &:active {
          background-color: ${getPropFromColors('tag', 'backgroundActive')};
          border: 2px solid ${getPropFromColors('tag', 'border')};
        }
      `
    );
  }}

  cursor: pointer;
`;
