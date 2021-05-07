import { TagDimensionProps } from './tag';
import { TabsDimensionProps } from './tabs';

export type DimensionOptions = 'sm' | 'md' | 'lg' | 'xl';

export type Dimensions = {
  tag: Record<DimensionOptions, TagDimensionProps>;
  tabs: TabsDimensionProps;
};
