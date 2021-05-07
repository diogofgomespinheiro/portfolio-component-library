import { Dimensions } from './types';

export const dimensions: Dimensions = {
  tag: {
    sm: {
      paddingY: 4,
      paddingX: 16,
      borderRadius: 8
    },
    md: {
      paddingY: 8,
      paddingX: 32,
      borderRadius: 10
    },
    lg: {
      paddingY: 16,
      paddingX: 64,
      borderRadius: 15
    },
    xl: {
      paddingY: 32,
      paddingX: 128,
      borderRadius: 20
    }
  },
  tabs: {
    mobile: {
      tabsList: {
        margin: '0 0 20px 0',
        gap: 15
      }
    },
    desktop: {
      tabsList: {
        margin: '0 0 20px 0',
        gap: 40
      }
    },
    maxWidth: 615,
    maxHeight: 250
  }
};
