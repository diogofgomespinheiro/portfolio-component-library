import styled, { css } from 'styled-components';

import { TagProps } from './tag.types';
import {
  getPropFromColors,
  getPropFromDimensions,
  TagDimensionProps,
  DimensionOptions,
  body3Mixin
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
  border: ${({ showBorder, transparent, theme }) =>
    showBorder || transparent
      ? `2px solid ${getPropFromColors('tag', 'border')({ theme })}`
      : '2px solid transparent'};
  border-radius: ${getTagDimensionPropValue('borderRadius')}px;

  ${body3Mixin};
  line-height: 1rem;
  text-decoration: none;

  background-color: ${({ theme, transparent }) =>
    transparent
      ? 'transparent'
      : getPropFromColors('tag', 'background')({ theme })};
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

  &[disabled],
  &[aria-disabled] {
    cursor: default;
  }
`;
