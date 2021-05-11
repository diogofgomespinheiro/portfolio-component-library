import styled, { css } from 'styled-components';

import {
  getPropFromColors,
  deviceQueries,
  h4Mixin,
  body2Mixin,
  body3Mixin
} from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  padding: 40px 20px;
  width: 100%;
  border-radius: 20px;
  background-color: ${getPropFromColors('projectCard', 'background')};

  @media screen and (${deviceQueries.mobileL.min}) {
    width: fit-content;
  }

  @media screen and (${deviceQueries.tablet.min}) {
    flex-direction: row;

    padding: 80px 40px;
    border-radius: 50px;
    max-height: 460px;
    width: 100%;
    max-width: 880px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;

  @media screen and (${deviceQueries.tablet.min}) {
    min-width: 250px;
    width: 50%;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  flex: 1;
  width: 100%;
  max-width: 360px;

  @media screen and (${deviceQueries.tablet.min}) {
    width: 50%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h4`
  color: ${getPropFromColors('projectCard', 'primaryText')};

  ${h4Mixin}
`;

export const Description = styled.p`
  margin: 5px 0;
  color: ${getPropFromColors('projectCard', 'secondaryText')};
  line-break: anywhere;

  ${body2Mixin}
`;

const flexWrapCenter = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const ListContainer = styled.div`
  ${flexWrapCenter};

  margin-top: 40px;
`;

export const ButtonsContainer = styled.div`
  ${flexWrapCenter};
  ${body3Mixin}

  justify-content: center;
  width: 100%;
  margin-top: 40px;
  color: ${getPropFromColors('projectCard', 'primaryText')};

  & > * {
    cursor: pointer;
  }

  @media screen and (${deviceQueries.tablet.min}) {
    justify-content: flex-start;
  }
`;
