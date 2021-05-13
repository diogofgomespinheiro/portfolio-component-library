import * as React from 'react';

import { callAll } from '../../../utils';
import * as S from './hamburguer.styles';

const Hamburguer = ({
  onClick,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsOpen(prevState => !prevState);
  };

  return (
    <S.Container
      {...props}
      isOpen={isOpen}
      onClick={callAll(onClick, handleClick)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </S.Container>
  );
};

export { Hamburguer };
