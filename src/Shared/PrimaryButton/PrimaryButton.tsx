import React from 'react';
import {Animated, Easing, GestureResponderEvent} from 'react-native';
import {Pressable, Center, Circle, Text, Box} from 'native-base';
import colors from '../../Constants/colors';

interface PrimaryButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({onPress}) => {
  // First set up animation
  const spinValue = new Animated.Value(0);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true, // To make use of native driver for performance
      }),
    ).start();
  };

  return (
    <Pressable onPress={onPress}>
      <Box position="relative">
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Circle
            style={{width: 102, height: 102}}
            bg={{
              linearGradient: {
                colors: [colors.secondaryLight, colors.primaryMain],
                start: [1, 1],
                end: [1, 0],
              },
            }}
          />
        </Animated.View>
        <Center position="absolute" inset="0">
          <Circle style={{width: 96, height: 96}} bg={colors.bgPrimaryDark}>
            <Center>
              <Text textAlign="center" fontSize="xs">
                {' '}
                Botón Mágico{' '}
              </Text>
            </Center>
          </Circle>
        </Center>
      </Box>
    </Pressable>
  );
};

export default PrimaryButton;
