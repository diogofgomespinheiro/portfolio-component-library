module.exports = ({ componentName, componentFileName }) => ({
  content: `\
import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ${componentName}  } from './${componentFileName}';

export default {
  title: 'icons/${componentName} ',
  component: ${componentName} ,
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

const Template: Story = args => <${componentName} {...args} />;

export const Default = Template.bind({});
`,
  extension: `.stories.tsx`
});
