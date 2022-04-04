import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { MovieItem } from './index';

storiesOf('molecules/movie-item', module)
  .add('empty', () => <MovieItem name="" year="" id="" imgUrl="" />)
  .add('data-fake', () => (
    <MovieItem
      name="My neighbor Totoro"
      year="1988"
      imgUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"
      id="1"
    />
  ))
  .add('image-error', () => (
    <MovieItem name="My neighbor Totoro" year="1988" imgUrl="" id="3" />
  ));
