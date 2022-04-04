import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { PaginationComponent } from './index';

storiesOf('atoms/pagination', module)
  .add('default', () => (
    <PaginationComponent dotsLength={0} activeDotIndex={0} />
  ))
  .add('data', () => <PaginationComponent dotsLength={5} activeDotIndex={2} />);
