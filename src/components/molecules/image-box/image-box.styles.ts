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

type WindowProps = Omit<ImageBoxProps, 'children'>;
export const Window = styled.div<WindowProps>`
  width: ${getWindowProp('width', 'mobile')};
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: ${getWindowProp('width', 'desktop')};
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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
  border-radius: 0 0 20px 20px;

  & > * {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 20px 20px;
  }
`;
