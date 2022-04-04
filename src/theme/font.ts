import { Platform } from './platform';

export type IFontTypeProps = {
  size: number;
  weight: '300' | '500' | '700';
};

export type IFontType = 'h1' | 'h2' | 'h3';

export const fontTypeMap: { [key in IFontType]: IFontTypeProps } = {
  h1: {
    size: Platform.SizeScale(12),
    weight: '300',
  },
  h2: {
    size: Platform.SizeScale(14),
    weight: '500',
  },
  h3: {
    size: Platform.SizeScale(16),
    weight: '700',
  },
};
