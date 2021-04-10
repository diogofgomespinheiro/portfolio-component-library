export type TagAppearanceOptions = 'dark' | 'light';
export type TagDimensionsOptions = 'sm' | 'md' | 'lg' | 'xl';

export type TagDimensionsProps = {
  paddingX?: number;
  paddingY?: number;
  height?: number;
  width?: number;
  borderRadius?: number;
};

export type TagColorsProps = {
  text?: string;
  background?: string;
  backgroundHover?: string;
  backgroundActive?: string;
  border?: string;
};

export type TagTheme = {
  colors: Record<TagAppearanceOptions, TagColorsProps>;
  dimensions: Record<TagDimensionsOptions, TagDimensionsProps>;
};

export type TagProps = {
  appearance?: TagAppearanceOptions;
  dimension?: TagDimensionsOptions;
  customDimensions?: TagDimensionsProps;
  showBorder?: boolean;
  showAnimation?: boolean;
};
