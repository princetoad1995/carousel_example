import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '@/theme';
import { PaginationProps } from './types';
import { Pagination } from 'react-native-snap-carousel';

const PaginationBase = ({ dotsLength, activeDotIndex }: PaginationProps) => {
  return (
    <Pagination
      dotsLength={dotsLength}
      activeDotIndex={activeDotIndex}
      containerStyle={styles.container}
      dotStyle={styles.dotContainer}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  dotContainer: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
    borderRadius: Platform.SizeScale(5),
    marginHorizontal: Platform.SizeScale(8),
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export const PaginationComponent = memo(PaginationBase);
