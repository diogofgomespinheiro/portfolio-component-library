import * as React from 'react';

import { NavbarContextProps, NavbarProviderProps } from './navbar.types';

const NavbarContext = React.createContext<NavbarContextProps>(null);
NavbarContext.displayName = 'NavbarContext';

export const NavbarProvider = ({
  initialIsMobileMenuOpenState = false,
  initialSelectedItemIndexState = 0,
  children
}: NavbarProviderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(
    initialIsMobileMenuOpenState
  );
  const [selectedItem, setSelectedItem] = React.useState(
    initialSelectedItemIndexState
  );

  return (
    <NavbarContext.Provider
      value={{
        isMobileMenuOpenState: { isMobileMenuOpen, setIsMobileMenuOpen },
        selectedItemState: { selectedItem, setSelectedItem }
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = (): NavbarContextProps => {
  const context = React.useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavbar must be used within a <NavbarProvider/>');
  }

  return context;
};
