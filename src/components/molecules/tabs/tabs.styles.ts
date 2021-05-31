import styled from 'styled-components';

import { TabProps } from './tabs.types';

import {
  deviceQueries,
  h5Mixin,
  h6Mixin,
  body3Mixin,
  getPropFromColors,
  getPropFromDimensions
} from '../../../styles';

export const TabsContainer = styled.div`
  max-width: ${({ theme }) =>
    `${getPropFromDimensions('tabs', 'maxWidth')({ theme })}px`};
`;

export const TabsListContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  ${h5Mixin}
  ${({ theme }) => ({
    margin: getPropFromDimensions('tabs', 'mobile', 'tabsList')({ theme })
      .margin
  })};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    &:not(:last-child) {
      ${({ theme }) => ({
        marginRight: `${
          getPropFromDimensions('tabs', 'mobile', 'tabsList')({ theme }).gap
        }px`
      })};
    }
  }

  @media screen and (${deviceQueries.mobileL.min}) {
    & > * {
      &:not(:last-child) {
        ${({ theme }) => ({
          marginRight: `${
            getPropFromDimensions('tabs', 'desktop', 'tabsList')({ theme }).gap
          }px`
        })};
      }
    }
  }
`;

export const Tab = styled.div<Pick<TabProps, 'isSelected'>>`
  white-space: nowrap;
  cursor: pointer;
  color: ${({ isSelected, theme }) =>
    isSelected
      ? getPropFromColors('tabs', 'selectedText')({ theme })
      : getPropFromColors('tabs', 'primaryText')({ theme })};
`;

export const TabsPanelsContainer = styled.div`
  max-height: ${({ theme }) =>
    `${getPropFromDimensions('tabs', 'maxHeight')({ theme })}px`};
  height: ${({ theme }) => {
    const height = theme.componentLib.dimensions.tabs.height;
    return Boolean(height) ? `${height}px` : 'auto';
  }};
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsPanelContainer = styled.div`
  ${h6Mixin};
  line-break: anywhere;
  color: ${getPropFromColors('tabs', 'primaryText')};
`;

export const SimpleTabsPanelItem = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & > * {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const SimpleTabsPanelItemTitle = styled.span``;

export const SimpleTabsPanelItemSubTitle = styled.span`
  ${body3Mixin};
  color: ${getPropFromColors('tabs', 'secondaryText')};
`;

export const SimpleTabsPanelItemSubIconsContainer = styled.span`
  display: flex;

  & > img {
    height: 20px;
  }

  & > * {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
