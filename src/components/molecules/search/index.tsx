import React, { memo } from 'react';
import { Platform } from '@/theme';
import { SearchProps } from './types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextField } from '@/components';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBase = ({
  containerSearchStyle,
  onClickSearch,
  value,
  onChangeText,
}: SearchProps) => {
  return (
    <View style={[styles.container, containerSearchStyle]}>
      <TextField
        placeholder="Input movie name"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.containerBtn} onPress={onClickSearch}>
        <Icon name="search1" size={Platform.SizeScale(20)} color={'#2cc5d2'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Platform.SizeScale(5),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: Platform.SizeScale(10),
    marginHorizontal: Platform.SizeScale(30),
  },
  containerBtn: {
    padding: Platform.SizeScale(5),
  },
});

export const Search = memo(SearchBase);
