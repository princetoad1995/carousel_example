import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { MovieTitle } from './index';

storiesOf('molecules/movie-title', module)
  .add('empty', () => <MovieTitle name="" year="" />)
  .add('data-fake', () => <MovieTitle name="My neighbor Totoro" year="1988" />);
