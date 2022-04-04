import { TextProps } from 'react-native';
import { IFontType } from '@/theme';

export type LabelProps = TextProps & {
  fontTyle?: IFontType;
  value?: string;
  fontColor?: 'black' | 'white';
};
