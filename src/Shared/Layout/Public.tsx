import React from 'react';
import {ScrollView} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';
import {GradientBackground} from './Layout.styles';
import {nativeBaseConfig} from './nativeBaseConfig';

const PublicLayout: React.FC = ({children}) => {
  return (
    <NativeBaseProvider config={nativeBaseConfig}>
      <Box safeAreaTop flex={1}>
        <GradientBackground>
          <ScrollView>{children}</ScrollView>
        </GradientBackground>
      </Box>
    </NativeBaseProvider>
  );
};

export default PublicLayout;
