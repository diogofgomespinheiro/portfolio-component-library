import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { loadFontsForStorybook } from '../utils/loadFontsForStorybook';
import { GlobalStyle } from '../src/shared/global';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true
  }
};

const withGlobalStyle = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle, withKnobs];

loadFontsForStorybook();
