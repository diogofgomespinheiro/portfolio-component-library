import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Button } from './button';
import { ButtonProps } from './button.types';

export default {
  title: 'atoms/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => {
  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});

export const Link = Template.bind({});
Link.args = {
  elementType: 'a'
};

export const Dark = Template.bind({});
Dark.args = {
  appearance: 'darkOrange'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  flags: {
    hasShadow: true
  }
};

export const Custom = () => {
  const groupId = 'Colors';
  const customColors = {
    text: color('Text Color', 'white', groupId),
    background: color('Background Color', '#343435', groupId),
    backgroundDisabled: color(
      'Background Disabled Color',
      'rgb(96, 88, 142, 0.5)',
      groupId
    ),
    backgroundHover: color('Background Hover Color', '#60588E', groupId),
    backgroundActive: color('Background Active Color', '#60588E', groupId)
  };
  const disabled = boolean('Disabled', false, 'Status');

  return (
    <Button
      customColors={customColors}
      disabled={disabled}
      onClick={action('button action click')}
    >
      Resume
    </Button>
  );
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
    <ButtonWithMarginRight appearance="darkOrange">Dark</ButtonWithMarginRight>
    <ButtonWithMarginRight disabled>Disabled</ButtonWithMarginRight>
    <ButtonWithMarginRight flags={{ hasShadow: true }}>
      Shadow
    </ButtonWithMarginRight>
    <Button
      customColors={{
        text: 'white',
        background: '#343435',
        backgroundDisabled: 'rgb(96, 88, 142, 0.5)',
        backgroundActive: '#60588E',
        backgroundHover: '#60588E'
      }}
    >
      Custom
    </Button>
  </>
);
