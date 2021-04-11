module.exports = ({ componentName, componentFileName }) => ({
  content: `\
import React from 'react';
import { render } from '@testing-library/react';

import { ${componentName} } from './${componentFileName}';
import { ${componentName}Props } from './${componentFileName}.types';

describe('Test Component', () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      foo: 'bar'
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'Hello World';
    const { getByTestId } = renderComponent();

    const component = getByTestId('${componentFileName}');

    expect(component).toHaveTextContent('Hello World');
  });
});
`,
  extension: `.spec.tsx`
});
