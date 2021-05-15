import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { SunIcon } from './sun-icon';

export default {
  title: 'icons/SunIcon',
  component: SunIcon
} as Meta;

const Template: Story = args => <SunIcon {...args} />;

export const Default = Template.bind({});
