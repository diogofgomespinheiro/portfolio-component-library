import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Tag } from './tag.styles';
import { TagProps } from './tag.types';

const argTypes = {
  children: {
    name: 'children',
    type: { name: 'string | ReactElement | ReactElement[]', required: false },
    defaultValue: 'React',
    table: {
      type: { summary: 'string | ReactElement' }
    },
    control: {
      type: 'text'
    }
  },
  dimension: {
    name: 'dimension',
    type: { name: 'string', required: false },
    defaultValue: 'md',
    table: {
      type: { summary: 'sm | md | lg | xl' },
      defaultValue: { summary: 'md' }
    },
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md'
    }
  },
  showBorder: {
    name: 'showBorder',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false }
    },
    control: {
      type: 'boolean',
      defaultValue: false
    }
  },
  showAnimation: {
    name: 'showAnimation',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false }
    },
    control: {
      type: 'boolean',
      defaultValue: false
    }
  },
  transparent: {
    name: 'transparent',
    type: { name: 'boolean', required: false },
    defaultValue: false,
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false }
    },
    control: {
      type: 'boolean',
      defaultValue: false
    }
  }
};

const TagWithMargin = styled(Tag)`
  margin: 10px 10px 0 0;
`;

const Paragraph = styled.p`
  color: #8f8f8f;
  font-weight: bold;
`;

export default {
  title: 'atoms/Tag',
  component: Tag
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.story = {
  argTypes
};

export const Dimensions = () => (
  <>
    <TagWithMargin dimension="sm">Small</TagWithMargin>
    <TagWithMargin dimension="md">Medium</TagWithMargin>
    <TagWithMargin dimension="lg">Large</TagWithMargin>
    <TagWithMargin dimension="xl">Extra Large</TagWithMargin>
  </>
);

export const WithBorder = Template.bind({});
WithBorder.args = {
  children: 'React',
  showBorder: true
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: 'React',
  transparent: true
};

export const WithAnimations = Template.bind({});
WithAnimations.args = {
  children: 'React',
  showAnimation: true
};

export const All = () => (
  <>
    <div style={{ padding: '10px' }}>
      <Paragraph>Dimensions:</Paragraph>
      <Dimensions />
    </div>
    <div style={{ padding: '10px' }}>
      <Paragraph>With Flags:</Paragraph>
      <TagWithMargin showBorder>Border</TagWithMargin>
      <TagWithMargin transparent>Transparent</TagWithMargin>
      <TagWithMargin showAnimation>Animated</TagWithMargin>
    </div>
  </>
);
