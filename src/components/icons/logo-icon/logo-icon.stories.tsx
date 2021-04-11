import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { LogoIcon } from './logo-icon';

export default {
  title: 'icons/LogoIcon ',
  component: LogoIcon,
  argTypes: {
    appearance: {
      name: 'appearance',
      type: { name: 'string', required: false },
      defaultValue: 'dark',
      table: {
        type: { summary: 'dark | light' },
        defaultValue: { summary: 'dark' }
      },
      control: {
        type: 'radio',
        options: ['dark', 'light']
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story = args => <LogoIcon {...args} />;

export const Default = Template.bind({});
