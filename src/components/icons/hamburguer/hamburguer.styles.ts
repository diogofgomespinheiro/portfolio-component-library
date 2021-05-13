import styled, { css } from 'styled-components';

import { getPropFromColors } from '../../../styles';

export const Container = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & > span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${getPropFromColors('hamburguer', 'strokeColor')};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & > span:nth-child(1) {
    top: 0px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        top: 18px;
        width: 0%;
        left: 50%;
      `}
  }

  & > span:nth-child(2) {
    top: 8.5px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      `}
  }

  & > span:nth-child(3) {
    top: 8.5px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      `}
  }

  & > span:nth-child(4) {
    top: 17px;

    ${({ isOpen }) =>
      isOpen &&
      css`
        top: 18px;
        width: 0%;
        left: 50%;
      `}
  }
`;
