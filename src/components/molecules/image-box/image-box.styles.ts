import styled from 'styled-components';

import { CircleIcon } from '../../icons/circle';
import { ImageBoxProps, DeviceOptions } from './image-box.types';

const getWindowProp = (
  selectedProp: keyof WindowProps,
  device: DeviceOptions
) => (props: WindowProps = {}): string => {
  const selectedValue = props[selectedProp]?.[device];
  if (!selectedValue || selectedValue === 'full') return '100%';

  return `${selectedValue}px`;
};

type WindowProps = Omit<ImageBoxProps, 'imgUrl'>;
export const Window = styled.div<WindowProps>`
  width: ${getWindowProp('width', 'mobile')};
  height: ${getWindowProp('height', 'mobile')};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: ${getWindowProp('width', 'desktop')};
    height: ${getWindowProp('height', 'desktop')};
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: #1a1b25;
  border-radius: 20px 20px 0 0;
`;

export const Circle = styled(CircleIcon)`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

type ImageContainerProps = { backgroundImage: string };
export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100%;
  height: 100%;
  background-image: ${({ backgroundImage }) => `url('${backgroundImage}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 20px 20px;
`;
