import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useStyleIndicator } from './styles';
import { IndicatorProps } from './types';

const IndicatorBase = ({
  indicatorColor = 'red',
  style,
  ...other
}: IndicatorProps) => {
  const { styles } = useStyleIndicator();

  return (
    <ActivityIndicator
      style={[styles.container, style]}
      {...other}
      color={indicatorColor}
    />
  );
};

export const Indicator = memo(IndicatorBase);
