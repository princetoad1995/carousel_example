import { MovieProps } from '@/components/organisms/movie-list/types';
import { StyleProp, ViewStyle } from 'react-native';

export type HomeTemplatesProps = {
  data: MovieProps[];
  homeStyle?: StyleProp<ViewStyle>;
  loading: boolean;
  setData?: (movies: MovieProps[], reload?: boolean) => void;
};
