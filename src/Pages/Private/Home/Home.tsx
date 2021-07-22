import React, { useState } from 'react';
import {View, Text, Stack, Heading, Box, Image} from 'native-base';
import PrimaryButton from '../../../Shared/PrimaryButton';
import { useHistory } from 'react-router-native';


const Home = () => {
  const history = useHistory();
  return (
    <Stack alignItems="center">
      <Heading>Bienvenido</Heading>
      <Text textAlign="center">
        Para iniciar un proceso de recolección de evidencia, presione iniciar.{' '}
      </Text>
      <Box position="relative" width="250px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/home.png')}
        />
      </Box>
      <PrimaryButton onPress={()=>{history.push("/stepOne")}} />

      
    </Stack>
  );
};

export default Home;
