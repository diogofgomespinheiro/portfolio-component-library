type HeadingSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodySizes = 'body1' | 'body2' | 'body3' | 'body4' | 'body5';
type WeightTypes = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

export type Text = {
  font: {
    heading?: string;
    body?: string;
  };
  size: {
    heading: {
      mobile: Record<HeadingSizes, number>;
      desktop: Record<HeadingSizes, number>;
    };
    body: {
      mobile: Record<BodySizes, number>;
      desktop: Record<BodySizes, number>;
    };
  };
  weight: Record<WeightTypes, number>;
};
