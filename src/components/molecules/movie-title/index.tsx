import React, { memo } from 'react';
import { Platform } from '@/theme';
import { MovieTitleProps } from './types';
import { StyleSheet, View } from 'react-native';
import { Label } from '@/components';

const MovieTitleBase = ({
  name = '',
  year = '',
  nameStyle = 'h2',
  yearStyle = 'h1',
  containerMovieTitleStyle,
}: MovieTitleProps) => {
  return (
    <View style={[styles.container, containerMovieTitleStyle]}>
      <Label
        fontTyle={nameStyle}
        value={name}
        style={styles.containerName}
        fontColor="white"
      />
      <Label fontTyle={yearStyle} value={year} fontColor="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    opacity: 0.8,
    flexDirection: 'row',
    padding: Platform.SizeScale(10),
  },
  containerName: {
    flex: 1,
  },
});

export const MovieTitle = memo(MovieTitleBase);
