import { MovieTitleProps } from '@/components/molecules/movie-title/types';
import { ViewStyle } from 'react-native';

export type MovieItemProps = MovieTitleProps & {
  movieItemStyle?: ViewStyle;
  imgUrl: string;
  id: string;
};
