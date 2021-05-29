import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { EmailIcon  } from './email-icon';

export default {
  title: 'icons/EmailIcon ',
  component: EmailIcon ,
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

const Template: Story = args => <EmailIcon {...args} />;

export const Default = Template.bind({});
