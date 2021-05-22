import type * as React from 'react';

export type NavbarProps = {
  position?: 'relative' | 'absolute' | 'fixed';
  icon?: React.ReactElement;
  menuListItems: React.ReactElement[] | React.ReactElement;
  extraMenuItem?: React.ReactElement;
  extraItems?: React.ReactElement[] | React.ReactElement;
};

export type NavbarProviderProps = {
  initialIsMobileMenuOpenState?: boolean;
  initialSelectedItemIndexState?: number;
  children: React.ReactNode;
};

export type IsMobileMenuOpenState = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SelectedItemState = {
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
};

export type NavbarContextProps = {
  isMobileMenuOpenState: IsMobileMenuOpenState;
  selectedItemState: SelectedItemState;
};
