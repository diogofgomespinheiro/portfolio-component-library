import * as React from 'react';

import { callAll } from '../../../utils';

import { HamburguerProps } from './hamburguer.types';
import * as S from './hamburguer.styles';

const Hamburguer = ({
  onClick,
  controlledIsOpen,
  ...props
}: HamburguerProps) => {
  const [isOpen, setIsOpen] =
    typeof controlledIsOpen === 'undefined'
      ? React.useState(false)
      : [controlledIsOpen];

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();

    if (typeof controlledIsOpen === 'undefined') {
      setIsOpen(prevState => !prevState);
    }
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
