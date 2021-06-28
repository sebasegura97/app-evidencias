import {extendTheme} from 'native-base';
import {INativebaseConfig} from 'native-base/lib/typescript/core/NativeBaseContext';

export const nativeBaseConfig: INativebaseConfig = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export const theme = extendTheme({
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
