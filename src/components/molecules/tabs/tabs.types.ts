import type * as React from 'react';

export type TabsContextValue = {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type TabsProps = {
  initialState?: number;
  children: React.ReactNode;
};

export type TabsListProps = {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
};

export type TabProps = {
  index?: number;
  isSelected?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export type TabsPanelsProps = {
  children:
    | React.ReactElement<TabsPanelProps>[]
    | React.ReactElement<TabsPanelProps>;
};

export type TabsPanelProps = {
  children?: React.ReactNode;
};

export type SimpleTabsPanelContentItem = {
  title: string;
  subTitle?: string;
  icons?: {
    url: string;
    alt: string;
  }[];
};

export type SimpleTabsPanelContentProps = {
  items: SimpleTabsPanelContentItem[];
};
