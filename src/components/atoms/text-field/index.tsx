import React, { memo, useMemo } from 'react';
import { TextInput } from 'react-native';
import { fontTypeMap } from '@/theme';
import { TextFieldProps } from './types';

const TextFieldBase = ({
  fontTyle = 'h1',
  style,
  fontColor = 'black',
  ...other
}: TextFieldProps) => {
  const initStyle = useMemo(
    () => [
      style,
      {
        fontWeight: fontTypeMap[fontTyle].weight,
        fontSize: fontTypeMap[fontTyle].size,
        color: fontColor,
        flex: 1,
      },
      ,
    ],
    [fontTyle, style, fontColor],
  );

  return <TextInput {...other} style={initStyle} />;
};

export const TextField = memo(TextFieldBase);
