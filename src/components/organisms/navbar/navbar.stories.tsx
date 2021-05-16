import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Navbar } from './navbar';
import { NavbarProps } from './navbar.types';
import { Button, ThemeSwitcher } from '../../atoms';
import { LogoIcon } from '../../icons';

export default {
  title: 'organisms/Navbar',
  component: Navbar
} as Meta;

const Template: Story<NavbarProps> = args => {
  return <Navbar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: <LogoIcon onClick={action('Logo Icon Clicked')} />,
  menuListItems: [
    <span onClick={action('Home Item Clicked!')}>Home</span>,
    'About',
    'Projects',
    'Contact',
    'Blog'
  ],
  extraMenuItem: (
    <Button onClick={action('Resume Button Clicked!')}>Resume</Button>
  ),
  extraItems: <ThemeSwitcher />
};
