import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'themeprovider-storybook';

import { loadFontsForStorybook } from '../utils/loadFontsForStorybook';
import { GlobalStyle } from '../src/shared/global';
import { darkTheme, lightTheme, shadesOfPurple } from '../src/shared/themes';
const themes = [darkTheme, lightTheme, shadesOfPurple];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'dark', value: '#100E17' },
      { name: 'light', value: '#FAFBFF' }
    ]
  }
};

const withGlobalStyle = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withThemesProvider(themes));
addDecorator(withGlobalStyle);
addDecorator(withKnobs);

loadFontsForStorybook();
