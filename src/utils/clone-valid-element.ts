import { cloneElement, isValidElement } from 'react';
import type * as React from 'react';
import { TabProps } from '../components/molecules/tabs/tabs.types';

export const cloneValidElement = <Props>(
  element: React.ReactElement<Props>,
  props?: Partial<Props> & React.Attributes,
  ...children: React.ReactNode[]
): React.ReactElement<Props> | React.ReactNode => {
  return typeof element.type !== 'string'
    ? cloneElement<Props>(element, props, ...children)
    : element;
};
