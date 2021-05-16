import { ButtonColorProps } from './button';
import { TagColorProps } from './tag';
import { ProjectCardColorProps } from './project-card';
import { TabsColorProps } from './tabs';
import { HamburguerColorProps } from './hamburguer';
import { LogoColorProps } from './logo';
import { SunIconColorProps } from './sun-icon';
import { MoonIconColorProps } from './moon-icon';
import { NavbarColorProps } from './navbar';

export type Colors = {
  button: ButtonColorProps;
  tabs: TabsColorProps;
  tag: TagColorProps;
  projectCard: ProjectCardColorProps;
  hamburguer: HamburguerColorProps;
  logo: LogoColorProps;
  sunIcon: SunIconColorProps;
  moonIcon: MoonIconColorProps;
  navbar: NavbarColorProps;
};
