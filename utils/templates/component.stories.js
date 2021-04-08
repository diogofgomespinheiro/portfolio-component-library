module.exports = ({ componentName, componentType, componentFileName }) => ({
  content: `\
import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ${componentName} } from './${componentFileName}';
import { ${componentName}Props } from './${componentFileName}.types';

export default {
    title: '${componentType}s/${componentName}',
    component: ${componentName}
} as Meta;

const Template: Story<${componentName}Props> = args => {
  return <${componentName} {...args} />
};

export const Default = Template.bind({});
Default.args = { foo: 'bar' };
`,
  extension: `.stories.tsx`
});
