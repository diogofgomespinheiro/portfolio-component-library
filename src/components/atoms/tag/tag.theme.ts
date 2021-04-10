import { TagTheme } from './tag.types';

export const theme: TagTheme = {
  colors: {
    dark: {
      background: 'rgba(85, 91, 110, 0.03)',
      backgroundHover: 'rgba(222, 157, 123, 0.1)',
      backgroundActive: 'rgba(222, 157, 123, 0.3)',
      border: '#DE9D7B',
      text: '#DE9D7B'
    },
    light: {
      background: 'rgba(255, 255, 255, 0.05)',
      backgroundHover: 'rgba(222, 157, 123, 0.1)',
      backgroundActive: 'rgba(222, 157, 123, 0.3)',
      border: '#DE9D7B',
      text: '#DE9D7B'
    }
  },
  dimensions: {
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
  }
};
