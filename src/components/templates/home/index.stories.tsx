import { dataFake } from '@/components/organisms/movie-list/index.stories';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Home } from './index';

storiesOf('templates/home', module)
  .add('default', () => <Home data={[]} loading={false} />)
  .add('loading', () => <Home data={[]} loading={true} />)
  .add('data', () => <Home data={dataFake} loading={false} />);
