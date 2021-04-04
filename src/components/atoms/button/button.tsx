import * as React from 'react';

import { ButtonProps } from './button.types';

import * as S from './button.styles';

const Button = ({
  elementType = 'button',
  appearance = 'lightOrange',
  ...otherProps
}: ButtonProps): React.ReactElement => (
  <S.Button
    data-testid="button"
    appearance={appearance}
    as={elementType}
    {...otherProps}
  />
);

export { Button };
