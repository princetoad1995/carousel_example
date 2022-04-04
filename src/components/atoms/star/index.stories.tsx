import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Star } from './index';

storiesOf('atoms/star', module)
  .add('clicked', () => <Star clicked={true} />)
  .add('un-click', () => <Star clicked={false} />);
