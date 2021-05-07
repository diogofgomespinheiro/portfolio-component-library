import { ReactElement, ReactNode } from 'react';

export type ProjectCardProps = {
  title: string;
  description: string;
  imgComponent: ReactNode;
  listItems?: ReactElement[];
  buttons?: ReactElement[];
};
