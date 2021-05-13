import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Hamburguer } from './hamburguer';

export default {
  title: 'icons/Hamburguer',
  component: Hamburguer
} as Meta;

const Template: Story = args => <Hamburguer {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: action('clicked')
};
