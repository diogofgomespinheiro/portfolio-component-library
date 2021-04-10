import React from 'react';
import { render } from '@testing-library/react';

import { Tag } from './tag.styles';

describe('Tag Component', () => {
  const renderComponent = () => render(<Tag data-testid="tag"> React </Tag>);

  it('should render text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('tag');

    expect(component).toHaveTextContent('React');
  });
});
