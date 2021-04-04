import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './button';
import { ButtonProps } from './button.types';

export default {
  title: 'atoms/Button',
  component: Button
};

export const Default = (args: ButtonProps) => (
  <Button {...args} onClick={action('button action click')}>
    Resume
  </Button>
);
Default.args = { elementType: 'button' };

export const Link = (args: ButtonProps) => <Button {...args}>Resume</Button>;
Link.args = { elementType: 'a' };

export const Disabled = (args: ButtonProps) => (
  <Button {...args} onClick={action('button action click')}>
    Resume
  </Button>
);
Disabled.args = { disabled: true };

export const All = () => (
  <>
    <Button
      elementType="button"
      onClick={action('button action click')}
      style={{ marginRight: '10px' }}
    >
      Button
    </Button>
    <Button elementType="a" href="#" style={{ marginRight: '10px' }}>
      Link
    </Button>
    <Button disabled>Disabled</Button>
  </>
);
