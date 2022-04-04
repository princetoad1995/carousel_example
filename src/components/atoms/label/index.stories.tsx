import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Label } from '.';

storiesOf('atoms/label', module)
  .add('default', () => <Label />)
  .add('h1', () => <Label fontTyle="h1" value="H1 Label" />)
  .add('h2', () => <Label fontTyle="h2" value="H2 Label" />)
  .add('h3', () => <Label fontTyle="h3" value="H3 Label" />);
