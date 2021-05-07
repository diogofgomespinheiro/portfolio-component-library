import * as React from 'react';

import { ProjectCardProps } from './project-card.types';

import { ImageBox } from '../../molecules/image-box/image-box';
import { cloneValidElement } from '../../../utils';

import * as S from './project-card.styles';

const ProjectCard = ({
  title,
  description,
  imgComponent,
  listItems = [],
  buttons = []
}: ProjectCardProps): React.ReactElement => (
  <S.Container data-testid="project-card">
    <S.ImageWrapper>
      <ImageBox>{imgComponent}</ImageBox>
    </S.ImageWrapper>
    <S.ContentContainer>
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.InfoContainer>
      {Boolean(listItems.length) && (
        <S.ListContainer>
          {React.Children.map(listItems, child => {
            return cloneValidElement(child);
          })}
        </S.ListContainer>
      )}
      {Boolean(buttons.length) && (
        <S.ButtonsContainer>
          {React.Children.map(buttons, child => {
            return cloneValidElement(child);
          })}
        </S.ButtonsContainer>
      )}
    </S.ContentContainer>
  </S.Container>
);

export { ProjectCard };
