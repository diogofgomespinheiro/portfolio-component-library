import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Button } from './button';
import { ButtonProps } from './button.types';

export default {
  title: 'atoms/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => {
  const { children = 'Button' } = args;
  return <Button {...args} children={children} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button'
};

export const Link = Template.bind({});
Link.args = {
  elementType: 'a'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  showShadow: true
};

const ButtonWithMarginRight = styled(Button)`
  margin-right: 10px;
`;

export const All = () => (
  <>
    <ButtonWithMarginRight
      elementType="button"
      onClick={action('button action click')}
    >
      Button
    </ButtonWithMarginRight>
    <ButtonWithMarginRight elementType="a" href="#">
      Link
    </ButtonWithMarginRight>
    <ButtonWithMarginRight disabled>Disabled</ButtonWithMarginRight>
    <ButtonWithMarginRight showShadow>Shadow</ButtonWithMarginRight>
  </>
);
