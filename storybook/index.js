// if you use expo remove this line
import { AppRegistry } from 'react-native';

import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../src/components/atoms/indicator/index.stories');
  require('../src/components/atoms/star/index.stories');
  require('../src/components/atoms/label/index.stories');
  require('../src/components/atoms/text-field/index.stories');
  require('../src/components/molecules/movie-title/index.stories');
  require('../src/components/molecules/search/index.stories');
  require('../src/components/molecules/movie-item/index.stories');
  require('../src/components/organisms/movie-list/index.stories');
  require('../src/components/templates/home/index.stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
