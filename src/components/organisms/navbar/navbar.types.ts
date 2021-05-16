import type * as React from 'react';

export type NavbarProps = {
  icon?: React.ReactElement;
  menuListItems: React.ReactElement[] | React.ReactElement;
  selectedMenuListItem?: number;
  extraMenuItem?: React.ReactElement;
  extraItems?: React.ReactElement[] | React.ReactElement;
};
