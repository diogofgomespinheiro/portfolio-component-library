import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { MoonIcon } from './moon-icon';

export default {
  title: 'icons/MoonIcon',
  component: MoonIcon
} as Meta;

const Template: Story = args => <MoonIcon {...args} />;

export const Default = Template.bind({});
