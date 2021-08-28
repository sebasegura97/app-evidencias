import React from 'react';
import {ScrollView} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

import {GradientBackground} from './Layout.styles';
import {nativeBaseConfig, theme} from './nativeBaseConfig';
import Header from '../Header';
import BottomNavigation from '../BottomNavigation';
import {useAppContext} from '../AppContext/AppContex';
import {useHistory} from 'react-router-native';

const PrivateLayout: React.FC = ({children}) => {
  const {showHeader, showNavigation, setShowHeader, setShowNavigation} =
    useAppContext();
  const history = useHistory();

  history.listen(location => {
    if (setShowNavigation && setShowHeader) {
      if (location.pathname.startsWith('/onboarding')) {
        setShowHeader(false);
        setShowNavigation(false);
      } else {
        setShowHeader(true);
        setShowNavigation(true);
      }
    }
  });

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
