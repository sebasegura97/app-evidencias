import React, {FC} from 'react';
import {Text, Icon, Center, Pressable} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../Constants/colors';
import {NavigationRoute} from './types';

interface NavigationItemProps {
  route: NavigationRoute;
  onPress: (route: NavigationRoute) => void;
  selected: boolean;
}

const NavigationItem: FC<NavigationItemProps> = ({
  route,
  onPress,
  selected,
}) => {
  return (
    <Pressable py={2} flex={1} onPress={() => onPress(route)}>
      <Center>
        <Icon
          mb={1}
          as={<MaterialIcons name={route.iconName} />}
          color={selected ? colors.primaryMain : colors.white}
          size="sm"
        />

        <Text
          color={selected ? colors.primaryMain : colors.white}
          fontSize={12}>
          {route.label}
        </Text>
      </Center>
    </Pressable>
  );
};

export default NavigationItem;
