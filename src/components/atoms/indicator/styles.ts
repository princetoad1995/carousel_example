import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '../../../theme';

export const useStyleIndicator = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          right: Platform.SizeScale(),
          position: 'absolute',
        },
      }),
    [],
  );

  return {
    styles,
  };
};
