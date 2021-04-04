import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './button';
import { ButtonProps } from './button.types';

describe('Button Component', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = text => render(<Button {...props}> {text}</Button>);

  it('should render children correctly', () => {
    const { getByTestId } = renderComponent('Resume');

    const component = getByTestId('button');

    expect(component).toHaveTextContent('Resume');
  });
});
