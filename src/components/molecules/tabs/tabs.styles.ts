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
  ${({ theme }) => ({
    gap: `${
      getPropFromDimensions('tabs', 'mobile', 'tabsList')({ theme }).gap
    }px`
  })};
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

  @media screen and (${deviceQueries.mobileL.min}) {
    ${({ theme }) => ({
      gap: `${
        getPropFromDimensions('tabs', 'desktop', 'tabsList')({ theme }).gap
      }px`
    })};
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
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* ::-webkit-scrollbar {
    width: 3px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #cecece;
  }
  */
`;

export const TabsPanelContainer = styled.div`
  ${h6Mixin};
  line-break: anywhere;
  color: ${getPropFromColors('tabs', 'primaryText')};
`;

export const SimpleTabsPanelItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SimpleTabsPanelItemTitle = styled.span``;

export const SimpleTabsPanelItemSubTitle = styled.span`
  ${body3Mixin};
  color: ${getPropFromColors('tabs', 'secondaryText')};
`;

export const SimpleTabsPanelItemSubIconsContainer = styled.span`
  display: flex;
  gap: 20px;

  & > img {
    height: 20px;
  }
`;
