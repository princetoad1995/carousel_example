import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { TextField } from '.';

storiesOf('atoms/text-field', module)
  .add('default', () => <TextField />)
  .add('h1', () => <TextField fontTyle="h1" value="H1 Label" />)
  .add('h2', () => <TextField fontTyle="h2" value="H2 Label" />)
  .add('h3', () => <TextField fontTyle="h3" value="H3 Label" />);
