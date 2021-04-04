module.exports = ({ componentName, componentType, componentFileName }) => ({
  content: `\
import * as React from 'react';
import ${componentName} from './${componentFileName}';

export default {
    title: '${componentType}s/${componentName}'
};

export const WithBar = () => <${componentName} foo='bar' />;

export const WithBaz = () => <${componentName} foo='baz' />;
`,
  extension: `.stories.tsx`
});
