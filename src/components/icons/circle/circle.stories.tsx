import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { CircleIcon } from './circle';

export default {
  title: 'icons/CircleIcon',
  component: CircleIcon,
  argTypes: {
    fill: {
      name: 'fill',
      type: { name: 'color', required: false },
      defaultValue: '#62C655',
      table: {
        type: { summary: 'color' }
      },
      control: {
        type: 'color'
      }
    }
  }
} as Meta;

const Template: Story = args => <CircleIcon {...args} />;

export const Default = Template.bind({});
