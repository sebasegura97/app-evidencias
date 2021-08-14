import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Pressable, Text} from 'native-base';
import colors from '../../Constants/colors';

interface LinkButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({onPress, loading, label}) => {
  return (
    <Pressable onPress={onPress} disabled={loading}>
      <Text
        textAlign="center"
        fontSize="xs"
        color={loading ? colors.grey : colors.white}>
        {label}
      </Text>
    </Pressable>
  );
};

export default LinkButton;
