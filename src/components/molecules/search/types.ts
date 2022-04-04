import { TextFieldProps } from '@/components/atoms/text-field/types';
import { StyleProp, ViewStyle } from 'react-native';

export type SearchProps = TextFieldProps & {
  containerSearchStyle?: StyleProp<ViewStyle>;
  onClickSearch: () => void;
  value: string;
  onChangeText: (value: string) => void;
};
