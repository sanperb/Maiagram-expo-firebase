import { DefaultTheme } from '@react-navigation/native';

import Colors from '../utils/colors';

const navigationTheme = {
  ...DefaultTheme,
  // override colors
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    text: Colors.darkest,
    border: Colors.mediumGrey,
    background: Colors.lightest
  }
};

export default navigationTheme;
