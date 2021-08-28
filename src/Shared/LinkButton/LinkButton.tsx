import React from 'react';
import {Button, IButtonProps, Text} from 'native-base';
import colors from '../../Constants/colors';

interface LinkButtonProps {
  buttonProps?: IButtonProps;
  loading?: boolean;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  buttonProps,
  loading,
  label,
}) => {
  return (
    <Button {...buttonProps} style={{backgroundColor: 'transparent'}}>
      <Text
        textAlign="center"
        fontSize="xs"
        color={loading ? colors.grey : colors.white}>
        {label}
      </Text>
    </Button>
  );
};

export default LinkButton;
