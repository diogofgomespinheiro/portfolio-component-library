import * as React from 'react';

import { ProjectCardProps } from './project-card.types';

import { ImageBox } from '../../molecules/image-box/image-box';

import * as S from './project-card.styles';

const ProjectCard = ({
  title,
  description,
  imageUrl,
  listItems = [],
  buttons = []
}: ProjectCardProps): React.ReactElement => (
  <S.Container data-testid="project-card">
    <S.ImageWrapper>
      <ImageBox imgUrl={imageUrl} />
    </S.ImageWrapper>
    <S.ContentContainer>
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.InfoContainer>
      {Boolean(listItems.length) && (
        <S.ListContainer>{listItems}</S.ListContainer>
      )}
      {Boolean(buttons.length) && (
        <S.ButtonsContainer>{buttons}</S.ButtonsContainer>
      )}
    </S.ContentContainer>
  </S.Container>
);

export { ProjectCard };
