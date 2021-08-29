import React from 'react';
import {Animated, Easing} from 'react-native';
import {Center, Circle, Text, Box, Button} from 'native-base';
import {IButtonProps} from 'native-base';
import colors from '../../Constants/colors';
import {useEffect} from 'react';

interface PrimaryButtonProps {
  buttonProps?: IButtonProps;
  loading?: boolean;
  disabled?: boolean;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonProps,
  loading,
  disabled = false,
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

  const getButtonBorderBackground = () => {
    if (!disabled) {
      return {
        linearGradient: {
          colors: [colors.secondaryLight, colors.primaryMain],
          start: [1, 1],
          end: [1, 0],
        },
      };
    } else {
      return colors.grey;
    }
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
    <Button {...buttonProps} bgColor="transparent">
      <Box position="relative" alignItems="center">
        <Animated.View style={{transform: [{rotate: spin}]}}>
          <Circle w={84} h={84} bg={getButtonBorderBackground()} />
        </Animated.View>
        <Center position="absolute" inset="0">
          <Circle
            w={78}
            h={78}
            padding={2}
            bg={disabled ? colors.darkGrey : colors.bgPrimaryDark}>
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
