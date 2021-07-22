import React, { useState } from 'react';
import {Text, Box, Heading, Image, Stack, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';


//TODO: Buscar una libreria para seleccionar audios

const StepFour = () => {


  return (
    <Stack alignItems="center">
      <Heading>Paso 4</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar audios
      </Text>
      <Box position="relative" width="250px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepFour.png')}
        />
      </Box>
      <PrimaryButton onPress={() =>{}} />
      <Button onPress={()=>{}}>Saltar</Button>
    </Stack>
  );
};

export default StepFour;

