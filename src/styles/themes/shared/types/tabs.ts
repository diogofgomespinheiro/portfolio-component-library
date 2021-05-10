export type TabsColorProps = {
  primaryText: string;
  secondaryText: string;
  selectedText: string;
};

export type TabsDimensionProps = Record<
  'mobile' | 'desktop',
  {
    tabsList: {
      margin: string;
      gap: number;
    };
  }
> & {
  maxWidth: number;
  maxHeight: number;
  height?: number;
};
