import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProjectCard } from './project-card';
import { ProjectCardProps } from './project-card.types';

import { Button, Tag } from '../../atoms';
import { EyeIcon } from '../../icons';

const argTypes = {
  title: {
    name: 'title',
    defaultValue: 'Project Title',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' }
    },
    control: {
      type: 'text',
      defaultValue: 'Project Title'
    }
  },
  description: {
    name: 'description',
    defaultValue: 'Project Description',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' }
    },
    control: {
      type: 'text',
      defaultValue: 'Project Description'
    }
  },
  imageUrl: {
    name: 'imageUrl',
    defaultValue:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    type: { name: 'string', required: true },
    table: {
      type: { summary: 'string' }
    },
    control: {
      type: 'text',
      defaultValue:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
    }
  }
};

export default {
  title: 'organisms/ProjectCard',
  component: ProjectCard,
  argTypes: argTypes
} as Meta;

const Template: Story<ProjectCardProps> = args => {
  return <ProjectCard {...args} />;
};

const listItems = [
  <Tag transparent aria-disabled>
    Item 1
  </Tag>,
  <Tag transparent aria-disabled>
    Item 2
  </Tag>,
  <Tag transparent aria-disabled>
    Item 3
  </Tag>
];

const buttons = [<Button>Button 1</Button>];

export const Default = Template.bind({});
Default.args = {
  listItems,
  buttons
};
