import { ReactElement } from 'react';

export type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  listItems?: ReactElement[];
  buttons?: ReactElement[];
};
