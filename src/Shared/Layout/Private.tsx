import React from 'react';
import {ScrollView} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

import {GradientBackground} from './Layout.styles';
import {nativeBaseConfig, theme} from './nativeBaseConfig';
import Header from '../Header';
import BottomNavigation from '../BottomNavigation';

const PrivateLayout: React.FC = ({children}) => {
  return (
    <NativeBaseProvider config={nativeBaseConfig} theme={theme}>
      <Box safeAreaTop flex={1}>
        <Header title="Titulo" />
        <GradientBackground>
          <ScrollView>{children}</ScrollView>
        </GradientBackground>
        <BottomNavigation />
      </Box>
    </NativeBaseProvider>
  );
};

export default PrivateLayout;
