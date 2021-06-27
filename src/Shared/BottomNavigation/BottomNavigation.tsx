import React, {FC, useState} from 'react';
import colors from '../../Constants/colors';
import {HStack} from 'native-base';
import NavigationItem from './NavigationItem';
import {appRoutes} from './constants';
import {NavigationRoute} from './types';
import {useHistory} from 'react-router-native';

const BottomNavigation: FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const history = useHistory();
  const handlePress = (route: NavigationRoute) => {
    setSelected(route.path);
    history.push(route.path);
  };

  return (
    <HStack
      bg={colors.bgPrimaryDark}
      alignItems="center"
      safeAreaBottom
      shadow={6}>
      {appRoutes.map(route => (
        <NavigationItem
          route={route}
          onPress={handlePress}
          selected={selected === route.path}
          key={route.path}
        />
      ))}
    </HStack>
  );
};

export default BottomNavigation;
