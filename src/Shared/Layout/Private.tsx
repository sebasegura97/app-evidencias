import React from 'react';
import {ScrollView} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

import {GradientBackground} from './Layout.styles';
import {nativeBaseConfig, theme} from './nativeBaseConfig';
import Header from '../Header';
import BottomNavigation from '../BottomNavigation';
import {useAppContext} from '../AppContext/AppContex';

const PrivateLayout: React.FC = ({children}) => {
  const {showHeader, showNavigation} = useAppContext();

  return (
    <NativeBaseProvider config={nativeBaseConfig} theme={theme}>
      <Box safeAreaTop flex={1}>
        {showHeader && <Header title="Titulo" />}
        <GradientBackground>
          <ScrollView>{children}</ScrollView>
        </GradientBackground>
        {showNavigation && <BottomNavigation />}
      </Box>
    </NativeBaseProvider>
  );
};

export default PrivateLayout;
