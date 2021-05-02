export type DeviceOptions = 'desktop' | 'mobile';

export type ImageBoxProps = {
  imgUrl: string;
  width?: Record<DeviceOptions, number | 'full'>;
};
