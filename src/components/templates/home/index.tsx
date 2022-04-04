import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { HomeTemplatesProps } from './types';
import {
  Search,
  MovieList,
  PaginationComponent,
  Indicator,
} from '@/components';

const HomeBase = ({
  data,
  homeStyle,
  loading,
  setData,
}: HomeTemplatesProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [value, setValue] = useState<string>('');

  const onClickSearch = useCallback(() => {
    if (!value) {
      // reload home screen
      setData?.([], true);
    } else {
      const dataFilter = data.filter(item => item.title.includes(value));
      setData?.(dataFilter);
    }
    Keyboard.dismiss();
  }, [value, data, setData]);

  if (loading) {
    return <Indicator style={styles.loading} />;
  }

  return (
    <View style={[styles.container, homeStyle]}>
      <Search
        value={value}
        onChangeText={setValue}
        onClickSearch={onClickSearch}
      />
      <MovieList data={data} cbActiveSlide={setActiveSlide} />
      <PaginationComponent
        dotsLength={data.length}
        activeDotIndex={activeSlide}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export const Home = memo(HomeBase);
