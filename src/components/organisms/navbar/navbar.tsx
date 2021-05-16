import * as React from 'react';

import { callAll } from '../../../utils';
import { NavbarProps } from './navbar.types';

import * as S from './navbar.styles';

const Navbar = ({
  icon,
  menuListItems,
  extraMenuItem,
  extraItems
}: NavbarProps): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleHamburguerClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();

    if (window.innerWidth < 768) {
      setIsOpen(prevState => {
        document.body.classList.toggle('hide-scroll', !prevState);
        return !prevState;
      });
    }
  };

  return (
    <S.Nav data-testid="navbar">
      <S.Wrapper>
        {Boolean(icon) && <S.NavIcon>{React.Children.only(icon)}</S.NavIcon>}
        <S.Menu>
          <div>
            <S.MenuList isOpen={isOpen}>
              {React.Children.map(menuListItems, (child, index) => (
                <S.MenuListItem
                  isSelected={selectedItem === index}
                  key={`menu-list-item-${index}`}
                  onClick={callAll(
                    () => setSelectedItem(index),
                    handleHamburguerClick
                  )}
                >
                  {child}
                </S.MenuListItem>
              ))}
              {Boolean(extraMenuItem) && (
                <S.MenuListItemExtra>
                  {React.Children.only(extraMenuItem)}
                </S.MenuListItemExtra>
              )}
            </S.MenuList>
          </div>
          {Boolean(extraItems) && extraItems}
        </S.Menu>
        <S.Hamburguer
          controlledIsOpen={isOpen}
          onClick={handleHamburguerClick}
        />
      </S.Wrapper>
    </S.Nav>
  );
};

export { Navbar };
