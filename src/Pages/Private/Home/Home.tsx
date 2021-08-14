import React, { useState } from 'react';
import {View, Text, Stack, Heading, Box, Image} from 'native-base';
import PrimaryButton from '../../../Shared/PrimaryButton';
import { useHistory } from 'react-router-native';

const Home = () => {
  const history = useHistory();
  return (

    // <Stack alignItems="center">
    //   <Heading>Bienvenido</Heading>
    //   <Text textAlign="center">
    //     Para iniciar un proceso de recolección de evidencia, presione iniciar.{' '}
    //   </Text>
    //   <Box position="relative" width="250px">
    //     <Image
    //       resizeMode="contain"
    //       alt="background"
    //       height={350}
    //       source={require('./assets/home.png')}
    //     />
    //   </Box>
    //   <PrimaryButton onPress={()=>{history.push("/stepsInfo")}} />

      
    // </Stack>

    <View>
      <Heading textAlign='center' marginBottom={4}> Bienvenido Sebastián </Heading>
      <Text textAlign="center" marginBottom={5}>
        Para empezar un proceso de recolección de evidencias presione iniciar.
      </Text>
      <Box position="relative" width="100%">
        <Image
          resizeMode="contain"
          alt="background"
          height={380}
          source={require('./assets/bg.png')}
        />
      </Box>
    </View>

  );
};

export default Home;
