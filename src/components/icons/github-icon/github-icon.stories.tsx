import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { GithubIcon  } from './github-icon';

export default {
  title: 'icons/GithubIcon ',
  component: GithubIcon ,
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

const Template: Story = args => <GithubIcon {...args} />;

export const Default = Template.bind({});
