export type DeviceOptions = 'desktop' | 'mobile';

export type ImageBoxProps = {
  imgUrl: string;
  height?: Record<DeviceOptions, number | 'full'>;
  width?: Record<DeviceOptions, number | 'full'>;
};
