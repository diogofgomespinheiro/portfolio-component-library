import * as React from 'react';

import { ImageBoxProps } from './image-box.types';

import * as S from './image-box.styles';

const ImageBox = ({
  children,
  ...othersProps
}: ImageBoxProps): React.ReactElement => (
  <S.Window data-testid="image-mac-window" {...othersProps}>
    <S.Header>
      <S.Circle fill="#ED6960" />
      <S.Circle fill="#F5BD4F" />
      <S.Circle fill="#62C655" />
    </S.Header>
    <S.ImageContainer>{React.Children.only(children)}</S.ImageContainer>
  </S.Window>
);

export { ImageBox };
