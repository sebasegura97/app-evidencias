import React, {FC, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {Box, Pressable, ScrollView, Text} from 'native-base';

export interface CollapsableProps {
  title: string;
  body: string;
}

const Collapsable: FC<CollapsableProps> = ({title, body}) => {
  const [expanded, setExpanded] = useState(false);
  const animationHeight = useRef(new Animated.Value(2)).current;
  const textRef = useRef<Text>(null);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    if (expanded) {
      Animated.timing(animationHeight, {
        duration: 400,
        toValue: 120,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animationHeight, {
        duration: 400,
        toValue: 0,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  return (
    <Box>
      <Pressable onPress={toggleExpansion}>
        <Text fontSize="lg">{title}</Text>
      </Pressable>
      <Animated.View style={{height: animationHeight}}>
        <ScrollView>
          <Text fontSize="sm" ref={textRef}>
            {body}
          </Text>
        </ScrollView>
      </Animated.View>
    </Box>
  );
};

export default Collapsable;
