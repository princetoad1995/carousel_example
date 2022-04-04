import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Indicator } from '.';

storiesOf('atoms/indicator', module)
  .add('default', () => <Indicator indicatorColor="red" />)
  .add('red', () => <Indicator indicatorColor="red" />)
  .add('blue', () => <Indicator indicatorColor="blue" />);
