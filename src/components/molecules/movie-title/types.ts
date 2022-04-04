import { IFontType } from '@/theme';
import { StyleProp, ViewStyle } from 'react-native';

export type MovieTitleProps = {
  name: string;
  year: string;
  nameStyle?: IFontType;
  yearStyle?: IFontType;
  containerMovieTitleStyle?: StyleProp<ViewStyle>;
};
