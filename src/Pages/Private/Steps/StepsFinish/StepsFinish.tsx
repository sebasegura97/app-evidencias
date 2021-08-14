import React, { useState } from 'react';
import {View, Text, Stack, Heading, Box, Image} from 'native-base';

import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../Shared/PrimaryButton';


const StepsFinish = () => {
  const history = useHistory();
  return (
    <Stack alignItems="center">
      <Heading>Enviado</Heading>
      <Box position="relative" width="250px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/imagen.png')}
        />
      </Box>
  
      <Text>Tus datos han sido enviados</Text>
      <Box height="15px"></Box>
      <PrimaryButton onPress={()=>{history.push("/home")}} />
      <Box height="20px"></Box>

      
    </Stack>
  );
};

export default StepsFinish;
