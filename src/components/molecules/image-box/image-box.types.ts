import { ReactNode } from 'react';

export type DeviceOptions = 'desktop' | 'mobile';

export type ImageBoxProps = {
  children: ReactNode;
  width?: Record<DeviceOptions, number | 'full'>;
};
