import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../Header';
import BottomNavigation from '../BottomNavigation';
import {NativeBaseProvider, Box} from 'native-base';
import {GradientBackground} from './Layout.styles';
import {nativeBaseConfig} from './nativeBaseConfig';

const PrivateLayout: React.FC = ({children}) => {
  return (
    <NativeBaseProvider config={nativeBaseConfig}>
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
