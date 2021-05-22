import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Navbar } from './navbar';
import { NavbarProvider } from './navbar.context';
import { NavbarProps } from './navbar.types';
import { Button, ThemeSwitcher } from '../../atoms';
import { LogoIcon } from '../../icons';

export default {
  title: 'organisms/Navbar',
  component: Navbar
} as Meta;

const Template: Story<NavbarProps> = args => {
  return (
    <NavbarProvider>
      <Navbar {...args} />
    </NavbarProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'relative',
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
