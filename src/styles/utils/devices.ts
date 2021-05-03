type DeviceSizeOptions = {
  min: string;
  max?: string;
};

type DeviceSizeTypes =
  | 'mobileS'
  | 'mobileM'
  | 'mobileL'
  | 'tablet'
  | 'laptop'
  | 'laptopL'
  | 'desktop';

type DeviesQueries = Record<DeviceSizeTypes, DeviceSizeOptions>;

export const deviceQueries: DeviesQueries = {
  mobileS: {
    min: 'min-width: 320px',
    max: 'max-width: 374px'
  },
  mobileM: {
    min: 'min-width: 375px',
    max: 'max-width: 424px'
  },
  mobileL: {
    min: 'min-width: 425px',
    max: 'max-width: 767px'
  },
  tablet: {
    min: 'min-width: 768px',
    max: 'max-width: 1023px'
  },
  laptop: {
    min: 'min-width: 1024px',
    max: 'max-width: 1279px'
  },
  laptopL: {
    min: 'min-width: 1280px',
    max: 'max-width: 1599px'
  },
  desktop: {
    min: 'min-width: 1600px'
  }
};
