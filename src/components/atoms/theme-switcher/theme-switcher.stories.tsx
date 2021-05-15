import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeSwitcher } from './theme-switcher';
import { ThemeSwitcherProps } from './theme-switcher.types';

export default {
  title: 'atoms/ThemeSwitcher',
  component: ThemeSwitcher
} as Meta;

const Template: Story<ThemeSwitcherProps> = args => {
  return <ThemeSwitcher {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  onClick: action('clicked')
};
