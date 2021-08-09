import React from 'react';
import {View, Text, Heading, Box, Image} from 'native-base';

const Home = () => {
  return (
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
