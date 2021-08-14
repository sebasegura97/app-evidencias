import React from 'react';
import {Animated, Easing, GestureResponderEvent} from 'react-native';
import {Pressable, Center, Circle, Text, Box, Button} from 'native-base';
import {IButtonProps} from 'native-base';
import colors from '../../Constants/colors';
import {useEffect} from 'react';

interface PrimaryButtonProps {
  buttonProps: IButtonProps;
  loading?: boolean;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonProps,
  loading,
  label,
}) => {
  // First set up animation
  const spinValue = new Animated.Value(0);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animation = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  );

  const startAnimation = () => {
    animation.start();
  };

  const stopAnimation = () => {
    animation.stop();
  };

  useEffect(() => {
    if (loading) {
      startAnimation();
    } else {
      stopAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
// <<<<<<< HEAD
//     <Pressable onPress={onPress}>
//       <Box position="relative">
// =======
    <Button {...buttonProps} style={{backgroundColor: 'transparent'}}>
      <Box position="relative" alignItems="center">

        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Circle
            style={{width: 78, height: 78}}
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
          <Circle
            style={{width: 72, height: 72}}
            padding={2}
            bg={colors.bgPrimaryDark}>
            <Center>
              <Text textAlign="center" fontSize="xs" lineHeight={16}>
                {label}
              </Text>
            </Center>
          </Circle>
        </Center>
      </Box>
    </Button>
  );
};

export default PrimaryButton;
