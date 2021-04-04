module.exports = ({ componentName, componentType, componentFileName }) => ({
  content: `\
import * as React from 'react';

import { ${componentName} } from './${componentFileName}';
import { ${componentName}Props } from './${componentFileName}.types';

export default {
    title: '${componentType}s/${componentName}'
};

export const Default = (args: ${componentName}Props) => <${componentName} {...args} />;
Default.args = { foo: 'bar' };
`,
  extension: `.stories.tsx`
});
