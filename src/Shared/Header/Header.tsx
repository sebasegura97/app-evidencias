import React, {FC} from 'react';
import {Box, Text} from 'native-base';
import colors from '../../Constants/colors';

export interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <Box bg={colors.bgPrimaryDark} height={16} justifyContent="center">
      <Text color="white" fontSize={20} pl={2}>
        {' '}
        {title}{' '}
      </Text>
    </Box>
  );
};

export default Header;
