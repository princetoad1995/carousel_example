import { ActivityIndicatorProps } from 'react-native';

export type IndicatorProps = ActivityIndicatorProps & {
  indicatorColor?: 'red' | 'blue';
};
