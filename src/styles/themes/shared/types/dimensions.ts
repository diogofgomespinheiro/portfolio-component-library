import { TagDimensionProps } from './tag';

export type DimensionOptions = 'sm' | 'md' | 'lg' | 'xl';

export type Dimensions = {
  tag: Record<DimensionOptions, TagDimensionProps>;
};
