import * as React from 'react';

import { ImageMacWindowProps } from './image-mac-window.types';

import * as S from './image-mac-window.styles';

const ImageMacWindow = ({
  imgUrl,
  ...othersProps
}: ImageMacWindowProps): React.ReactElement => (
  <S.Window data-testid="image-mac-window" {...othersProps}>
    <S.Header>
      <S.Circle fill="#ED6960" />
      <S.Circle fill="#F5BD4F" />
      <S.Circle fill="#62C655" />
    </S.Header>
    <S.ImageContainer backgroundImage={imgUrl} />
  </S.Window>
);

export { ImageMacWindow };
