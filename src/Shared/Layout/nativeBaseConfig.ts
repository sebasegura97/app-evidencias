import {extendTheme} from 'native-base';
import {INativebaseConfig} from 'native-base/lib/typescript/core/NativeBaseContext';
import colors from '../../Constants/colors';

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
  components: {
    TextArea: {
      baseStyle: {
        textAlignVertical: 'top',
      },
    },
    Input: {
      baseStyle: {
        borderColor: 'transparent',
        backgroundColor: colors.bgPrimaryDark,
        borderRadius: 8,
        paddingTop: 4,
        paddingBottom: 4,
        placeholderTextColor: colors.grey,
        _focus: {
          borderColor: '#FFFFFF',
        },
      },
    },
  },
});
