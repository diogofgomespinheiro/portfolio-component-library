import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ImageBox } from './image-box';
import { ImageBoxProps } from './image-box.types';

export default {
  title: 'molecules/ImageBox',
  component: ImageBox,
  argTypes: {
    imgUrl: {
      name: 'imgUrl',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    height: {
      type: { name: 'object', required: false },
      table: {
        type: {
          summary: 'object',
          detail: "{\n desktop: number | 'full',\n mobile: number | 'full'\n}"
        }
      },
      defaultValue: {},
      control: {
        type: 'object',
        defaultValue: {}
      }
    },
    width: {
      type: { name: 'object', required: false },
      table: {
        type: {
          summary: 'object',
          detail: "{\n desktop: number | 'full',\n mobile: number | 'full'\n}"
        }
      },
      defaultValue: {},
      control: {
        type: 'object',
        defaultValue: {}
      }
    }
  }
} as Meta;

const Template: Story<ImageBoxProps> = args => {
  return (
    <div
      style={{
        height: '400px',
        width: '100%',
        maxWidth: '500px'
      }}
    >
      <ImageBox {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  imgUrl:
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
};

export const WithCustomSizes = args => (
  <>
    <ImageBox
      imgUrl="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
      {...args}
    />
  </>
);
WithCustomSizes.args = {
  height: { desktop: 300, mobile: 300 },
  width: { desktop: 450, mobile: 'full' }
};
