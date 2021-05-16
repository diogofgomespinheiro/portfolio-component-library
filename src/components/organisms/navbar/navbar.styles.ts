import type * as React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { Hamburguer as HamburguerIcon } from '../../icons';
import {
  deviceQueries,
  getPropFromColors,
  h4Mixin,
  h5Mixin
} from '../../../styles';

type NavProps = { position: 'fixed' | 'relative' | 'absolute' };
export const Nav = styled.nav<NavProps>`
  position: ${({ position = 'fixed' }) => position};
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  padding: 26px 20px;
  background: ${getPropFromColors('navbar', 'background')};
  backdrop-filter: ${getPropFromColors('navbar', 'backdropFilter')};
  z-index: 100;

  @media screen and (${deviceQueries.tablet.min}) {
    height: 110px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
`;

export const NavIcon = styled.div``;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 60px;
  flex: 1;
`;

type MenuListItemProps = { isSelected?: boolean };

export const MenuListItem = styled.li<MenuListItemProps>`
  display: flex;
  align-items: center;
  color: ${({ isSelected, theme }) =>
    isSelected
      ? getPropFromColors('navbar', 'hightlightedTextColor')({ theme })
      : getPropFromColors('navbar', 'textColor')({ theme })};
  cursor: pointer;
  transition: color 0.5s ease;

  ${h4Mixin};

  @media screen and (${deviceQueries.tablet.min}) {
    ${h5Mixin};
  }
`;

export const MenuListItemExtra = styled(MenuListItem)``;

type MenuListProps = {
  isOpen: boolean;
};

export const MenuList = styled.ul<MenuListProps>`
  position: absolute;
  height: calc(100vh - 72px);
  width: 100%;
  padding: 20px 0;
  margin: 0;
  top: 72px;
  left: -100%;
  transition: transform 0.3s ease-in;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background: ${getPropFromColors('navbar', 'mobileBackground')};
  backdrop-filter: ${getPropFromColors('navbar', 'backdropFilter')};

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(100%);
    `};

  @media screen and (${deviceQueries.tablet.min}) {
    all: revert;

    display: flex;
    justify-content: flex-end;
    gap: 20px;

    padding: 0;
    margin: 0;
    list-style: none;

    ${MenuListItemExtra} {
      margin-left: 30px;
    }
  }
`;

export const Hamburguer = styled(HamburguerIcon)`
  display: block;

  @media screen and (${deviceQueries.tablet.min}) {
    display: none;
  }
`;
