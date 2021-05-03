import { Text } from './types';

export const text: Text = {
  font: {
    heading: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  size: {
    heading: {
      mobile: {
        h1: 2.5,
        h2: 1.25,
        h3: 1,
        h4: 1
      },
      desktop: {
        h1: 3.75,
        h2: 2.5,
        h3: 1.75,
        h4: 1.5
      }
    },
    body: {
      mobile: {
        body1: 0.875,
        body2: 0.875,
        body3: 0.875,
        body4: 0.75
      },
      desktop: {
        body1: 1.375,
        body2: 1,
        body3: 0.875,
        body4: 0.75
      }
    }
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  }
};
