import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Search } from './index';

storiesOf('molecules/search', module)
  .add('empty', () => (
    <Search onClickSearch={() => {}} value="" onChangeText={() => {}} />
  ))
  .add('value', () => (
    <Search value="Tomorrow" onClickSearch={() => {}} onChangeText={() => {}} />
  ));
