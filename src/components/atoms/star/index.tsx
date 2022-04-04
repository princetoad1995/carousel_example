import React, { memo } from 'react';
import { Platform } from '@/theme';
import { StarProps } from './types';
import Icon from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';

const StarBase = ({
  clicked,
  size = Platform.SizeScale(20),
  starContainer,
}: StarProps) => {
  return (
    <View style={starContainer}>
      {clicked ? (
        <Icon name="star" size={size} color={'#2cc5d2'} />
      ) : (
        <Icon name="staro" size={size} color={'#2cc5d2'} />
      )}
    </View>
  );
};

export const Star = memo(StarBase);
