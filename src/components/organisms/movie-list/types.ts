import { StyleProp, ViewStyle } from 'react-native';

export type MovieProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  release_date: string;
};

export type MovieListProps = {
  data: MovieProps[];
  movieListStyle?: StyleProp<ViewStyle>;
  cbActiveSlide: (actoveSlide: number) => void;
  sliderWidth?: number;
};
