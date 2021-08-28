import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {GradientBackground} from './Layout.styles';
import {nativeBaseConfig, theme} from './nativeBaseConfig';

const PublicLayout: React.FC = ({children}) => {
  return (
    <NativeBaseProvider config={nativeBaseConfig} theme={theme}>
      <Box safeAreaTop flex={1}>
        <GradientBackground>{children}</GradientBackground>
      </Box>
    </NativeBaseProvider>
  );
};

export default PublicLayout;
