import React from 'react';
import {Text, Box, Button, Center} from 'native-base';
import {IButtonProps} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Constants/colors';


interface AlternativeButtonProps {
  buttonProps: IButtonProps;
  label: string;
}

const AlternativeButton: React.FC<AlternativeButtonProps> = 
({buttonProps,label},marginLeft:string = "0%") => {
  return (
    <Button marginLeft={marginLeft} maxWidth="50%" {...buttonProps} style={{backgroundColor: 'transparent'}}>
      <Box position="relative">
          <Box
            style={{width: 125, height:35}}
            borderRadius="10px"
            background={{
              linearGradient: {
                colors: [colors.secondaryLight, colors.primaryMain],
                start: [1, 1],
                end: [1, 0],
              },
            }}
          />
        <Center position="absolute" inset="0">
          <Box
            alignItems="center"
            justifyContent="center"
            style={{width: 120, height:30}}
            borderRadius="10px"
            padding={2}
            bg={colors.bgPrimaryDark}>
            <Center>
              <Text textAlign="center" fontSize="xs" lineHeight={16}>
                {label}
              </Text>
            </Center>
          </Box>
        </Center>
      </Box>
    </Button>
  );
};

export default AlternativeButton;
