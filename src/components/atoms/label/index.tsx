import React, { memo, useMemo } from 'react';
import { Text } from 'react-native';
import { fontTypeMap } from '@/theme';
import { LabelProps } from './types';

const LabelBase = ({
  fontTyle = 'h1',
  style,
  value = '',
  fontColor = 'black',
  ...other
}: LabelProps) => {
  const initStyle = useMemo(
    () => [
      style,
      {
        fontWeight: fontTypeMap[fontTyle].weight,
        fontSize: fontTypeMap[fontTyle].size,
        color: fontColor,
      },
      ,
    ],
    [fontTyle, style, fontColor],
  );

  return (
    <Text {...other} style={initStyle}>
      {value}
    </Text>
  );
};

export const Label = memo(LabelBase);
