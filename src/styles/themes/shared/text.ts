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
        h3: 1.125,
        h4: 1,
        h5: 1,
        h6: 0.75
      },
      desktop: {
        h1: 3.75,
        h2: 2.5,
        h3: 1.75,
        h4: 1.5,
        h5: 1.25,
        h6: 0.875
      }
    },
    body: {
      mobile: {
        body1: 1,
        body2: 0.875,
        body3: 0.625,
        body4: 0.625,
        body5: 0.5
      },
      desktop: {
        body1: 1.375,
        body2: 1,
        body3: 0.75,
        body4: 0.625,
        body5: 0.5
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
