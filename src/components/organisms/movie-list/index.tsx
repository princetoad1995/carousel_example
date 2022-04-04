import React, { memo, useMemo } from 'react';
import { MovieListProps, MovieProps } from './types';
import { StyleSheet, View, ListRenderItemInfo } from 'react-native';
import { MovieItem } from '@/components';
import { Platform } from '@/theme';
import Carousel from 'react-native-snap-carousel';

const MovieListBase = ({
  data,
  movieListStyle,
  cbActiveSlide,
  sliderWidth = Platform.deviceWidth * 0.8,
}: MovieListProps) => {
  const renderItem = useMemo(() => {
    return ({ item }: ListRenderItemInfo<MovieProps>) => {
      const { title, release_date, image, id } = item;
      return (
        <MovieItem name={title} year={release_date} imgUrl={image} id={id} />
      );
    };
  }, []);

  return (
    <View style={[styles.container, movieListStyle]}>
      <Carousel
        data={data}
        renderItem={renderItem}
        onSnapToItem={index => cbActiveSlide(index)}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Platform.SizeScale(10),
  },
});

export const MovieList = memo(MovieListBase);
