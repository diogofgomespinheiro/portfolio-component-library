import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { LinkedinIcon  } from './linkedin-icon';

export default {
  title: 'icons/LinkedinIcon ',
  component: LinkedinIcon ,
  argTypes: {
    fill: {
      name: 'fill',
      type: { name: 'color', required: false },
      defaultValue: '#000000',
      table: {
        type: { summary: 'color' }
      },
      control: {
        type: 'color'
      }
    }
  }
} as Meta;

const Template: Story = args => <LinkedinIcon {...args} />;

export const Default = Template.bind({});
