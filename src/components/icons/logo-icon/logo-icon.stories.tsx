import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { LogoIcon } from './logo-icon';

export default {
  title: 'icons/LogoIcon ',
  component: LogoIcon
} as Meta;

const Template: Story = args => <LogoIcon {...args} />;

export const Default = Template.bind({});
