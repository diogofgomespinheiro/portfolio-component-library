import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { EyeIcon  } from './eye-icon';

export default {
  title: 'icons/EyeIcon ',
  component: EyeIcon ,
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

const Template: Story = args => <EyeIcon {...args} />;

export const Default = Template.bind({});
